
import { getInstagramPosts, mapPost } from "@/lib/behold";
import InstagramCard from "./InstagramCard";

export default async function InstagramCarousel() {

    const rawPosts = await getInstagramPosts();
    const posts = rawPosts.map(mapPost);

    return (
        <div className="w-full">
            <div className="flex gap-2 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none -webkit-overflow-scrolling-touch">
                {posts.map((post) => (
                    <div key={post.id} className="snap-start shrink-0 w-70 sm:w-87.5">
                        <InstagramCard post={post} />
                    </div>
                ))}
            </div>
        </div>
    )
}
