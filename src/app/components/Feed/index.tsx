"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
interface ContentFeed {
    id: string
    caption: string
    media_type: string
    media_url: string
    permalink: string
    thumbnail_url: string
    timestamp: string
}
export default function Feed() {
  const [feedTest, setFeedTest] = useState<ContentFeed[]>([]);

  useEffect(() => {
    const fetchInstagramProfile = async (accessToken: string | undefined) => {
      try {
          const response = await fetch(
            `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}`
          );
          const data = await response.json();
          console.log(data);
          setFeedTest(data.data)
      } catch (error) {
        console.log(error)
      }
    };
    fetchInstagramProfile(process.env.NEXT_PUBLIC_ACESS_TOKEN);
  }, []);
  console.log(feedTest)
  return (
    <div>
        {feedTest.map((item) => (
            <div className="border m-4" key={item.id}>
                <p>{item.caption}</p>
                {item.media_type === 'IMAGE' && <Image src={item.media_url} alt=""/>}
                {item.media_type === 'VIDEO' && (
                    // biome-ignore lint/a11y/useMediaCaption: <explanation>
                    <video width={300} controls>
                        <source src={item.media_url} type="video/mp4"/>
                    </video>
                )}
            </div>
        ))}
    </div>
 );
}
