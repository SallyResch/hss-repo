import { InstagramCardProps } from "@/types/instagram"
import Image from "next/image"
interface ComponentProps {
    post: InstagramCardProps;
}

export default function InstagramCard({ post }: ComponentProps) {
    return (
        <div className="bg-white rounded-xl overflow-hidden w-72 flex flex-col shadow-sm border-gray-100">
             <a
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            >
                <Image
                src={post.image}
                alt={post.caption || "Instagram post"}
                width={400}
                height={400}
                className="object-cover w-full aspect-square"
                />      
             </a>

             <div className="p-3 flex flex-col gap-2">
                <div className="text-sm text-gray-700 flex gap-2 items-center">
                    <span>Likes {post.like_count || 0}</span>
                    
                    <span className="flex items-center gap-1">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        {post.comments_count || 0}
                    </span>
                </div>
                
                <p className="text-sm text-gray-800 line-clamp-2">
                    <span className="font-bold mr-1">
                        {post.username}
                    </span>
                    {post.caption}
                </p>

                <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-gray-800 mt-auto"
                >
                    see translation
                </a>
             </div>
        </div>
    )
}