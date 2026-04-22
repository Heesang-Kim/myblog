import type { Metadata } from "next";
import { Gaegu, Gowun_Dodum } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const gaegu = Gaegu({
  variable: "--font-gaegu",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const gowun = Gowun_Dodum({
  variable: "--font-gowun",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "단영 블로그 🌊",
  description: "소소한 일상과 좋아하는 것들을 기록하는 작은 바다",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ko"
      className={`${gaegu.variable} ${gowun.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-20 backdrop-blur-md bg-white/60 border-b border-[color:var(--border)]">
          <nav className="max-w-3xl mx-auto flex items-center justify-between px-5 py-4">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl animate-float">🐳</span>
              <span
                className="text-xl font-bold tracking-tight text-[color:var(--primary-strong)]"
                style={{ fontFamily: "var(--font-gaegu)" }}
              >
                단영 블로그
              </span>
            </Link>
            <div className="flex items-center gap-5 text-sm">
              <Link
                href="/"
                className="hover:text-[color:var(--primary-strong)] transition"
              >
                홈
              </Link>
              <Link
                href="/posts"
                className="hover:text-[color:var(--primary-strong)] transition"
              >
                글목록
              </Link>
              <Link
                href="/about"
                className="hover:text-[color:var(--primary-strong)] transition"
              >
                소개
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-1 w-full max-w-3xl mx-auto px-5 py-10">
          {children}
        </main>

        <footer className="py-10 text-center text-xs text-[color:var(--muted)]">
          <div className="mb-1">🐚 🐠 🌊 ⭐ 🫧</div>
          <div>© 2026 단영 블로그 · Made with love & Next.js</div>
        </footer>
      </body>
    </html>
  );
}
