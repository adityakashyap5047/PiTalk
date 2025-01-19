import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";  

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
// const user_id = "user_2roRzHxSyBdC89UJ8qVBPaL3HtS";     //same as the clerk user_id

//webhooks -> if we assign a work and if that work is done then the api hits a post request to a particular end-point

//ngrok -> ngrok helps to make a tunnel of the localhost

export async function POST(request) {

    const ServerClient = StreamChat.getInstance(api_key, api_secret);

    //getting the user data from clerk
    const user = await request.json();
    console.log("A NEW USER HAS BEEN CREATED")
    //Create User Token
    const user_id = user.data.id;
    const token = ServerClient.createToken(user_id);

    //adding meta data into clerk
    const client = await clerkClient();

    await client.users.updateUserMetadata(user_id, {
        publicMetadata: {
            token: token
        }
    })

    //creating user
    await ServerClient.upsertUser({id: user.data.id});
    
    //Give access to this user for all chats
    const slugs = ["python-chat-new", "js-chat-new", "react-chat-new", "css-chat-new", "web-chat-new"];
    slugs.forEach(async (slug) => {
        const channel = ServerClient.channel('messaging', slug, {
            image: 'https://getstream.io/random_png/?name=react',
            name: `${slug} - Discussion`,
            created_by_id: user.data.id,
        })
        await channel.create();
        channel.addMembers([user.data.id])
    })
    return Response.json({ message: "Welcome" })
}