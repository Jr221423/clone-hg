import { Download } from 'lucide-react';
const heroVideo = '/video-main.mp4';
import heroPoster from '../assets/vazados.jpg';

const APP_LINK = 'https://pukfgmaczsvkvyzfywkk.supabase.co/storage/v1/object/public/apps/puteirovip.apk';

function trackDownload() {
  if (typeof window !== 'undefined') {
    if ((window as unknown as Record<string, unknown>).fbq) (window as unknown as Record<string, (...args: unknown[]) => void>).fbq('track', 'DownloadApp');
    if ((window as unknown as Record<string, unknown>).gtag) (window as unknown as Record<string, (...args: unknown[]) => void>).gtag('event', 'download_app');
  }
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent('show-download-modal'));
  }, 3000);
}

function VideoHero() {
  return (
    <section className="relative pt-20 sm:pt-28 pb-10 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-darker to-brand-darker" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-brand-pink/8 rounded-full blur-[100px]" />

      <div className="relative max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-10 animate-fade-in">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-[1.15] mb-3">
            <span className="text-white">A melhor plataforma de</span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-white px-3 sm:px-4 py-1">CONTEUDO EXCLUSIVO</span>
              <span className="absolute inset-0 bg-gradient-to-r from-brand-pink to-red-600 rounded-lg skew-x-[-2deg]" />
            </span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-md mx-auto leading-relaxed">
            Pare de pagar varias assinaturas. Tenha tudo em um unico app com acesso ilimitado.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto mb-6 sm:mb-10 animate-slide-up">
          <div className="relative rounded-xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-pink/10">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={heroPoster}
              className="w-full aspect-video object-cover"
              style={{ WebkitTransform: 'translateZ(0)' }}
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-xl sm:rounded-3xl" />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-brand-pink/20 blur-2xl rounded-full" />
        </div>

        <div className="text-center animate-fade-in">
          <a
            href={APP_LINK}
            onClick={trackDownload}
            className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 sm:px-10 min-h-[56px] bg-gradient-to-r from-brand-pink via-red-500 to-orange-500 text-white font-bold text-base sm:text-lg rounded-full shadow-lg shadow-brand-pink/30 hover:shadow-brand-pink/50 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 max-w-sm mx-auto sm:max-w-none"
          >
            <Download className="w-5 h-5" />
            QUERO ACESSAR AGORA
          </a>
        </div>
      </div>
    </section>
  );
}

export default VideoHero;
