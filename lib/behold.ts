
import type {Feed, Post} from "@behold/types";
import { InstagramCardProps } from "@/types/instagram";

const INSTA_FEED_API_URL = process.env.BEHOLD_API_URL!;

export async function getInstagramPosts(): Promise<Post[]>{
    const response = await fetch(INSTA_FEED_API_URL, {
        next: {
            revalidate: 3600,
        },
    });

    if(!response.ok){
        throw new Error("Could not fetch data");
    }

    const data: Feed = await response.json();
    return data.posts;
}

export function mapPost(post: Post): InstagramCardProps{
    return{
        id:post.id,
        image:post.sizes.small.mediaUrl,
        permalink: post.permalink,
        caption: post.caption,
    };
}