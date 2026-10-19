// Adapted from the public reference markup; editable React components.

export function Features() {
  return (
    <>
      <section
        id="features"
        className="relative overflow-hidden bg-[#111214] py-16 text-white md:py-24"
      >
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[110px]"></div>
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-amber-400/10 blur-[100px]"></div>
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1216px] relative">
          <div
            className="text-center [&_.section-kicker]:bg-white/30 [&_h2]:text-white [&_p]:text-white/60"
            data-reveal=""
          >
            <span
              aria-hidden="true"
              className="section-kicker mb-5 inline-block h-px w-10 origin-center bg-black/25"
            ></span>
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {"稳定交付背后的企业级能力"}
            </h2>
            <p className="mx-auto mt-3 max-w-[min(92vw,52rem)] text-sm leading-relaxed text-muted md:mt-4 md:text-base md:leading-relaxed lg:max-w-[min(92vw,60rem)]">
              {"把复杂技术转化为可批量、可复用、可持续交付的内容生产能力。"}
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] px-6 py-6 text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,.15),transparent_48%)] before:opacity-0 before:transition-opacity before:duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.08] hover:before:opacity-100"
              data-reveal=""
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-ink shadow-[0_12px_30px_-18px_rgba(0,0,0,.8)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-3 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-8 w-8 stroke-[2.2] text-ink"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="8" stroke="currentColor"></circle>
                  <circle cx="12" cy="12" r="4" stroke="currentColor"></circle>
                  <circle
                    cx="12"
                    cy="12"
                    r="1.5"
                    stroke="currentColor"
                  ></circle>
                </svg>
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold leading-tight text-white">
                  {"智能卖点提取"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/[0.58]">
                  {"自动抓取内容核心表达点，帮助创意更快进入可传播状态。"}
                </p>
              </div>
            </div>
            <div
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] px-6 py-6 text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,.15),transparent_48%)] before:opacity-0 before:transition-opacity before:duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.08] hover:before:opacity-100"
              data-reveal=""
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-ink shadow-[0_12px_30px_-18px_rgba(0,0,0,.8)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-3 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-8 w-8 stroke-[2.2] text-ink"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="4"
                    width={18}
                    height={16}
                    rx="2"
                    stroke="currentColor"
                  ></rect>
                  <path d="M3 10h18M10 20V10" stroke="currentColor"></path>
                </svg>
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold leading-tight text-white">
                  {"专业排版引擎"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/[0.58]">
                  {"按成熟视觉结构自动编排版面，让信息传达更清晰有力。"}
                </p>
              </div>
            </div>
            <div
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] px-6 py-6 text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,.15),transparent_48%)] before:opacity-0 before:transition-opacity before:duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.08] hover:before:opacity-100"
              data-reveal=""
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-ink shadow-[0_12px_30px_-18px_rgba(0,0,0,.8)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-3 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-8 w-8 stroke-[2.2] text-ink"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" stroke="currentColor"></circle>
                  <path
                    d="M8 12.5l2.5 2.5L16.5 9"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold leading-tight text-white">
                  {"一致性保障"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/[0.58]">
                  {"在图片、视频、文案之间保持统一调性，强化品牌记忆。"}
                </p>
              </div>
            </div>
            <div
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] px-6 py-6 text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,.15),transparent_48%)] before:opacity-0 before:transition-opacity before:duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.08] hover:before:opacity-100"
              data-reveal=""
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-ink shadow-[0_12px_30px_-18px_rgba(0,0,0,.8)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-3 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-8 w-8 stroke-[2.2] text-ink"
                  aria-hidden="true"
                >
                  <path
                    d="M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4"
                    stroke="currentColor"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold leading-tight text-white">
                  {"批量处理"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/[0.58]">
                  {"支持批量生成与批量改写，显著提升团队内容产能。"}
                </p>
              </div>
            </div>
            <div
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] px-6 py-6 text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,.15),transparent_48%)] before:opacity-0 before:transition-opacity before:duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.08] hover:before:opacity-100"
              data-reveal=""
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-ink shadow-[0_12px_30px_-18px_rgba(0,0,0,.8)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-3 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-8 w-8 stroke-[2.2] text-ink"
                  aria-hidden="true"
                >
                  <path
                    d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4z"
                    stroke="currentColor"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M19 3v3M20.5 4.5h-3M5 17v2M6 18H4"
                    stroke="currentColor"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold leading-tight text-white">
                  {"物理级光影重建"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/[0.58]">
                  {"普通拍摄素材也能快速得到更高级、更稳定的视觉质感。"}
                </p>
              </div>
            </div>
            <div
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] px-6 py-6 text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,.15),transparent_48%)] before:opacity-0 before:transition-opacity before:duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.08] hover:before:opacity-100"
              data-reveal=""
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-ink shadow-[0_12px_30px_-18px_rgba(0,0,0,.8)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-3 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-8 w-8 stroke-[2.2] text-ink"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" stroke="currentColor"></circle>
                  <path
                    d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18"
                    stroke="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold leading-tight text-white">
                  {"多语言支持"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/[0.58]">
                  {"支持多语种创意表达，便于不同地区与渠道同步发布。"}
                </p>
              </div>
            </div>
            <div
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] px-6 py-6 text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,.15),transparent_48%)] before:opacity-0 before:transition-opacity before:duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.08] hover:before:opacity-100"
              data-reveal=""
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-ink shadow-[0_12px_30px_-18px_rgba(0,0,0,.8)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-3 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-8 w-8 stroke-[2.2] text-ink"
                  aria-hidden="true"
                >
                  <path
                    d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"
                    stroke="currentColor"
                    strokeLinejoin="round"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="2.5"
                    stroke="currentColor"
                  ></circle>
                </svg>
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold leading-tight text-white">
                  {"即时预览"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/[0.58]">
                  {"实时查看生成结果并快速迭代，减少无效等待。"}
                </p>
              </div>
            </div>
            <div
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] px-6 py-6 text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,.15),transparent_48%)] before:opacity-0 before:transition-opacity before:duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.08] hover:before:opacity-100"
              data-reveal=""
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-ink shadow-[0_12px_30px_-18px_rgba(0,0,0,.8)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-3 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-8 w-8 stroke-[2.2] text-ink"
                  aria-hidden="true"
                >
                  <path
                    d="M12 4v10M8.5 10.5L12 14l3.5-3.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M4 15.5V18a2 2 0 002 2h12a2 2 0 002-2v-2.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold leading-tight text-white">
                  {"高清输出"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/[0.58]">
                  {"按目标平台需求输出高质量素材，直接进入发布链路。"}
                </p>
              </div>
            </div>
            <div
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] px-6 py-6 text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,.15),transparent_48%)] before:opacity-0 before:transition-opacity before:duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.08] hover:before:opacity-100"
              data-reveal=""
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-ink shadow-[0_12px_30px_-18px_rgba(0,0,0,.8)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-3 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-8 w-8 stroke-[2.2] text-ink"
                  aria-hidden="true"
                >
                  <path
                    d="M8 3H6a3 3 0 00-3 3v2M16 3h2a3 3 0 013 3v2M8 21H6a3 3 0 01-3-3v-2M16 21h2a3 3 0 003-3v-2"
                    stroke="currentColor"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold leading-tight text-white">
                  {"自定义尺寸"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/[0.58]">
                  {"灵活设置比例与尺寸，适配不同内容位与屏幕场景。"}
                </p>
              </div>
            </div>
            <div
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] px-6 py-6 text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,.15),transparent_48%)] before:opacity-0 before:transition-opacity before:duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.08] hover:before:opacity-100"
              data-reveal=""
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-ink shadow-[0_12px_30px_-18px_rgba(0,0,0,.8)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-3 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-8 w-8 stroke-[2.2] text-ink"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width={14}
                    height={18}
                    rx="2"
                    stroke="currentColor"
                  ></rect>
                  <path
                    d="M12.5 6.5l5 5M10 16l-1 4 4-1 7-7a2 2 0 00-2.8-2.8l-7 7z"
                    stroke="currentColor"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold leading-tight text-white">
                  {"二次编辑"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/[0.58]">
                  {"支持生成后二次打磨，让每条内容更贴近传播目标。"}
                </p>
              </div>
            </div>
            <div
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] px-6 py-6 text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,.15),transparent_48%)] before:opacity-0 before:transition-opacity before:duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.08] hover:before:opacity-100"
              data-reveal=""
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-ink shadow-[0_12px_30px_-18px_rgba(0,0,0,.8)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-3 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-8 w-8 stroke-[2.2] text-ink"
                  aria-hidden="true"
                >
                  <path
                    d="M12 4l1.4 3.6L17 9l-3.6 1.4L12 14l-1.4-3.6L7 9l3.6-1.4L12 4z"
                    stroke="currentColor"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M18.5 4v2M19.5 5h-2M6 16l-2.5 2.5M8.5 18.5L6 16"
                    stroke="currentColor"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold leading-tight text-white">
                  {"风格迁移"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/[0.58]">
                  {"快速复用高表现风格，让新品或新主题更快完成冷启动。"}
                </p>
              </div>
            </div>
            <div
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] px-6 py-6 text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,.15),transparent_48%)] before:opacity-0 before:transition-opacity before:duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.08] hover:before:opacity-100"
              data-reveal=""
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-ink shadow-[0_12px_30px_-18px_rgba(0,0,0,.8)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-3 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-8 w-8 stroke-[2.2] text-ink"
                  aria-hidden="true"
                >
                  <path
                    d="M13 2L5 13h6l-1 9 9-12h-6l0-8z"
                    stroke="currentColor"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold leading-tight text-white">
                  {"极速生成"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/[0.58]">
                  {"通过加速生成链路，缩短从创意到上线的整体周期。"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
