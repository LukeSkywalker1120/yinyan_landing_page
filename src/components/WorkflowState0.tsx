// Adapted from the public reference markup; editable React components.
import { handleTabKey } from "./ui";
export function WorkflowState0({
  setActive,
}: {
  setActive: (index: number) => void;
}) {
  return (
    <>
      <section className="bg-white pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1216px]">
          <div className="text-center" data-reveal="">
            <span
              aria-hidden="true"
              className="section-kicker mb-5 inline-block h-px w-10 origin-center bg-black/25"
            ></span>
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {"一套素材，多种成片"}
            </h2>
            <p className="mx-auto mt-3 max-w-[min(92vw,52rem)] text-sm leading-relaxed text-muted md:mt-4 md:text-base md:leading-relaxed lg:max-w-[min(92vw,60rem)]">
              {"上传商品素材，选择目标内容，生成后继续调整并导出。"}
            </p>
          </div>
          <div className="mx-auto mt-7 flex max-w-4xl flex-wrap items-center justify-center gap-2 text-xs font-semibold text-black/50 md:text-sm">
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-black/8 bg-white px-3 py-2 shadow-[0_6px_20px_-18px_rgba(17,17,17,.5)]">
                {"上传素材"}
              </span>
              <span className="text-black/20">{"→"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-black/8 bg-white px-3 py-2 shadow-[0_6px_20px_-18px_rgba(17,17,17,.5)]">
                {"选择场景"}
              </span>
              <span className="text-black/20">{"→"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-black/8 bg-white px-3 py-2 shadow-[0_6px_20px_-18px_rgba(17,17,17,.5)]">
                {"批量生成"}
              </span>
              <span className="text-black/20">{"→"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-black/8 bg-white px-3 py-2 shadow-[0_6px_20px_-18px_rgba(17,17,17,.5)]">
                {"导出交付"}
              </span>
            </div>
          </div>
          <div
            className="mt-7 overflow-hidden rounded-3xl border border-black/7 bg-white shadow-float"
            data-reveal=""
          >
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex flex-col justify-between border-b border-black/7 bg-[#f5f5f6] p-6 lg:border-b-0 lg:border-r lg:p-9">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/40">
                    {"输入"}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
                    {"商品实拍图或白底图"}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                    {
                      "上传基础素材，补充商品卖点、目标渠道和期望风格，即可进入批量生成流程。"
                    }
                  </p>
                </div>
                <div className="mt-8 rounded-2xl border border-dashed border-black/15 bg-white p-5">
                  <div className="relative mx-auto aspect-[4/3] max-w-xs overflow-hidden rounded-xl bg-[#f4f4f5] ring-1 ring-black/5">
                    <img
                      alt="商品实拍图或白底图"
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
                      src="/images/showcase/input-packshot.webp"
                    />
                  </div>
                  <p className="mt-4 text-center text-xs font-medium text-black/45">
                    {"支持商品图、参考图、卖点与品牌要求"}
                  </p>
                </div>
              </div>
              <div className="p-6 lg:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/40">
                  {"生成结果示例"}
                </p>
                <div
                  className="mt-4 flex flex-wrap gap-2"
                  role="tablist"
                  aria-label="生成结果示例"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected="true"
                    className="relative isolate overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/25 focus-visible:ring-offset-2 text-white"
                    onClick={() => setActive(0)}
                    id="workflow-tab-0"
                    aria-controls="workflow-panel"
                    tabIndex={0}
                    onKeyDown={(event) => handleTabKey(event, 0, 3, setActive)}
                  >
                    <span className="absolute inset-0 -z-10 rounded-full bg-ink"></span>
                    <span className="relative">{"商品主图"}</span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected="false"
                    className="relative isolate overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/25 focus-visible:ring-offset-2 bg-black/[0.045] text-black/55 hover:text-ink"
                    onClick={() => setActive(1)}
                    id="workflow-tab-1"
                    aria-controls="workflow-panel"
                    tabIndex={-1}
                    onKeyDown={(event) => handleTabKey(event, 1, 3, setActive)}
                  >
                    <span className="relative">{"详情页组图"}</span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected="false"
                    className="relative isolate overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/25 focus-visible:ring-offset-2 bg-black/[0.045] text-black/55 hover:text-ink"
                    onClick={() => setActive(2)}
                    id="workflow-tab-2"
                    aria-controls="workflow-panel"
                    tabIndex={-1}
                    onKeyDown={(event) => handleTabKey(event, 2, 3, setActive)}
                  >
                    <span className="relative">{"营销短视频"}</span>
                  </button>
                </div>
                <div
                  className="mt-6 grid gap-6 sm:grid-cols-[1.1fr_0.9fr] sm:items-center"
                  style={{
                    opacity: "1",
                    filter: "blur(0px)",
                    transform: "none",
                  }}
                  role="tabpanel"
                  id="workflow-panel"
                  aria-labelledby="workflow-tab-0"
                >
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#ececef] ring-1 ring-black/7">
                    <img
                      alt="AI 生成电商商品主图示例"
                      loading="lazy"
                      decoding="async"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
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
                      src="/images/showcase/output-main.webp"
                    />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/20"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-ink">
                      {"适配平台规范的商品主图"}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {
                        "自动处理主体、构图、背景与卖点层级，并按渠道尺寸导出不同版本。"
                      }
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <span
                        className="rounded-full border border-black/8 px-3 py-1.5 text-xs font-medium text-black/55"
                        style={{ opacity: "1", transform: "none" }}
                      >
                        {"主体突出"}
                      </span>
                      <span
                        className="rounded-full border border-black/8 px-3 py-1.5 text-xs font-medium text-black/55"
                        style={{ opacity: "1", transform: "none" }}
                      >
                        {"多尺寸"}
                      </span>
                      <span
                        className="rounded-full border border-black/8 px-3 py-1.5 text-xs font-medium text-black/55"
                        style={{ opacity: "1", transform: "none" }}
                      >
                        {"批量变体"}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-6 border-t border-black/7 pt-4 text-xs leading-relaxed text-black/38">
                  {
                    "本区域用于说明产品工作流程；展示图片为平台生成效果示例，不代表同一商品的严格前后对照。"
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
