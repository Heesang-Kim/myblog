import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";

export const metadata = {
  title: "글 목록 🍡 · 단영 블로그",
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm text-[color:var(--primary-strong)]">posts 📚</p>
        <h1
          className="mt-1 text-3xl sm:text-4xl font-bold"
          style={{ fontFamily: "var(--font-gaegu)" }}
        >
          전체 글 목록
        </h1>
        <p className="mt-2 text-sm text-[color:var(--muted)]">
          지금까지 {posts.length}개의 글이 쌓였어요 ✨
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </div>
  );
}
