import { InstagramCardProps } from "@/types/instagram"
import Image from "next/image"

interface ComponentProps {
    post: InstagramCardProps;
}

export default function InstagramCard({ post }: ComponentProps) {
    return (
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
                className="rounded-xl object-cover w-60 h-60"
            />
        </a>
    )
}