"use client"

import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';



const ChatForum = ({slug, clerkUser}) => {

  const apiKey = "p62pstehwxp6";
  const userToken = clerkUser.token;

  const user = {
    id: clerkUser.id,
    name: clerkUser.name,
    image: `https://getstream.io/random_png/?name=${name}`,
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
      members: [clerkUser.id],
    });

    setChannel(channel);
  }, [client, slug, clerkUser.id]);

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