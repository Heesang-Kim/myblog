export const metadata = {
  title: "소개 🧸 · 모찌 블로그",
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <div className="text-6xl animate-float">🧸</div>
        <h1
          className="mt-3 text-3xl sm:text-4xl font-bold text-[color:var(--foreground)]"
          style={{ fontFamily: "var(--font-gaegu)" }}
        >
          안녕하세요, 모찌예요!
        </h1>
        <p className="mt-2 text-sm text-[color:var(--muted)]">
          작고 소중한 것들을 좋아하는 사람이에요 🐰
        </p>
      </header>

      <section className="rounded-[2rem] border border-[color:var(--border)] bg-white/70 p-8 shadow-[0_10px_30px_-15px_rgba(255,122,154,0.35)] space-y-6">
        <div>
          <h2
            className="text-xl font-bold text-[color:var(--primary-strong)]"
            style={{ fontFamily: "var(--font-gaegu)" }}
          >
            🎀 이 블로그는요
          </h2>
          <p className="mt-2 leading-relaxed text-[color:var(--foreground)]">
            하루 중 떠오른 작은 생각들, 좋아하는 디저트, 공부하면서 배운 것들을
            차곡차곡 모아두는 공간이에요. 언제 읽어도 따뜻한 코코아 한 잔 같은
            글을 쓰는 게 목표예요 ☕
          </p>
        </div>

        <div>
          <h2
            className="text-xl font-bold text-[color:var(--primary-strong)]"
            style={{ fontFamily: "var(--font-gaegu)" }}
          >
            💕 좋아하는 것들
          </h2>
          <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { emoji: "🍓", label: "딸기 디저트" },
              { emoji: "📚", label: "느긋한 독서" },
              { emoji: "🎨", label: "파스텔 컬러" },
              { emoji: "🐾", label: "귀여운 동물" },
              { emoji: "☁️", label: "구름 구경" },
              { emoji: "💻", label: "웹 개발" },
            ].map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 rounded-2xl bg-[color:var(--surface-soft)] px-4 py-3 text-sm"
              >
                <span className="text-xl">{item.emoji}</span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2
            className="text-xl font-bold text-[color:var(--primary-strong)]"
            style={{ fontFamily: "var(--font-gaegu)" }}
          >
            📮 연락하기
          </h2>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            하고 싶은 이야기가 있다면 언제든지 편하게 쪽지 보내주세요 💌
          </p>
        </div>
      </section>
    </div>
  );
}
