import { BRAND_NAME, BRAND_LOGO, LOGIN_URL } from "../config/brand";
import { useEffect, useRef, useState } from "react";
import { Dialog } from "./ui";

const links = [
  ["首页", "/"],
  ["功能", "/#features"],
  ["服装方案", "/apparel/"],
  ["案例", "/#showcase"],
  ["下载", "/download/"],
  ["API 接入", "/open-api/"],
];
export function MobileMenu({
  onPartner,
  onClose,
}: {
  onPartner: () => void;
  onClose: () => void;
}) {
  const [languageOpen, setLanguageOpen] = useState(false);
  const path = window.location.pathname;
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 768) onClose();
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [onClose]);
  return (
    <Dialog kind="drawer" label="移动端菜单" onClose={onClose}>
      <div className="mb-5 flex items-center justify-between border-b border-black/8 pb-4">
        <div className="flex items-center gap-2.5">
          <img
            alt={BRAND_NAME}
            className="h-9 w-9 object-contain"
            width={36}
            height={36}
            src={BRAND_LOGO}
          />
          <span className="text-lg font-semibold text-ink">{BRAND_NAME}</span>
        </div>
        <button
          type="button"
          aria-label="关闭菜单"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 text-xl leading-none text-ink"
          onClick={onClose}
        >
          ×
        </button>
      </div>
      <nav id="mobile-navigation" className="space-y-2" aria-label="移动端导航">
        {links.map(([name, url]) => (
          <a
            key={url}
            href={url}
            onClick={onClose}
            aria-current={url === path ? "page" : undefined}
            className={`block rounded-xl px-4 py-3 text-sm transition border-l-[3px] hover:border-black/25 hover:bg-black/[0.04] ${url === path ? "border-ink bg-black/[0.06] font-semibold text-ink" : "border-transparent text-ink hover:underline hover:decoration-ink hover:decoration-2 hover:underline-offset-8"} ${name === "服装方案" ? "flex items-center gap-2" : ""}`}
          >
            {name}
            {name === "服装方案" && (
              <span className="rounded-[3px] bg-rose-500 px-1 py-[1px] text-[0.5625rem] font-bold leading-none tracking-[0.08em] text-white">
                HOT
              </span>
            )}
          </a>
        ))}
      </nav>
      <div className="mt-5 space-y-3 border-t border-black/8 pt-4">
        <button
          type="button"
          className="w-full rounded-xl py-3 text-center text-sm font-medium text-black/50 transition hover:text-ink"
          onClick={() => {
            onClose();
            onPartner();
          }}
        >
          代理加盟
        </button>
        <div className="relative w-full" dir="ltr">
          <button
            type="button"
            aria-expanded={languageOpen}
            aria-haspopup="listbox"
            className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3.5 py-2 text-sm font-semibold text-black/70 transition hover:border-black/20 hover:text-ink w-full justify-center"
            onClick={() => setLanguageOpen(!languageOpen)}
          >
            <span aria-hidden="true" className="text-base leading-none">
              🇨🇳
            </span>
            <span>简体中文</span>
          </button>
          {languageOpen && (
            <LanguageMenu onClose={() => setLanguageOpen(false)} />
          )}
        </div>
        <a
          href={LOGIN_URL}
          className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 bg-ink text-white shadow-card hover:-translate-y-0.5 hover:bg-black w-full"
        >
          立即体验
        </a>
      </div>
    </Dialog>
  );
}
export function LanguageMenu({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const close = (e: PointerEvent) => {
      if (!ref.current?.parentElement?.contains(e.target as Node)) onClose();
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [onClose]);
  return (
    <div
      ref={ref}
      className="language-menu"
      role="listbox"
      aria-label="选择语言"
    >
      {[["🇨🇳", "简体中文", "/"]].map(([flag, name, url]) => (
        <a
          role="option"
          aria-selected={name === "简体中文"}
          key={name}
          href={url}
          onClick={onClose}
        >
          <span>{flag}</span>
          {name}
        </a>
      ))}
    </div>
  );
}
