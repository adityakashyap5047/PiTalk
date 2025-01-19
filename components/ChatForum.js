"use client"

import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import { useUser } from '@clerk/nextjs';

import 'stream-chat-react/dist/css/v2/index.css';

const apiKey = "p62pstehwxp6";
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8ycnE5ZGFOdHAxVzg5SmQ5cW9uWUpRb0hMS3cifQ.bdO8fhS1hBS97g9oSdLw-RYde5f8KDjVMjCMR6UW3dI';


const ChatForum = ({slug}) => {

  const clerkUser = useUser();

  const userId = clerkUser.user?.id;
  const userName = clerkUser.user?.firstName;

  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };

  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', slug, {
      image: 'https://getstream.io/random_png/?name=react',
      name: `${slug} - Discussion`,
      members: [userId],
    });

    setChannel(channel);
    // channel.addMembers([userId]);
  }, [client, slug, userId]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatForum;