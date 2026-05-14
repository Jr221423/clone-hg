import { Download, MessageCircle } from 'lucide-react';

const APP_LINK = 'https://pukfgmaczsvkvyzfywkk.supabase.co/storage/v1/object/public/apps/puteirovip.apk';
const WHATSAPP_LINK = 'https://wa.me/5585998035681?text=Ol%C3%A1%2C%20acabei%20de%20baixar%20o%20aplicativo%20pelo%20site.%20Quero%20liberar%20meu%20acesso%20e%20pagar%20a%20taxa%20de%20R%241%2C00%20do%20primeiro%20m%C3%AAs.';

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
