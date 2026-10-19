// Adapted from the public reference markup; editable React components.
import { BeforeAfter } from "./BeforeAfter";
export function ApparelPageSections() {
  return (
    <>
      <section className="border-b border-black/6 bg-white pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1344px]">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
            <div data-reveal="">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/45">
                {"服装 · 鞋帽 · 配饰"}
              </p>
              <h1 className="mt-4 text-balance text-[clamp(2rem,3.2vw+0.6rem,3.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-ink">
                {"一件衣服，产出一整套服装电商用图"}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {
                  "从白底平铺图开始，自动完成模特上身、形象替换、场景替换与配饰试戴。图案纹理对齐、模特身份稳定，可按 SKU 批量跑。"
                }
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://yy.7w2.cn/login"
                  className="inline-flex min-w-[12.5rem] items-center justify-center rounded-full bg-ink px-8 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2"
                >
                  {"免费试跑一件"}
                </a>
                <a
                  href="#texture"
                  className="inline-flex min-w-[12.5rem] items-center justify-center rounded-full border border-black/12 px-8 py-4 text-base font-semibold text-ink transition hover:-translate-y-0.5 hover:border-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/25 focus-visible:ring-offset-2"
                >
                  {"看纹理细节"}
                </a>
              </div>
            </div>
            <div
              className="mx-auto w-full max-w-md lg:max-w-none"
              data-reveal=""
            >
              <BeforeAfter />
            </div>
          </div>
        </div>
      </section>
      <section id="texture" className="bg-page pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1216px]">
          <div className="text-center" data-reveal="">
            <span
              aria-hidden="true"
              className="section-kicker mb-5 inline-block h-px w-10 origin-center bg-black/25"
            ></span>
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {"先看最难的地方：图案对不对得上"}
            </h2>
            <p className="mx-auto mt-3 max-w-[min(92vw,52rem)] text-sm leading-relaxed text-muted md:mt-4 md:text-base md:leading-relaxed lg:max-w-[min(92vw,60rem)]">
              {
                "服装 AI 最容易崩的不是整体观感，而是格纹、条纹、印花在肩缝、袖口和领口处的连续性。放大看细节。"
              }
            </p>
          </div>
          <div
            className="mt-10 overflow-hidden rounded-3xl bg-white shadow-float ring-1 ring-black/6"
            data-reveal=""
          >
            <div className="relative aspect-[4/3] w-full bg-[#f4f4f5]">
              <img
                alt="先看最难的地方：图案对不对得上"
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
                src="/images/apparel/texture-macro.webp"
              />
            </div>
            <div className="grid gap-x-8 gap-y-6 p-6 sm:grid-cols-2 md:p-9">
              <div className="flex gap-3">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-5 w-5 shrink-0 text-ink"
                  fill="none"
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
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {"接缝处图案连续"}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {"肩缝、袖窿与侧缝两侧的格线对齐，不错位、不断线。"}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-5 w-5 shrink-0 text-ink"
                  fill="none"
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
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {"随身形自然弯曲"}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {"图案跟随肩背与胸腰的起伏变形，而不是贴纸式平铺。"}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-5 w-5 shrink-0 text-ink"
                  fill="none"
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
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {"织物纹理保留"}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {"保留原始面料的织法与纱线质感，不糊成色块。"}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-5 w-5 shrink-0 text-ink"
                  fill="none"
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
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {"结构细节不变"}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {"纽扣数量、领型、门襟与口袋位置与原件一致。"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-5 text-center text-xs leading-relaxed text-black/40">
            {"示例为平台生成效果，建议以你自己的商品实测结果为准。"}
          </p>
        </div>
      </section>
      <section className="bg-white pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1344px]">
          <div className="text-center" data-reveal="">
            <span
              aria-hidden="true"
              className="section-kicker mb-5 inline-block h-px w-10 origin-center bg-black/25"
            ></span>
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {"同一件衣服，换模特换场景，图案与身份都不漂移"}
            </h2>
            <p className="mx-auto mt-3 max-w-[min(92vw,52rem)] text-sm leading-relaxed text-muted md:mt-4 md:text-base md:leading-relaxed lg:max-w-[min(92vw,60rem)]">
              {
                "一次任务铺开多体型、多年龄、多肤色与多场景组合，色调统一到可以直接当一组投放素材。"
              }
            </p>
          </div>
          <div
            className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-black/[0.06] ring-1 ring-black/6 md:grid-cols-4"
            data-reveal=""
          >
            <div className="bg-white px-5 py-6 text-center">
              <p className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                {"1 件"}
              </p>
              <p className="mt-1.5 text-xs font-medium text-black/50 md:text-sm">
                {"输入衣服"}
              </p>
            </div>
            <div className="bg-white px-5 py-6 text-center">
              <p className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                {"多体型"}
              </p>
              <p className="mt-1.5 text-xs font-medium text-black/50 md:text-sm">
                {"模特可选"}
              </p>
            </div>
            <div className="bg-white px-5 py-6 text-center">
              <p className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                {"多场景"}
              </p>
              <p className="mt-1.5 text-xs font-medium text-black/50 md:text-sm">
                {"背景可选"}
              </p>
            </div>
            <div className="bg-white px-5 py-6 text-center">
              <p className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                {"批量"}
              </p>
              <p className="mt-1.5 text-xs font-medium text-black/50 md:text-sm">
                {"按 SKU 跑"}
              </p>
            </div>
          </div>
          <div
            className="mt-6 overflow-hidden rounded-3xl ring-1 ring-black/6"
            data-reveal=""
          >
            <div className="relative aspect-[16/9] w-full bg-[#f4f4f5]">
              <img
                alt="同一件衣服，换模特换场景，图案与身份都不漂移"
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
            </div>
          </div>
          <p className="mt-5 text-center text-xs leading-relaxed text-black/40">
            {"示例为平台生成效果，不代表任何特定品牌的实际投放素材。"}
          </p>
        </div>
      </section>
      <section className="bg-page pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1216px]">
          <div className="text-center" data-reveal="">
            <span
              aria-hidden="true"
              className="section-kicker mb-5 inline-block h-px w-10 origin-center bg-black/25"
            ></span>
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {"四个能力串成一条流水线"}
            </h2>
            <p className="mx-auto mt-3 max-w-[min(92vw,52rem)] text-sm leading-relaxed text-muted md:mt-4 md:text-base md:leading-relaxed lg:max-w-[min(92vw,60rem)]">
              {"不是四个孤立功能，而是可组合、可复用、可批量的一条链路。"}
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div
              className="relative h-full rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/6"
              data-reveal=""
            >
              <span className="text-xs font-semibold tracking-[0.14em] text-black/30">
                {"01"}
              </span>
              <p className="mt-3 text-lg font-semibold tracking-tight text-ink">
                {"上模特"}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {"白底平铺图或挂拍图直接生成模特上身效果，版型与图案保持原样。"}
              </p>
            </div>
            <div
              className="relative h-full rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/6"
              data-reveal=""
            >
              <span className="text-xs font-semibold tracking-[0.14em] text-black/30">
                {"02"}
              </span>
              <p className="mt-3 text-lg font-semibold tracking-tight text-ink">
                {"换模特形象"}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {
                  "按目标市场切换模特的体型、年龄与肤色，同款衣服复用同一套版型。"
                }
              </p>
            </div>
            <div
              className="relative h-full rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/6"
              data-reveal=""
            >
              <span className="text-xs font-semibold tracking-[0.14em] text-black/30">
                {"03"}
              </span>
              <p className="mt-3 text-lg font-semibold tracking-tight text-ink">
                {"换场景背景"}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {"同一套上身图替换到不同场景与季节氛围，适配不同渠道调性。"}
              </p>
            </div>
            <div
              className="relative h-full rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/6"
              data-reveal=""
            >
              <span className="text-xs font-semibold tracking-[0.14em] text-black/30">
                {"04"}
              </span>
              <p className="mt-3 text-lg font-semibold tracking-tight text-ink">
                {"配饰试戴"}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {"包袋、鞋帽与首饰自然贴合上身，与服装组成完整 look。"}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1216px]">
          <div className="text-center" data-reveal="">
            <span
              aria-hidden="true"
              className="section-kicker mb-5 inline-block h-px w-10 origin-center bg-black/25"
            ></span>
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {"和约模特实拍比，省的是钱和排期"}
            </h2>
            <p className="mx-auto mt-3 max-w-[min(92vw,52rem)] text-sm leading-relaxed text-muted md:mt-4 md:text-base md:leading-relaxed lg:max-w-[min(92vw,60rem)]">
              {"以下为流程结构对比，帮助你估算自己的投入，不代表承诺数值。"}
            </p>
          </div>
          <div
            className="mt-9 overflow-hidden rounded-2xl ring-1 ring-black/8"
            data-reveal=""
          >
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#f7f7f8]">
                  <th
                    scope="col"
                    className="px-4 py-3.5 font-semibold text-black/45 md:px-6"
                  ></th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 font-semibold text-black/55 md:px-6"
                  >
                    {"约模特实拍"}
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 font-semibold text-ink md:px-6"
                  >
                    {"平台生成"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <th
                    scope="row"
                    className="px-4 py-4 align-top font-semibold text-ink md:px-6"
                  >
                    {"前期准备"}
                  </th>
                  <td className="px-4 py-4 align-top leading-relaxed text-muted md:px-6">
                    {"约模特、订场地、排摄影与助理"}
                  </td>
                  <td className="bg-[#fafafa] px-4 py-4 align-top leading-relaxed text-ink md:px-6">
                    {"上传白底图与要求"}
                  </td>
                </tr>
                <tr className="border-t border-black/6">
                  <th
                    scope="row"
                    className="px-4 py-4 align-top font-semibold text-ink md:px-6"
                  >
                    {"出图周期"}
                  </th>
                  <td className="px-4 py-4 align-top leading-relaxed text-muted md:px-6">
                    {"按拍摄与后期排期推进"}
                  </td>
                  <td className="bg-[#fafafa] px-4 py-4 align-top leading-relaxed text-ink md:px-6">
                    {"任务提交后等待生成"}
                  </td>
                </tr>
                <tr className="border-t border-black/6">
                  <th
                    scope="row"
                    className="px-4 py-4 align-top font-semibold text-ink md:px-6"
                  >
                    {"改版成本"}
                  </th>
                  <td className="px-4 py-4 align-top leading-relaxed text-muted md:px-6">
                    {"需要重拍或重新修图"}
                  </td>
                  <td className="bg-[#fafafa] px-4 py-4 align-top leading-relaxed text-ink md:px-6">
                    {"调整参数后重新生成"}
                  </td>
                </tr>
                <tr className="border-t border-black/6">
                  <th
                    scope="row"
                    className="px-4 py-4 align-top font-semibold text-ink md:px-6"
                  >
                    {"扩展套数"}
                  </th>
                  <td className="px-4 py-4 align-top leading-relaxed text-muted md:px-6">
                    {"受当次拍摄计划限制"}
                  </td>
                  <td className="bg-[#fafafa] px-4 py-4 align-top leading-relaxed text-ink md:px-6">
                    {"按 SKU 批量追加"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-black/45">
            {
              "实际成本与周期取决于你的 SKU 数量、图片要求与验收标准，建议先用真实商品试跑一批再评估。"
            }
          </p>
        </div>
      </section>
      <section className="bg-page pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1216px]">
          <div
            className="rounded-3xl bg-ink p-8 text-white shadow-float md:p-12"
            data-reveal=""
          >
            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
              {"产出可商用，这是服装客户最该先确认的事"}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
              {"服装电商用图会直接进入店铺详情页与广告投放，授权边界必须清楚。"}
            </p>
            <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              <li className="flex gap-3 text-sm leading-relaxed text-white/85">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-5 w-5 shrink-0 text-white/60"
                  fill="none"
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
                <span>
                  {"生成结果可用于商业用途，包括店铺详情页、社媒与广告投放"}
                </span>
              </li>
              <li className="flex gap-3 text-sm leading-relaxed text-white/85">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-5 w-5 shrink-0 text-white/60"
                  fill="none"
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
                <span>
                  {"AI 模特形象为生成产物，不使用可辨识的真实人物肖像"}
                </span>
              </li>
              <li className="flex gap-3 text-sm leading-relaxed text-white/85">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-5 w-5 shrink-0 text-white/60"
                  fill="none"
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
                <span>{"上传素材仅用于你自己的生成任务，支持项目级隔离"}</span>
              </li>
              <li className="flex gap-3 text-sm leading-relaxed text-white/85">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-5 w-5 shrink-0 text-white/60"
                  fill="none"
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
                <span>{"如需企业级授权说明或合规材料，可联系我们出具"}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-white pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1216px]">
          <div className="text-center" data-reveal="">
            <span
              aria-hidden="true"
              className="section-kicker mb-5 inline-block h-px w-10 origin-center bg-black/25"
            ></span>
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {"服装场景常见问题"}
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-black/8 border-y border-black/8">
            <details className="group py-5">
              <summary className="flex cursor-pointer items-start justify-between gap-4 text-left text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
                <span>{"格纹、条纹、印花这类复杂图案会错乱吗？"}</span>
                <span className="mt-0.5 shrink-0 text-xl leading-none text-black/30 transition-transform duration-300 group-open:rotate-45">
                  {"+"}
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {
                  "这是我们重点优化的方向。图案会跟随身形变形并在接缝处保持连续，建议你直接用自己最难的那件复杂图案商品来试，比看示例更有参考价值。"
                }
              </p>
            </details>
            <details className="group py-5">
              <summary className="flex cursor-pointer items-start justify-between gap-4 text-left text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
                <span>{"可以指定模特的体型、年龄和肤色吗？"}</span>
                <span className="mt-0.5 shrink-0 text-xl leading-none text-black/30 transition-transform duration-300 group-open:rotate-45">
                  {"+"}
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {
                  "可以。同一件衣服可以复用到不同模特设定上，用于适配不同市场与目标人群。"
                }
              </p>
            </details>
            <details className="group py-5">
              <summary className="flex cursor-pointer items-start justify-between gap-4 text-left text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
                <span>{"支持多少 SKU 一起跑？"}</span>
                <span className="mt-0.5 shrink-0 text-xl leading-none text-black/30 transition-transform duration-300 group-open:rotate-45">
                  {"+"}
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {
                  "支持按批次提交，适合上新期一次处理整个系列。具体批量规模建议结合你的实际 SKU 量与我们沟通。"
                }
              </p>
            </details>
            <details className="group py-5">
              <summary className="flex cursor-pointer items-start justify-between gap-4 text-left text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
                <span>{"生成的模特形象会和真人重复吗？"}</span>
                <span className="mt-0.5 shrink-0 text-xl leading-none text-black/30 transition-transform duration-300 group-open:rotate-45">
                  {"+"}
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {
                  "AI 模特为生成产物，不采集也不复刻可辨识的真实人物肖像，避免肖像权风险。"
                }
              </p>
            </details>
            <details className="group py-5">
              <summary className="flex cursor-pointer items-start justify-between gap-4 text-left text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
                <span>{"输出的图片规格能直接上传电商平台吗？"}</span>
                <span className="mt-0.5 shrink-0 text-xl leading-none text-black/30 transition-transform duration-300 group-open:rotate-45">
                  {"+"}
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {"支持按目标渠道的尺寸与比例输出，可直接进入上架与投放流程。"}
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className="bg-page pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1216px] text-center">
          <div className="text-center" data-reveal="">
            <span
              aria-hidden="true"
              className="section-kicker mb-5 inline-block h-px w-10 origin-center bg-black/25"
            ></span>
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {"拿你最难的那件衣服来试"}
            </h2>
            <p className="mx-auto mt-3 max-w-[min(92vw,52rem)] text-sm leading-relaxed text-muted md:mt-4 md:text-base md:leading-relaxed lg:max-w-[min(92vw,60rem)]">
              {
                "复杂图案、特殊版型、深色面料都可以，实测结果比任何示例都有说服力。"
              }
            </p>
          </div>
          <div className="mt-9 flex justify-center">
            <a
              href="https://yy.7w2.cn/login"
              className="inline-flex min-w-[12.5rem] items-center justify-center rounded-full bg-ink px-8 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2"
            >
              {"免费试跑一件"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
