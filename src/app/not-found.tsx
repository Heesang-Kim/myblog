import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <div className="text-7xl animate-float">🦀</div>
      <h1
        className="mt-6 text-3xl font-bold text-[color:var(--foreground)]"
        style={{ fontFamily: "var(--font-gaegu)" }}
      >
        어라, 길을 잃었어요
      </h1>
      <p className="mt-2 text-sm text-[color:var(--muted)]">
        파도에 휩쓸렸나봐요 🥲
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-full bg-[color:var(--primary-strong)] px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-[#1a8ba9]"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
