
import { getInstagramPosts, mapPost } from "@/lib/behold";
import InstagramCard from "./InstagramCard";
import { PLACEHOLDER_POSTS } from "@/data/instagramPlaceholder";
export default async function InstagramCarousel() {
    const rawPosts = await getInstagramPosts();
    const posts = rawPosts.length > 0 ? rawPosts.map(mapPost) : PLACEHOLDER_POSTS;

    return (
        <div className="w-full">
            <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none -webkit-overflow-scrolling-touch">
                {posts.map((post) => (
                    <div key={post.id} className="snap-start shrink-0">
                        <InstagramCard post={post} />
                    </div>
                ))}
            </div>
        </div>
    )
}
