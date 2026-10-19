// Adapted from the public reference markup; editable React components.

export function Scenarios() {
  return (
    <>
      <section
        id="solutions"
        className="bg-white pb-16 pt-16 md:pb-24 md:pt-24"
      >
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1216px]">
          <div className="text-center" data-reveal="">
            <span
              aria-hidden="true"
              className="section-kicker mb-5 inline-block h-px w-10 origin-center bg-black/25"
            ></span>
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {"三类高频业务场景"}
            </h2>
            <p className="mx-auto mt-3 max-w-[min(92vw,52rem)] text-sm leading-relaxed text-muted md:mt-4 md:text-base md:leading-relaxed lg:max-w-[min(92vw,60rem)]">
              {"选择你的内容任务，快速完成对应素材。"}
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <div
              className="group relative overflow-hidden rounded-3xl border border-black/6 bg-white shadow-card transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-black/12 hover:shadow-[0_34px_70px_-34px_rgba(17,17,17,.38)]"
              data-reveal=""
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#ececef]">
                <img
                  alt="AI 生成电商详情页与商品图效果"
                  loading="lazy"
                  decoding="async"
                  className="object-cover transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.065]"
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
                  src="/images/showcase/scenario-ecommerce.webp"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/5 opacity-70 transition-opacity duration-500 group-hover:opacity-40"></div>
                <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/45 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  {"电商上新"}
                </span>
                <span className="absolute right-4 top-4 text-xs font-semibold tracking-[0.16em] text-white/70 [text-shadow:0_1px_8px_rgba(0,0,0,.45)]">
                  {"0"}
                  {"1"}
                </span>
              </div>
              <div className="p-6 md:p-7">
                <h3 className="text-2xl font-semibold tracking-tight text-ink">
                  {"快速完成商品上架"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {"解决 SKU 多、拍摄与设计周期长的问题。"}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-black/[0.045] px-3 py-1.5 text-xs font-medium text-black/60 transition-colors duration-300 group-hover:bg-black/[0.065]">
                    {"商品主图"}
                  </span>
                  <span className="rounded-full bg-black/[0.045] px-3 py-1.5 text-xs font-medium text-black/60 transition-colors duration-300 group-hover:bg-black/[0.065]">
                    {"详情页"}
                  </span>
                  <span className="rounded-full bg-black/[0.045] px-3 py-1.5 text-xs font-medium text-black/60 transition-colors duration-300 group-hover:bg-black/[0.065]">
                    {"SKU 批量图"}
                  </span>
                </div>
                <div className="mt-6 border-t border-black/7 pt-5">
                  <p className="text-sm font-semibold text-ink">
                    {"一套商品素材，生成整套上新内容"}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="group relative overflow-hidden rounded-3xl border border-black/6 bg-white shadow-card transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-black/12 hover:shadow-[0_34px_70px_-34px_rgba(17,17,17,.38)]"
              data-reveal=""
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#ececef]">
                <img
                  alt="AI 生成商品营销主图与社媒素材效果"
                  loading="lazy"
                  decoding="async"
                  className="object-cover transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.065]"
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
                  src="/images/showcase/scenario-social.webp"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/5 opacity-70 transition-opacity duration-500 group-hover:opacity-40"></div>
                <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/45 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  {"社媒投放"}
                </span>
                <span className="absolute right-4 top-4 text-xs font-semibold tracking-[0.16em] text-white/70 [text-shadow:0_1px_8px_rgba(0,0,0,.45)]">
                  {"0"}
                  {"2"}
                </span>
              </div>
              <div className="p-6 md:p-7">
                <h3 className="text-2xl font-semibold tracking-tight text-ink">
                  {"同一卖点生成多版创意"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {"解决多渠道、多尺寸反复改稿的问题。"}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-black/[0.045] px-3 py-1.5 text-xs font-medium text-black/60 transition-colors duration-300 group-hover:bg-black/[0.065]">
                    {"营销海报"}
                  </span>
                  <span className="rounded-full bg-black/[0.045] px-3 py-1.5 text-xs font-medium text-black/60 transition-colors duration-300 group-hover:bg-black/[0.065]">
                    {"种草配图"}
                  </span>
                  <span className="rounded-full bg-black/[0.045] px-3 py-1.5 text-xs font-medium text-black/60 transition-colors duration-300 group-hover:bg-black/[0.065]">
                    {"多尺寸广告"}
                  </span>
                </div>
                <div className="mt-6 border-t border-black/7 pt-5">
                  <p className="text-sm font-semibold text-ink">
                    {"更快测试不同创意与投放方向"}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="group relative overflow-hidden rounded-3xl border border-black/6 bg-white shadow-card transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-black/12 hover:shadow-[0_34px_70px_-34px_rgba(17,17,17,.38)]"
              data-reveal=""
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#ececef]">
                <img
                  alt="AI 生成商品营销短视频画面"
                  loading="lazy"
                  decoding="async"
                  className="object-cover transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.065]"
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
                  src="/images/showcase/scenario-video.webp"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/5 opacity-70 transition-opacity duration-500 group-hover:opacity-40"></div>
                <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/45 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  {"短视频带货"}
                </span>
                <span className="absolute right-4 top-4 text-xs font-semibold tracking-[0.16em] text-white/70 [text-shadow:0_1px_8px_rgba(0,0,0,.45)]">
                  {"0"}
                  {"3"}
                </span>
              </div>
              <div className="p-6 md:p-7">
                <h3 className="text-2xl font-semibold tracking-tight text-ink">
                  {"从商品图直接生成视频"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {"解决脚本、画面和剪辑依赖多人协作的问题。"}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-black/[0.045] px-3 py-1.5 text-xs font-medium text-black/60 transition-colors duration-300 group-hover:bg-black/[0.065]">
                    {"产品展示"}
                  </span>
                  <span className="rounded-full bg-black/[0.045] px-3 py-1.5 text-xs font-medium text-black/60 transition-colors duration-300 group-hover:bg-black/[0.065]">
                    {"口播带货"}
                  </span>
                  <span className="rounded-full bg-black/[0.045] px-3 py-1.5 text-xs font-medium text-black/60 transition-colors duration-300 group-hover:bg-black/[0.065]">
                    {"字幕剪辑"}
                  </span>
                </div>
                <div className="mt-6 border-t border-black/7 pt-5">
                  <p className="text-sm font-semibold text-ink">
                    {"更稳定地产出信息流与带货视频"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
