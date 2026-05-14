import { Download, Smartphone, Shield, MessageCircle } from 'lucide-react';

const APP_LINK = 'https://pukfgmaczsvkvyzfywkk.supabase.co/storage/v1/object/public/apps/puteirovip.apk';

const STEPS = [
  {
    icon: Download,
    title: 'Baixe o APK',
    text: 'Toque no botao e faca o download.',
    color: 'text-brand-pink',
    bg: 'bg-brand-pink/10 border-brand-pink/20',
    line: 'from-brand-pink/50 to-blue-400/50',
  },
  {
    icon: Smartphone,
    title: 'Instale no celular',
    text: 'Abra o arquivo e toque em instalar.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10 border-blue-400/20',
    line: 'from-blue-400/50 to-amber-400/50',
  },
  {
    icon: Shield,
    title: 'Permita a instalacao',
    text: 'Se solicitado, permita apps do navegador.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10 border-amber-400/20',
    line: 'from-amber-400/50 to-green-400/50',
  },
  {
    icon: MessageCircle,
    title: 'Chame no WhatsApp',
    text: 'Fale com o suporte para ativar.',
    color: 'text-green-400',
    bg: 'bg-green-400/10 border-green-400/20',
    line: '',
  },
];

function trackDownload() {
  if (typeof window !== 'undefined') {
    if ((window as unknown as Record<string, unknown>).fbq) (window as unknown as Record<string, (...args: unknown[]) => void>).fbq('track', 'DownloadApp');
    if ((window as unknown as Record<string, unknown>).gtag) (window as unknown as Record<string, (...args: unknown[]) => void>).gtag('event', 'download_app');
  }
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent('show-download-modal'));
  }, 3000);
}

function InstallSteps() {
  return (
    <section className="py-10 sm:py-12">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black mb-2">Como liberar seu acesso</h2>
          <p className="text-gray-400 text-sm sm:text-base">4 passos simples</p>
        </div>

        <div className="hidden lg:grid lg:grid-cols-4 gap-4">
          {STEPS.map((step, i) => (
            <div key={i} className="card-glow p-5 text-center group">
              <div className="text-xs font-bold text-brand-pink mb-3 opacity-60">Passo {i + 1}</div>
              <div className={`w-14 h-14 mx-auto rounded-2xl border ${step.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className={`w-6 h-6 ${step.color}`} />
              </div>
              <h3 className="font-bold text-white text-base mb-1.5">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="lg:hidden space-y-0">
          {STEPS.map((step, i) => (
            <div key={i} className="relative flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-2xl border ${step.bg} flex items-center justify-center flex-shrink-0 z-10`}>
                  <step.icon className={`w-5 h-5 ${step.color}`} />
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`w-0.5 h-full min-h-[40px] bg-gradient-to-b ${step.line}`} />
                )}
              </div>
              <div className="pb-6 pt-1">
                <div className="text-[11px] font-bold text-brand-pink/60 uppercase tracking-wider mb-0.5">Passo {i + 1}</div>
                <h3 className="font-bold text-white text-base mb-0.5">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={APP_LINK}
            onClick={trackDownload}
            className="flex sm:inline-flex items-center justify-center gap-2 px-7 min-h-[56px] bg-gradient-to-r from-brand-pink to-brand-rose text-white font-bold rounded-2xl shadow-lg shadow-brand-pink/30 hover:shadow-brand-pink/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            BAIXAR APK ANDROID
          </a>
        </div>
      </div>
    </section>
  );
}

export default InstallSteps;
