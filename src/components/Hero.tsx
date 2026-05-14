import { Download, MessageCircle, Smartphone, ShieldCheck, Zap } from 'lucide-react';

const APP_CTA_LINK = 'https://pukfgmaczsvkvyzfywkk.supabase.co/storage/v1/object/public/apps/puteirovip.apk';
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

function Hero() {
  return (
    <section className="relative py-10 sm:py-14 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-pink/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-pink/10 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="relative max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-[1.1] mb-4">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Baixe o app e libere seu acesso VIP
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-400 mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Instale o aplicativo no Android e fale com nosso suporte no WhatsApp para ativar seu acesso.
            </p>

            <div className="flex flex-col gap-3 mb-4">
              <a
                href={APP_CTA_LINK}
                onClick={trackDownload}
                className="flex items-center justify-center gap-2 px-7 min-h-[56px] bg-gradient-to-r from-brand-pink to-brand-rose text-white font-bold rounded-2xl shadow-lg shadow-brand-pink/30 hover:shadow-brand-pink/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 sm:max-w-xs sm:mx-auto lg:mx-0"
              >
                <AndroidIcon className="w-5 h-5" />
                <Download className="w-4 h-4" />
                BAIXAR APK ANDROID
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 min-h-[56px] bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-2xl shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 sm:max-w-xs sm:mx-auto lg:mx-0"
              >
                <MessageCircle className="w-5 h-5" />
                CHAMAR NO WHATSAPP
              </a>
            </div>
          </div>

          <div className="relative animate-slide-up flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative animate-float-slow">
              <div className="absolute inset-0 bg-brand-pink/10 rounded-full blur-[80px] scale-75" />
              <div className="relative w-[220px] sm:w-[260px] rounded-[2.5rem] border-4 border-gray-700/80 bg-brand-dark overflow-hidden shadow-2xl shadow-brand-pink/20">
                <div className="h-5 bg-black flex items-center justify-center">
                  <div className="w-14 h-3 bg-gray-900 rounded-full" />
                </div>
                <div className="p-3 space-y-2.5 bg-gradient-to-b from-brand-dark to-brand-darker">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-[9px] text-gray-400">9:41</span>
                    <div className="w-4 h-2 rounded-sm border border-gray-500" />
                  </div>
                  <div className="bg-white/[0.05] border border-brand-border rounded-xl p-2.5 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-pink/20 flex items-center justify-center">
                      <Download className="w-3.5 h-3.5 text-brand-pink" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-white">vip-access.apk</p>
                      <p className="text-[9px] text-gray-400">Download completo</p>
                    </div>
                  </div>
                  <div className="bg-white/[0.05] border border-brand-border rounded-xl p-3 text-center space-y-2">
                    <Smartphone className="w-6 h-6 text-gray-300 mx-auto" />
                    <p className="text-[11px] font-medium text-white">Instalar aplicativo?</p>
                    <div className="bg-gradient-to-r from-brand-pink to-brand-rose rounded-lg py-1.5">
                      <span className="text-[11px] font-bold text-white">INSTALAR</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-lg px-2.5 py-1.5">
                    <ShieldCheck className="w-3 h-3 text-green-400" />
                    <span className="text-[10px] text-green-400 font-medium">Instalado com sucesso</span>
                  </div>
                </div>
                <div className="h-3 bg-black flex items-center justify-center">
                  <div className="w-16 h-1 bg-gray-700 rounded-full" />
                </div>
              </div>

              <div className="absolute -top-1 -right-2 bg-white/[0.06] backdrop-blur-md border border-brand-pink/30 rounded-lg px-2 py-1 shadow-lg">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-green-400" />
                  <span className="text-[10px] font-medium text-gray-200">Seguro</span>
                </div>
              </div>
              <div className="absolute top-1/3 -left-3 bg-white/[0.06] backdrop-blur-md border border-brand-border rounded-lg px-2 py-1 shadow-lg">
                <div className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-brand-pink" />
                  <span className="text-[10px] font-medium text-gray-200">Rapido</span>
                </div>
              </div>
              <div className="absolute bottom-8 -right-2 bg-[#3DDC84]/10 backdrop-blur-md border border-[#3DDC84]/30 rounded-lg px-2 py-1 shadow-lg">
                <div className="flex items-center gap-1">
                  <AndroidIcon className="w-3 h-3 text-[#3DDC84]" />
                  <span className="text-[10px] font-medium text-[#3DDC84]">Android</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
