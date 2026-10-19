// Adapted from the public reference markup; editable React components.

export function Footer() {
  return (
    <>
      <footer className="border-t border-black/6 bg-white py-10">
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1216px] flex flex-col gap-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-ink">{"轻跃｜小青蛙 AI"}</p>
            <p className="mt-1">{"面向现代团队的 AI 多媒体创意生产工作流。"}</p>
            <p className="mt-2 text-xs text-muted">
              {"© 深圳轻跃科技有限责任公司 版权所有 备案号:"}
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-0.5 underline decoration-black/25 underline-offset-2 transition hover:text-ink hover:decoration-black/35"
              >
                {"粤ICP备2026023561号-2"}
              </a>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="/#faq" className="transition hover:text-ink">
              {"常见问题"}
            </a>
            <a
              href="https://ifrogaitech.feishu.cn/wiki/UoZxwWds1im8qikFmEscGdp4nud?from=from_copylink"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-ink"
            >
              {"服务协议"}
            </a>
            <a
              href="https://ifrogaitech.feishu.cn/wiki/Rbw1wMm7wi0JHbkpiG6cgI4hnPc?from=from_copylink"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-ink"
            >
              {"隐私政策"}
            </a>
            <a href="/#contact" className="transition hover:text-ink">
              {"联系我们"}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
