import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

const PASTELS = [
  "bg-[#fff0f3] hover:bg-[#ffe1e9]",
  "bg-[#fff6e1] hover:bg-[#ffecc4]",
  "bg-[#eafff3] hover:bg-[#d6fbe6]",
  "bg-[#efeaff] hover:bg-[#e1d9ff]",
  "bg-[#e7f5ff] hover:bg-[#d0ecff]",
];

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

export function PostCard({ post, index }: { post: PostMeta; index: number }) {
  const bg = PASTELS[index % PASTELS.length];
  return (
    <Link
      href={`/posts/${post.slug}`}
      className={`group block rounded-3xl ${bg} p-6 shadow-[0_8px_24px_-12px_rgba(255,122,154,0.35)] ring-1 ring-white/60 transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(255,122,154,0.45)]`}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm"
          aria-hidden
        >
          {post.emoji}
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1 text-xs text-[color:var(--muted)]">
            {formatDate(post.date)}
          </div>
          <h3
            className="text-xl font-bold leading-snug text-[color:var(--foreground)] transition group-hover:text-[color:var(--primary-strong)]"
            style={{ fontFamily: "var(--font-gaegu)" }}
          >
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-[color:var(--muted)]">
            {post.excerpt}
          </p>
          {post.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/70 px-2.5 py-0.5 text-[11px] text-[color:var(--primary-strong)]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
