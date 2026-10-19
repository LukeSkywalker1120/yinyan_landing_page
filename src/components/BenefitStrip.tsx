// Adapted from the public reference markup; editable React components.

export function BenefitStrip() {
  return (
    <>
      <section
        aria-label="Product trust signals"
        className="bg-white pb-4 pt-8 md:pb-8 md:pt-10"
      >
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1216px]">
          <div
            className="grid gap-px overflow-hidden rounded-2xl border border-black/6 bg-black/[0.06] shadow-card sm:grid-cols-2 lg:grid-cols-4"
            data-reveal=""
          >
            <div className="group flex items-center justify-center gap-2.5 bg-white px-5 py-4 text-center text-xs font-semibold text-black/60 transition-colors duration-300 hover:bg-[#f8f8f9] hover:text-ink md:py-5 md:text-sm">
              <span
                className="h-1.5 w-1.5 rounded-full bg-black/20 transition-all duration-500 group-hover:scale-150 group-hover:bg-black"
                aria-hidden="true"
              ></span>
              <span>{"图片、视频、文案一站生成"}</span>
            </div>
            <div className="group flex items-center justify-center gap-2.5 bg-white px-5 py-4 text-center text-xs font-semibold text-black/60 transition-colors duration-300 hover:bg-[#f8f8f9] hover:text-ink md:py-5 md:text-sm">
              <span
                className="h-1.5 w-1.5 rounded-full bg-black/20 transition-all duration-500 group-hover:scale-150 group-hover:bg-black"
                aria-hidden="true"
              ></span>
              <span>{"支持批量内容生产"}</span>
            </div>
            <div className="group flex items-center justify-center gap-2.5 bg-white px-5 py-4 text-center text-xs font-semibold text-black/60 transition-colors duration-300 hover:bg-[#f8f8f9] hover:text-ink md:py-5 md:text-sm">
              <span
                className="h-1.5 w-1.5 rounded-full bg-black/20 transition-all duration-500 group-hover:scale-150 group-hover:bg-black"
                aria-hidden="true"
              ></span>
              <span>{"品牌风格一致输出"}</span>
            </div>
            <div className="group flex items-center justify-center gap-2.5 bg-white px-5 py-4 text-center text-xs font-semibold text-black/60 transition-colors duration-300 hover:bg-[#f8f8f9] hover:text-ink md:py-5 md:text-sm">
              <span
                className="h-1.5 w-1.5 rounded-full bg-black/20 transition-all duration-500 group-hover:scale-150 group-hover:bg-black"
                aria-hidden="true"
              ></span>
              <span>{"多语言与多尺寸导出"}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
