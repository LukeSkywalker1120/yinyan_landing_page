import { useState } from "react";
export function ApiWaitlistForm() {
  const [draft, setDraft] = useState<{
    email: string;
    scenario: string;
  } | null>(null);
  if (draft)
    return (
      <div className="rounded-2xl bg-[#f7f7f8] p-8 text-center ring-1 ring-black/6">
        <p className="text-lg font-semibold text-ink">登记内容已保存</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          内容保存在当前浏览器。发送邮件后即可完成咨询。
        </p>
        <a
          className="draft-email-link"
          href={`mailto:hello@ifrog.ai?subject=Open%20API%20waitlist&body=${encodeURIComponent(`Email: ${draft.email}\n\n${draft.scenario}`)}`}
        >
          打开邮件草稿
        </a>
        <button className="draft-edit" onClick={() => setDraft(null)}>
          重新填写
        </button>
      </div>
    );
  return (
    <form
      className="space-y-5"
      onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const value = {
          email: String(form.get("email")),
          scenario: String(form.get("scenario")),
        };
        try {
          localStorage.setItem(
            "ifrog-api-enquiry-draft",
            JSON.stringify(value),
          );
        } catch {
          /* Form still provides the draft when storage is unavailable. */
        }
        setDraft(value);
      }}
    >
      <div>
        <label
          className="block text-sm font-semibold text-ink"
          htmlFor="waitlist-email"
        >
          联系邮箱
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@company.com"
          className="mt-2 w-full rounded-xl border border-black/12 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-black/30 focus:border-black/35 focus:ring-2 focus:ring-black/10"
        />
      </div>
      <div>
        <label
          htmlFor="waitlist-scenario"
          className="block text-sm font-semibold text-ink"
        >
          使用场景
        </label>
        <textarea
          id="waitlist-scenario"
          name="scenario"
          rows={4}
          required
          placeholder="例如：把主图生成接入自有 ERP，每月约 2000 个 SKU"
          className="mt-2 w-full resize-y rounded-xl border border-black/12 bg-white px-4 py-3 text-sm leading-relaxed text-ink outline-none transition placeholder:text-black/30 focus:border-black/35 focus:ring-2 focus:ring-black/10"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-ink px-8 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2"
      >
        提交登记
      </button>
    </form>
  );
}
