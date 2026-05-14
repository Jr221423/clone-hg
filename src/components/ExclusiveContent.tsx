import { Download } from 'lucide-react';

const APP_LINK = 'https://pukfgmaczsvkvyzfywkk.supabase.co/storage/v1/object/public/apps/puteirovip.apk';

const PLATFORMS = [
  { name: 'OnlyFans', color: '#00AFF0' },
  { name: 'Privacy', color: '#8B5CF6' },
  { name: 'LoyalFans', color: '#FF6B35' },
  { name: 'FanCentro', color: '#E91E63' },
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

function ExclusiveContent() {
  return (
    <section className="py-10 sm:py-12 bg-black/40">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-black mb-2">Acesso em um so app</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
            Interface simples, rapida e otimizada para Android.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-3 sm:gap-6 bg-brand-card border border-brand-border rounded-2xl py-5 px-5 sm:px-8 max-w-2xl mx-auto mb-6">
          {PLATFORMS.map((platform) => (
            <div key={platform.name} className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: platform.color }} />
              <span className="text-sm font-medium text-gray-300">{platform.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
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

export default ExclusiveContent;
