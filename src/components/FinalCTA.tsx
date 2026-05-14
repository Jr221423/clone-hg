import { Download, MessageCircle } from 'lucide-react';

const APP_LINK = 'https://pukfgmaczsvkvyzfywkk.supabase.co/storage/v1/object/public/apps/puteirovip.apk';
const WHATSAPP_LINK = 'https://wa.me/5585998035681?text=Ol%C3%A1%2C%20acabei%20de%20baixar%20o%20aplicativo%20pelo%20site.%20Quero%20liberar%20meu%20acesso%20e%20pagar%20a%20taxa%20de%20R%241%2C00%20do%20primeiro%20m%C3%AAs.';

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
    </svg>
  );
}

function trackDownload() {
  if (typeof window !== 'undefined') {
    if ((window as unknown as Record<string, unknown>).fbq) (window as unknown as Record<string, (...args: unknown[]) => void>).fbq('track', 'DownloadApp');
    if ((window as unknown as Record<string, unknown>).gtag) (window as unknown as Record<string, (...args: unknown[]) => void>).gtag('event', 'download_app');
  }
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent('show-download-modal'));
  }, 3000);
}

function FinalCTA() {
  return (
    <section className="py-10 sm:py-14 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-pink/5 to-transparent" />

      <div className="relative max-w-[1180px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-black mb-2">Pronto para liberar seu acesso?</h2>
        <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-sm mx-auto">
          Baixe o APK Android e fale com o suporte para ativar.
        </p>

        <div className="flex flex-col gap-3 max-w-sm mx-auto mb-4">
          <a
            href={APP_LINK}
            onClick={trackDownload}
            className="flex items-center justify-center gap-2 px-7 min-h-[56px] bg-gradient-to-r from-brand-pink to-brand-rose text-white font-bold rounded-2xl shadow-lg shadow-brand-pink/30 hover:shadow-brand-pink/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <AndroidIcon className="w-5 h-5" />
            <Download className="w-4 h-4" />
            BAIXAR APK ANDROID
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-7 min-h-[56px] bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-2xl shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            CHAMAR NO WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
