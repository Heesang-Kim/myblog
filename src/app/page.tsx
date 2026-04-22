import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-14">
      <section className="relative overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white/70 p-8 shadow-[0_10px_30px_-15px_rgba(255,122,154,0.4)] sm:p-12">
        <div className="absolute -right-8 -top-6 text-[7rem] opacity-40 select-none" aria-hidden>
          🌸
        </div>
        <div className="absolute bottom-4 right-8 text-4xl animate-float select-none" aria-hidden>
          ☁️
        </div>
        <p className="text-sm text-[color:var(--primary-strong)]">
          welcome 💌
        </p>
        <h1
          className="mt-2 text-4xl sm:text-5xl font-bold text-[color:var(--foreground)] leading-tight"
          style={{ fontFamily: "var(--font-gaegu)" }}
        >
          안녕하세요, <br />
          모찌 블로그에 오신 걸 환영해요 🎀
        </h1>
        <p className="mt-5 max-w-md text-[color:var(--muted)] leading-relaxed">
          소소한 일상, 달콤한 디저트, 개발하면서 배운 것들을 <br />
          폭신폭신하게 기록하는 작은 공간이에요 🍑
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/posts"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--primary-strong)] px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-[#ff5f88] hover:shadow-lg"
          >
            글 구경하기 <span aria-hidden>→</span>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-5 py-2.5 text-sm font-medium text-[color:var(--foreground)] transition hover:bg-[color:var(--surface-soft)]"
          >
            블로그 소개 🧸
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between">
          <h2
            className="text-2xl font-bold text-[color:var(--foreground)]"
            style={{ fontFamily: "var(--font-gaegu)" }}
          >
            🍡 최근 글
          </h2>
          <Link
            href="/posts"
            className="text-sm text-[color:var(--primary-strong)] hover:underline"
          >
            전체 보기 →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
