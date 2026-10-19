import { BRAND_NAME, BRAND_LOGO } from "../config/brand";

export function Footer() {
  return (
    <footer className="border-t border-black/6 bg-white py-10">
      <div className="mx-auto w-full px-6 md:px-8 max-w-[1216px] flex flex-col gap-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="flex items-center gap-2 font-semibold text-ink">
            <img
              src={BRAND_LOGO}
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
            {BRAND_NAME}
          </p>
          <p className="mt-1">面向现代团队的 AI 多媒体创意生产工作流。</p>
          <p className="mt-2 text-xs text-muted">
            © {new Date().getFullYear()} {BRAND_NAME} 版权所有
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href="/#faq" className="transition hover:text-ink">
            常见问题
          </a>
          <a href="/#contact" className="transition hover:text-ink">
            联系我们
          </a>
        </div>
      </div>
    </footer>
  );
}
