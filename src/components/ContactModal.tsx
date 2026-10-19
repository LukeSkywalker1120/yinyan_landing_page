import { Dialog } from "./ui";
import { PartnerContent } from "./PartnerContent";
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
            <p>
              {kind === "service"
                ? "扫码添加客服，获取专属支持"
                : "微信扫码，打开小程序"}
            </p>
          </div>
          <button onClick={onClose} aria-label="关闭弹窗">
            ×
          </button>
        </div>
        <div className="qr-image">
          <img
            src={
              kind === "service" ? "/images/service.jpg" : "/images/mini-qr.jpg"
            }
            alt={kind === "service" ? "客服二维码" : "小程序二维码"}
          />
        </div>
      </div>
    </Dialog>
  );
}
