
import Image from "next/image";
import { getInstagramPosts, mapPost } from "@/lib/behold";

export default async function InstagramCarousel() {

    const rawPosts = await getInstagramPosts();
    const posts = rawPosts.map(mapPost);

    return (
        <div className="flex gap-4 overflow-x-auto">
            {posts.map((post) => (
                <a
                    key={post.id}
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={post.image}
                        alt={post.caption || "Instagram post"}
                        width={400}
                        height={400}
                        className="rounded-xl object-cover"
                    />
                </a>
            ))}
        </div>
    )
}
