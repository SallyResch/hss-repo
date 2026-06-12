import type {Feed, Post} from "@behold/types";
import { InstagramCardProps } from "../types/instagram";
/* This is a comment to be able to merge to main to trigger deployment to master */
const INSTA_FEED_API_URL = process.env.BEHOLD_API_URL!;

export async function getInstagramPosts(): Promise<Post[]>{

    if(!INSTA_FEED_API_URL){
        console.error("Behold api url is not defined in .env");
        return[];
    }

    try{
     const response = await fetch(INSTA_FEED_API_URL, {
        next: {
            revalidate: 3600,
        },
    });

    if(!response.ok){
        console.error(`Could not fetch data: Status ${response.status}`);
        return [];
    }

        const data: Feed = await response.json();
        return data.posts || [];
    } catch (error) {
        console.error("Error fetching Instagram posts:", error)
        return[];
    }
    }
export function mapPost(post: Post): InstagramCardProps{
    return{
        id:post.id,
        image:post.sizes.small.mediaUrl,
        permalink: post.permalink,
        caption: post.caption || "",
        username: (post as any).username || "hss_scout",
        like_count:(post as any).likeCount || (post as any).like_count || 0,
        comments_count:(post as any).commentsCount || (post as any).comments_count || 0,
        
    };
}