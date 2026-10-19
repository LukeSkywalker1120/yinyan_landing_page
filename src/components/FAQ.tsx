import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SectionHeading } from "./ui";
const items = [
  [
    "轻跃｜小青蛙 AI 是什么？适合哪些团队使用？",
    "轻跃｜小青蛙 AI 是一站式 AI 多媒体创意平台，适合品牌团队、内容团队、增长团队与电商团队使用。",
  ],
  [
    "真的可以只拍一张照片就生成多种内容吗？",
    "可以。系统会基于一张素材生成不同风格的图片、视频与文案，并支持继续迭代优化。",
  ],
  [
    "支持团队协作和批量产出吗？",
    "支持。可通过项目化流程进行批量生成、版本管理与素材协作交付。",
  ],
  [
    "数据是否安全？",
    "素材传输与存储均采用加密策略，并提供项目级隔离能力，支持团队与企业场景。",
  ],
];
export function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white pb-16 md:pb-24">
      <div className="mx-auto w-full px-6 md:px-8 max-w-[960px]">
        <SectionHeading
          title="常见问题"
          subtitle="开始使用前最常见的四个问题。"
        />
        <div className="mx-auto mt-10 w-full space-y-3">
          {items.map(([q, a], i) => {
            const open = active === i;
            return (
              <div key={q} data-reveal="">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setActive(open ? null : i)}
                  className={
                    "w-full rounded-2xl border px-5 py-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/25 focus-visible:ring-offset-2 md:px-6 md:py-5 " +
                    (open
                      ? "border-black/12 bg-[#f7f7f8] shadow-[0_18px_44px_-30px_rgba(17,17,17,.4)]"
                      : "border-black/6 bg-white shadow-card hover:-translate-y-0.5 hover:border-black/12")
                  }
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-ink md:text-base">
                      {q}
                    </span>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg leading-none"
                      style={{
                        backgroundColor: open ? "#111" : "rgba(17,17,17,.043)",
                        color: open ? "white" : "#5f6570",
                        transform: open ? "rotate(45deg)" : "none",
                        transition: "all .25s",
                      }}
                    >
                      +
                    </span>
                  </div>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 pr-10 text-sm leading-relaxed text-muted">
                          {a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
