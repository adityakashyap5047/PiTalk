import { StreamChat } from "stream-chat";

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
    console.log(token);
    console.log(token);
    return Response.json({ message: "Welcome" })
}