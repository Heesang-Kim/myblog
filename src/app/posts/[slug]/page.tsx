import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
    return {
      title: `${post.title} · 모찌 블로그`,
      description: post.excerpt,
    };
  } catch {
    return { title: "글을 찾을 수 없어요" };
  }
}

function formatDate(date: string) {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = await getPost(slug);
  } catch {
    notFound();
  }

  return (
    <article className="space-y-8">
      <Link
        href="/posts"
        className="inline-flex items-center gap-1 text-sm text-[color:var(--muted)] hover:text-[color:var(--primary-strong)]"
      >
        ← 글 목록으로
      </Link>

      <header className="rounded-[2rem] border border-[color:var(--border)] bg-white/70 p-8 text-center shadow-[0_10px_30px_-15px_rgba(255,122,154,0.35)]">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[color:var(--surface-soft)] text-5xl shadow-sm">
          {post.emoji}
        </div>
        <h1
          className="mt-5 text-3xl sm:text-4xl font-bold leading-tight text-[color:var(--foreground)]"
          style={{ fontFamily: "var(--font-gaegu)" }}
        >
          {post.title}
        </h1>
        <div className="mt-3 text-xs text-[color:var(--muted)]">
          {formatDate(post.date)}
        </div>
        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap justify-center gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[color:var(--surface-soft)] px-3 py-1 text-[11px] text-[color:var(--primary-strong)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div
        className="prose-cute rounded-[2rem] bg-white/70 p-8 sm:p-10 border border-[color:var(--border)] shadow-[0_10px_30px_-20px_rgba(255,122,154,0.4)]"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <div className="text-center text-sm text-[color:var(--muted)]">
        끝까지 읽어주셔서 고마워요 💕
      </div>
    </article>
  );
}
