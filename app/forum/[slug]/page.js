import ChatForum from "@/components/ChatForum"
import { currentUser } from "@clerk/nextjs/server"

export default async function Page({ params }) {

    const slug = (await params).slug
    const user = await currentUser()

    return <ChatForum slug={slug} clerkUser={{id: user.id, name: user.firstName, image: user.imageUrl, token: user.publicMetadata.token}}/>
}
