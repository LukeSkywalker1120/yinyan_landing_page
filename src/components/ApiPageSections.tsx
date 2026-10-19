// Adapted from the public reference markup; editable React components.
import { ApiWaitlistForm } from "./ApiWaitlistForm";
export function ApiPageSections() {
  return (
    <>
      <section className="border-b border-black/6 bg-white pb-14 pt-12 md:pb-20 md:pt-16">
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1216px]">
          <div data-reveal="">
            <span className="inline-flex items-center gap-2 rounded-full bg-black/[0.05] px-3.5 py-1.5 text-xs font-semibold text-black/60">
              <span
                className="h-1.5 w-1.5 rounded-full bg-amber-500"
                aria-hidden="true"
              ></span>
              {"即将开放"}
            </span>
            <h1 className="mt-5 max-w-3xl text-balance text-[clamp(2rem,3vw+0.6rem,3rem)] font-bold leading-[1.14] tracking-[-0.02em]">
              {"把生成能力接进你自己的系统"}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {
                "开放 API 正在开发中。如果你打算把商品图生成接入自有 ERP、店铺后台或内容中台，先告诉我们你的场景，开放时会优先通知你。"
              }
            </p>
          </div>
        </div>
      </section>
      <section className="bg-page pb-16 pt-14 md:pb-20 md:pt-20">
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1216px]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-black/45">
            {"规划中的能力"}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div
              className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/6"
              data-reveal=""
            >
              <p className="text-base font-semibold text-ink">{"任务式调用"}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {"提交素材与参数创建生成任务，异步轮询或回调获取结果。"}
              </p>
            </div>
            <div
              className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/6"
              data-reveal=""
            >
              <p className="text-base font-semibold text-ink">{"批量提交"}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {"一次提交整批 SKU，按任务组管理进度与失败重试。"}
              </p>
            </div>
            <div
              className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/6"
              data-reveal=""
            >
              <p className="text-base font-semibold text-ink">{"结果回调"}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {"生成完成后回调你的服务，便于直接写入自有素材库。"}
              </p>
            </div>
            <div
              className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/6"
              data-reveal=""
            >
              <p className="text-base font-semibold text-ink">{"用量与配额"}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {"提供调用量统计与配额管理，便于成本核算。"}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white pb-20 pt-16 md:pb-28 md:pt-20">
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1216px]">
          <div className="text-center" data-reveal="">
            <span
              aria-hidden="true"
              className="section-kicker mb-5 inline-block h-px w-10 origin-center bg-black/25"
            ></span>
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {"登记使用场景"}
            </h2>
            <p className="mx-auto mt-3 max-w-[min(92vw,52rem)] text-sm leading-relaxed text-muted md:mt-4 md:text-base md:leading-relaxed lg:max-w-[min(92vw,60rem)]">
              {"留下联系方式和你打算怎么用，我们会按场景优先级安排内测名额。"}
            </p>
          </div>
          <div className="mx-auto mt-9 max-w-xl" data-reveal="">
            <ApiWaitlistForm />
            <p className="mt-6 text-center text-xs text-black/45">
              登记内容仅保存在当前浏览器，支持复制留存。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
