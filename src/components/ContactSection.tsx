// Adapted from the public reference markup; editable React components.

export function ContactSection({ onContact }: { onContact: () => void }) {
  return (
    <>
      <section id="contact" className="bg-[#111214] py-16 md:py-24">
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1216px]">
          <div
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#17191f] text-white shadow-[0_28px_90px_-46px_rgba(0,0,0,.85)]"
            data-reveal=""
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/[0.055] blur-3xl"></div>
            <div className="relative grid gap-10 p-7 md:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:p-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                  {"产品咨询与企业合作"}
                </p>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                  {"有具体需求，直接和客服聊"}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
                  {"产品使用、企业方案、代理合作，都可以直接咨询。"}
                </p>
                <div className="mt-7 flex flex-wrap gap-2.5">
                  <div className="group/benefit inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2.5 text-sm text-white/75 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.085]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[0.625rem] font-bold text-black transition-transform duration-300 group-hover/benefit:rotate-[-8deg] group-hover/benefit:scale-110">
                      {"✓"}
                    </span>
                    {"产品使用咨询"}
                  </div>
                  <div className="group/benefit inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2.5 text-sm text-white/75 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.085]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[0.625rem] font-bold text-black transition-transform duration-300 group-hover/benefit:rotate-[-8deg] group-hover/benefit:scale-110">
                      {"✓"}
                    </span>
                    {"企业批量方案"}
                  </div>
                  <div className="group/benefit inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2.5 text-sm text-white/75 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.085]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[0.625rem] font-bold text-black transition-transform duration-300 group-hover/benefit:rotate-[-8deg] group-hover/benefit:scale-110">
                      {"✓"}
                    </span>
                    {"代理与定制合作"}
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-[0_16px_40px_-20px_rgba(255,255,255,.55)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#17191f] sm:w-fit"
                onClick={onContact}
              >
                {"立即联系客服"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
