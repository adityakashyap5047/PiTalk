import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
// const user_id = "*********************************";     //same as the clerk user_id

//webhooks -> if we assign a work and if that work is done then the api hits a post request to a particular end-point

//ngrok -> ngrok helps to make a tunnel of the localhost

export async function POST(request) {

    const serverClient = StreamChat.getInstance(api_key, api_secret);

    //getting the user data from clerk using clerk webhooks
    const user = await request.json();
    console.log("A NEW USER HAS BEEN CREATED")

    //Create User Token
    const user_id = user.data.id;
    const token = serverClient.createToken(user_id);

    //adding meta data into clerk
    const client = await clerkClient();

    await client.users.updateUserMetadata(user_id, {
        publicMetadata: {
            token: token
        }
    })

    //creating user
    await serverClient.upsertUser({id: user.data.id});
    
    //Give access to this user for all chats
    const slugs = ["Python", "Js", "React", "Css", "Web"];
    slugs.forEach(async (slug) => {
        const channel = serverClient.channel('messaging', slug, {
            image: `/${slug}-logo.png`,
            name: `${slug} - Talk`,
            created_by_id: user.data.id,
        })
        await channel.create();
        channel.addMembers([user.data.id])
    })
    return Response.json({ message: "Welcome" })
}