// Adapted from the public reference markup; editable React components.

export function ApparelTeaser() {
  return (
    <>
      <section className="bg-page pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1344px]">
          <div
            className="overflow-hidden rounded-3xl bg-ink shadow-float"
            data-reveal=""
          >
            <div className="grid items-stretch lg:grid-cols-[1fr_0.9fr]">
              <div className="p-8 md:p-12 lg:p-14">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                  {"服装类王牌能力"}
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {"一件衣服，铺满整个服装内容需求"}
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                  {
                    "白底图上模特、替换模特形象、替换场景背景、配饰试戴，可在同一件衣服上批量组合，纹理与身份保持一致。"
                  }
                </p>
                <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  <li className="flex items-start gap-2.5 text-sm text-white/85">
                    <svg
                      viewBox="0 0 24 24"
                      className="mt-0.5 h-4 w-4 shrink-0 text-white/55"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12.5l4.2 4.2L19 7"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>{"格纹条纹印花不错乱"}</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-white/85">
                    <svg
                      viewBox="0 0 24 24"
                      className="mt-0.5 h-4 w-4 shrink-0 text-white/55"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12.5l4.2 4.2L19 7"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>{"同款多模特多体型"}</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-white/85">
                    <svg
                      viewBox="0 0 24 24"
                      className="mt-0.5 h-4 w-4 shrink-0 text-white/55"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12.5l4.2 4.2L19 7"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>{"同款多场景多季节"}</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-white/85">
                    <svg
                      viewBox="0 0 24 24"
                      className="mt-0.5 h-4 w-4 shrink-0 text-white/55"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12.5l4.2 4.2L19 7"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>{"输出可商用"}</span>
                  </li>
                </ul>
                <a
                  href="/apparel/"
                  className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  {"查看服装能力详情"}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
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
              <div className="relative min-h-[18rem] bg-black/20 lg:min-h-full">
                <img
                  alt="一件衣服，铺满整个服装内容需求"
                  loading="lazy"
                  decoding="async"
                  className="object-cover"
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
                  src="/images/apparel/consistency-matrix.webp"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent lg:from-ink/60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
