import { BRAND_NAME, BRAND_LOGO, LOGIN_URL } from "../config/brand";
// Adapted from the public reference markup; editable React components.
import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { MobileMenu, LanguageMenu } from "./NavigationMenus";
export function SiteHeader({ onPartner }: { onPartner: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const path = window.location.pathname;
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 16));
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const update = () => {
      if (window.scrollY < 16)
        document.documentElement.style.setProperty(
          "--site-header-measured-height",
          el.getBoundingClientRect().height + "px",
        );
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        dir="ltr"
        className={`replica-header ${scrolled ? "is-scrolled" : ""}`}
        ref={headerRef}
      >
        <div className="header-shell">
          <div className="mx-auto w-full px-6 md:px-8 max-w-[1344px]">
            <div className="flex items-center justify-between py-3.5 md:py-4">
              <div className="flex items-center gap-2">
                <img
                  alt={BRAND_NAME}
                  loading="lazy"
                  width={48}
                  height={48}
                  decoding="async"
                  className="h-11 w-11 object-contain md:h-12 md:w-12"
                  style={{ color: "transparent" }}
                  src={BRAND_LOGO}
                />
                <span className="text-[1.0625rem] font-semibold tracking-tight text-ink md:text-lg">
                  {BRAND_NAME}
                </span>
              </div>
              <nav
                className="desktop-nav hidden items-center gap-10 text-[0.9375rem] md:flex"
                aria-label="首页"
              >
                <a
                  href="/"
                  className={
                    "relative pb-1 font-medium transition-colors duration-200 text-black/52 hover:text-ink nav-link" +
                    (path === "/" ? " nav-active" : "")
                  }
                >
                  {"首页"}
                </a>
                <a
                  href="/#features"
                  className="relative pb-1 font-medium transition-colors duration-200 text-black/52 hover:text-ink nav-link"
                >
                  {"功能"}
                </a>
                <a
                  href="/apparel/"
                  className={
                    "relative pb-1 font-medium transition-colors duration-200 text-black/52 hover:text-ink nav-link" +
                    (path === "/apparel/" ? " nav-active" : "")
                  }
                >
                  {"服装方案"}
                  <span className="rounded-[3px] bg-rose-500 px-1 py-[1px] text-[0.5625rem] font-bold leading-none tracking-[0.08em] text-white pointer-events-none absolute left-full top-0 ml-1">
                    {"HOT"}
                  </span>
                </a>
                <a
                  href="/#showcase"
                  className="relative pb-1 font-medium transition-colors duration-200 text-black/52 hover:text-ink nav-link"
                >
                  {"案例"}
                </a>
                <a
                  href="/download/"
                  className={
                    "relative pb-1 font-medium transition-colors duration-200 text-black/52 hover:text-ink nav-link" +
                    (path === "/download/" ? " nav-active" : "")
                  }
                >
                  {"下载"}
                </a>
                <a
                  href="/open-api/"
                  className={
                    "relative pb-1 font-medium transition-colors duration-200 text-black/52 hover:text-ink nav-link" +
                    (path === "/open-api/" ? " nav-active" : "")
                  }
                >
                  {"API 接入"}
                </a>
              </nav>
              <div className="hidden items-center gap-4 md:flex">
                <button
                  type="button"
                  className="text-sm font-medium text-black/45 transition-colors duration-200 hover:text-ink focus-visible:outline-none"
                  onClick={onPartner}
                >
                  {"代理加盟"}
                </button>
                <div dir="ltr" className="relative">
                  <button
                    type="button"
                    aria-haspopup="listbox"
                    className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3.5 py-2 text-sm font-semibold text-black/70 transition hover:border-black/20 hover:text-ink"
                    onClick={() => setLanguageOpen(!languageOpen)}
                    aria-expanded={languageOpen}
                  >
                    <span className="text-base leading-none" aria-hidden="true">
                      {"🇨🇳"}
                    </span>
                    <span className="max-w-[8rem] truncate">{"简体中文"}</span>
                  </button>
                  {languageOpen && (
                    <LanguageMenu onClose={() => setLanguageOpen(false)} />
                  )}
                </div>
                <a
                  href={LOGIN_URL}
                  className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 bg-ink text-white shadow-card hover:-translate-y-0.5 hover:bg-black rounded-lg px-5 py-2.5 text-sm"
                >
                  {"立即体验"}
                </a>
              </div>
              <button
                aria-label="切换菜单"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/12 bg-transparent text-lg leading-none md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
              >
                {menuOpen ? "×" : "☰"}
              </button>
            </div>
          </div>
          {menuOpen && (
            <MobileMenu
              onPartner={onPartner}
              onClose={() => setMenuOpen(false)}
            />
          )}
        </div>
      </header>
    </>
  );
}
