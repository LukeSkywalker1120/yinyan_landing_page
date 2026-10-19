// Adapted from the public reference markup; editable React components.
import { HeroVideo } from "./HeroVideo";
export function Hero() {
  return (
    <>
      <section
        id="banner"
        className="relative flex min-h-[calc(100dvh-var(--site-header-measured-height,var(--site-header-banner-offset)))] flex-col overflow-hidden bg-black"
      >
        <img
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="hero-media-drift pointer-events-none absolute inset-0 z-0 object-cover object-center"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: "0",
            top: "0",
            right: "0",
            bottom: "0",
            color: "transparent",
          }}
          src="/hero-poster.jpg"
        />
        <HeroVideo />
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(\n      to bottom,\n      rgb(0 0 0 / var(--hero-mask-alpha-top)) 0%,\n      rgb(0 0 0 / var(--hero-mask-alpha-mid)) 58%,\n      rgb(0 0 0 / var(--hero-mask-alpha-bottom)) 100%\n    )",
          }}
          aria-hidden="true"
        ></div>
        <div className="relative z-10 flex flex-1 flex-col justify-center pb-12 pt-10 md:pb-16 md:pt-14">
          <div className="mx-auto w-full px-6 md:px-8 max-w-[1216px] text-center">
            <div className="text-white" data-reveal="">
              <header className="mx-auto w-full max-w-[min(92vw,64rem)] text-center">
                <h1 className="mx-auto max-w-none text-balance text-[clamp(2.75rem,5.1vw+0.5rem,5rem)] font-bold leading-[1.06] tracking-[-0.03em] text-white [text-shadow:0_4px_46px_rgba(0,0,0,.55)]">
                  <span className="block sm:inline">{"一张商品图，"}</span>
                  <span className="block bg-gradient-to-r from-amber-300 via-rose-400 to-violet-400 bg-clip-text text-transparent sm:inline sm:px-2.5">
                    {"生成整套"}
                  </span>
                  <span className="block text-white sm:inline">
                    {"电商营销内容"}
                  </span>
                </h1>
              </header>
            </div>
            <div className="text-white" data-reveal="">
              <div className="mx-auto mt-8 w-full max-w-[min(92vw,56rem)] text-center md:mt-10">
                <p className="w-full text-balance text-base font-normal leading-relaxed tracking-[0.02em] text-white/85 [text-shadow:0_2px_22px_rgba(0,0,0,.5)] sm:text-lg md:text-xl md:leading-[1.7]">
                  {
                    "自动生成商品主图、详情页、营销海报与短视频，让上新、投放和内容运营从几天缩短到几分钟。"
                  }
                </p>
              </div>
            </div>
            <div data-reveal="">
              <div className="mt-10 flex justify-center md:mt-12">
                <a
                  href="https://account.ifrogai.com"
                  className="inline-flex min-w-[12.5rem] items-center justify-center rounded-full border border-white px-9 py-4 md:min-w-[13.5rem] md:px-10 bg-white text-base font-semibold text-black md:leading-tight [-webkit-backdrop-filter:blur(14px)] shadow-[0_16px_44px_-18px_rgba(0,0,0,.48)] transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-white/90"
                >
                  {"免费生成"}
                </a>
              </div>
            </div>
            <div data-reveal="">
              <a
                href="#showcase"
                className="hero-proof-strip group mx-auto mt-8 w-fit max-w-full items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.07] p-2.5 text-left backdrop-blur-md transition duration-300 hover:border-white/30 hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 md:mt-10 md:gap-4 md:p-3"
              >
                <span className="flex items-center gap-1.5 md:gap-2">
                  <span
                    data-proof-index="0"
                    className="relative block overflow-hidden rounded-lg ring-1 ring-white/20 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5"
                    style={{ transitionDelay: "0ms" }}
                  >
                    <img
                      src="/images/hero/live-proof-1.webp"
                      alt=""
                      width={240}
                      height={300}
                      className="h-14 w-11 object-cover md:h-[4.5rem] md:w-14"
                      aria-hidden="true"
                    />
                  </span>
                  <span
                    data-proof-index="1"
                    className="relative block overflow-hidden rounded-lg ring-1 ring-white/20 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5"
                    style={{ transitionDelay: "40ms" }}
                  >
                    <img
                      src="/images/hero/live-proof-2.webp"
                      alt=""
                      width={240}
                      height={300}
                      className="h-14 w-11 object-cover md:h-[4.5rem] md:w-14"
                      aria-hidden="true"
                    />
                  </span>
                  <span
                    data-proof-index="2"
                    className="relative block overflow-hidden rounded-lg ring-1 ring-white/20 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5"
                    style={{ transitionDelay: "80ms" }}
                  >
                    <img
                      src="/images/hero/live-proof-3.webp"
                      alt=""
                      width={240}
                      height={300}
                      className="h-14 w-11 object-cover md:h-[4.5rem] md:w-14"
                      aria-hidden="true"
                    />
                  </span>
                  <span
                    data-proof-index="3"
                    className="relative block overflow-hidden rounded-lg ring-1 ring-white/20 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 hidden sm:block"
                    style={{ transitionDelay: "120ms" }}
                  >
                    <img
                      src="/images/hero/live-proof-4.webp"
                      alt=""
                      width={240}
                      height={300}
                      className="h-14 w-11 object-cover md:h-[4.5rem] md:w-14"
                      aria-hidden="true"
                    />
                  </span>
                  <span
                    data-proof-index="4"
                    data-proof-video=""
                    className="relative block overflow-hidden rounded-lg ring-1 ring-white/20 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 hidden sm:block"
                    style={{ transitionDelay: "160ms" }}
                  >
                    <img
                      src="/images/hero/live-proof-5.webp"
                      alt=""
                      width={240}
                      height={300}
                      className="h-14 w-11 object-cover md:h-[4.5rem] md:w-14"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute inset-0 flex items-center justify-center bg-black/25"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-white drop-shadow"
                        fill="currentColor"
                      >
                        <path d="M8 5.5v13l11-6.5-11-6.5z"></path>
                      </svg>
                    </span>
                  </span>
                </span>
                <span className="pr-1">
                  <span className="block text-[0.8125rem] font-semibold text-white md:text-sm">
                    {"查看生成案例"}
                  </span>
                  <span className="mt-0.5 block text-[0.6875rem] text-white/60 md:text-xs">
                    {"图片"}
                    {" · "}
                    {"视频"}
                  </span>
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 text-white/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
