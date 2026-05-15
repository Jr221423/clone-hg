import { Download, MessageCircle } from 'lucide-react';

const APP_LINK = 'https://pukfgmaczsvkvyzfywkk.supabase.co/storage/v1/object/public/apps/puteirovip.apk';
const WHATSAPP_LINK = 'https://wa.me/5521992827749?text=Ola,%20instalei%20o%20aplicativo,%20mas%20preciso%20de%20ajuda%20para%20autorizar%20meu%20dispositivo%20e%20ativar%20o%20acesso.';

function trackDownload() {
  if (typeof window !== 'undefined') {
    if ((window as unknown as Record<string, unknown>).fbq) (window as unknown as Record<string, (...args: unknown[]) => void>).fbq('track', 'DownloadApp');
    if ((window as unknown as Record<string, unknown>).gtag) (window as unknown as Record<string, (...args: unknown[]) => void>).gtag('event', 'download_app');
  }
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent('show-download-modal'));
  }, 3000);
}

function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-brand-darker/90 backdrop-blur-xl border-t border-brand-border/50"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="flex gap-2 px-4 py-3">
        <a
          href={APP_LINK}
          onClick={trackDownload}
          className="flex-1 flex items-center justify-center gap-1.5 min-h-[52px] bg-gradient-to-r from-brand-pink to-brand-rose text-white font-bold text-sm rounded-2xl shadow-lg shadow-brand-pink/30 active:scale-[0.97] transition-all"
        >
          <Download className="w-4 h-4" />
          BAIXAR APK
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 min-h-[52px] bg-[#25D366] text-white font-bold text-sm rounded-2xl shadow-lg shadow-[#25D366]/25 active:scale-[0.97] transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default StickyBar;
