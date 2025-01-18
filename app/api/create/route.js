import { StreamChat } from "stream-chat";

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const user_id = "user_id";

export async function GET() {
    const ServerClient = StreamChat.getInstance(api_key, api_secret);
    //Create User Token
    const token = ServerClient.createToken(user_id);
    return Response.json({ message: "Welcom" })
}