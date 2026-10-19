import { Dialog } from "./ui";
import { PartnerContent } from "./PartnerContent";
import {
  BRAND_LOGO,
  BRAND_NAME,
  LOGIN_URL,
  SERVICE_QR_CODE,
} from "../config/brand";

export function ContactModal({
  kind,
  onClose,
  onService,
}: {
  kind: "service" | "mobile" | "partner";
  onClose: () => void;
  onService: () => void;
}) {
  if (kind === "partner")
    return (
      <Dialog kind="partner" label="代理商加盟" onClose={onClose}>
        <PartnerContent onClose={onClose} onContact={onService} />
      </Dialog>
    );
  const title = kind === "service" ? "联系客服" : "移动端";
  return (
    <Dialog label={title} onClose={onClose}>
      <div className="qr-modal">
        <div className="qr-heading">
          <div>
            <h3>{title}</h3>
            <p>{BRAND_NAME}</p>
          </div>
          <button onClick={onClose} aria-label="关闭弹窗">
            ×
          </button>
        </div>
        {kind === "service" ? (
          <>
            <div className="qr-image">
              <img
                src={SERVICE_QR_CODE}
                alt="微信扫码联系影焰AI客服"
                width={700}
                height={708}
              />
            </div>
            <p className="service-qr-hint">
              微信扫码添加客服，手机端可长按识别二维码
            </p>
          </>
        ) : (
          <div className="brand-contact-panel">
            <img src={BRAND_LOGO} alt={BRAND_NAME} width={112} height={112} />
            <p>手机浏览器可直接访问影焰AI</p>
            <a href={LOGIN_URL} className="draft-email-link">
              进入影焰AI
            </a>
          </div>
        )}
      </div>
    </Dialog>
  );
}
