import { SERVICE_QR_CODE } from "../config/brand";
// Adapted from the public reference markup; editable React components.

export function PartnerContent({
  onClose,
  onContact,
}: {
  onClose: () => void;
  onContact: () => void;
}) {
  return (
    <>
      <div className="max-h-[calc(100dvh-2rem)] w-full max-w-3xl overflow-y-auto rounded-2xl border border-black/10 bg-white shadow-[0_28px_90px_-42px_rgba(17,17,17,0.55)]">
        <div className="relative border-b border-black/8 bg-[#fbfbfc] px-4 py-4 md:px-7 md:py-7">
          <button
            type="button"
            className="absolute right-3 top-3 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-black/10 text-lg leading-none text-muted transition hover:text-ink md:right-4 md:top-4"
            aria-label="关闭弹窗"
            onClick={onClose}
          >
            {"×"}
          </button>
          <div className="pr-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/55 shadow-[0_8px_22px_-18px_rgba(17,17,17,0.45)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-3.5 w-3.5 text-ink"
                aria-hidden="true"
              >
                <path
                  d="M12 3.8l1.6 4.5 4.6 1.6-4.6 1.6L12 16l-1.6-4.5-4.6-1.6 4.6-1.6L12 3.8z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M18.5 15.5l.7 2 .2.1 1.8.6-1.8.6-.2.1-.7 2-.7-2-.2-.1-1.8-.6 1.8-.6.2-.1.7-2z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                ></path>
              </svg>
              {"代理商加盟"}
            </div>
            <h3 className="mt-3 max-w-2xl text-xl font-semibold leading-tight tracking-tight text-ink md:mt-4 md:text-3xl">
              {"用你的专属域名，快速开展 AI 创作工具代理业务"}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:mt-3 md:text-base">
              {
                "我们提供完整产品能力、开通支持与商务陪跑，你负责服务客户与拓展市场。"
              }
            </p>
          </div>
        </div>
        <div className="grid gap-4 p-4 md:grid-cols-[1fr_17rem] md:gap-5 md:p-7">
          <div className="space-y-4 md:space-y-5">
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              <div className="rounded-xl border border-black/8 bg-white p-2.5 shadow-[0_12px_36px_-30px_rgba(17,17,17,0.45)] md:p-4">
                <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-black/[0.04] text-ink md:mb-3 md:h-8 md:w-8">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="8.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    ></circle>
                    <path
                      d="M3.8 12h16.4M12 3.5c2.1 2.2 3.2 5 3.2 8.5s-1.1 6.3-3.2 8.5M12 3.5C9.9 5.7 8.8 8.5 8.8 12s1.1 6.3 3.2 8.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </div>
                <div className="text-sm font-semibold text-ink md:text-base">
                  {"专属域名"}
                </div>
                <div className="mt-1 text-[0.6875rem] leading-snug text-muted md:text-xs md:leading-relaxed">
                  {"独立承接客户访问"}
                </div>
              </div>
              <div className="rounded-xl border border-black/8 bg-white p-2.5 shadow-[0_12px_36px_-30px_rgba(17,17,17,0.45)] md:p-4">
                <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-black/[0.04] text-ink md:mb-3 md:h-8 md:w-8">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <rect
                      x="4"
                      y="7.5"
                      width={16}
                      height={11}
                      rx="2.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    ></rect>
                    <path
                      d="M9 7.5V6a2 2 0 012-2h2a2 2 0 012 2v1.5M4 12h16"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </div>
                <div className="text-sm font-semibold text-ink md:text-base">
                  {"整套能力"}
                </div>
                <div className="mt-1 text-[0.6875rem] leading-snug text-muted md:text-xs md:leading-relaxed">
                  {"图文视频一站可用"}
                </div>
              </div>
              <div className="rounded-xl border border-black/8 bg-white p-2.5 shadow-[0_12px_36px_-30px_rgba(17,17,17,0.45)] md:p-4">
                <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-black/[0.04] text-ink md:mb-3 md:h-8 md:w-8">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12a7 7 0 0114 0v3a2 2 0 01-2 2h-1.2a1.3 1.3 0 01-1.3-1.3v-2.4a1.3 1.3 0 011.3-1.3H19M5 12h3.2a1.3 1.3 0 011.3 1.3v2.4A1.3 1.3 0 018.2 17H7a2 2 0 01-2-2v-3z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M9.5 19c.7.5 1.6.8 2.5.8s1.8-.3 2.5-.8"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </div>
                <div className="text-sm font-semibold text-ink md:text-base">
                  {"商务陪跑"}
                </div>
                <div className="mt-1 text-[0.6875rem] leading-snug text-muted md:text-xs md:leading-relaxed">
                  {"政策、物料、开通支持"}
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-black/8 bg-[#fbfbfc] p-3.5 md:p-4">
              <p className="text-sm font-semibold text-ink">{"适合代理伙伴"}</p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs leading-relaxed text-muted md:text-sm">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-ink ring-1 ring-black/8">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12.5l4.2 4.2L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <span>{"本地企业服务商"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-ink ring-1 ring-black/8">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12.5l4.2 4.2L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <span>{"电商代运营团队"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-ink ring-1 ring-black/8">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12.5l4.2 4.2L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <span>{"内容营销机构"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-ink ring-1 ring-black/8">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12.5l4.2 4.2L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <span>{"行业软件渠道商"}</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-black/8 bg-white p-3.5 md:p-4">
              <p className="text-sm font-semibold text-ink">{"合作后可获得"}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted md:text-sm">
                {
                  "代理域名配置、客户演示环境、产品能力开通、销售话术与交付支持，帮助你更快把 AI 创作能力卖给真实客户。"
                }
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-black/8 bg-[#fbfbfc] p-3.5 md:p-4">
            <div className="grid grid-cols-[5.75rem_1fr] items-center gap-3 md:block">
              <div className="rounded-xl bg-white p-1.5 shadow-[inset_0_0_0_1px_rgba(17,17,17,0.08)] md:p-2">
                <img
                  alt="扫码联系商务"
                  loading="lazy"
                  width={320}
                  height={320}
                  decoding="async"
                  className="h-auto w-full rounded-lg"
                  src={SERVICE_QR_CODE}
                  style={{ color: "transparent" }}
                />
              </div>
              <div>
                <p className="text-left text-sm font-semibold text-ink md:mt-4 md:text-center md:text-base">
                  {"扫码联系商务"}
                </p>
                <p className="mt-1 max-w-44 text-left text-xs leading-relaxed text-muted md:mx-auto md:text-center">
                  {"获取代理政策、收益模式与域名开通方案"}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="mt-3 w-full rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-black/85 md:mt-4"
              onClick={onContact}
            >
              {"立即咨询合作"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
