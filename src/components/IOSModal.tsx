import { useEffect, useState } from 'react';
import { Smartphone } from 'lucide-react';

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
    </svg>
  );
}

export default function IOSModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    if (isIOS) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="relative bg-brand-card border border-brand-border rounded-2xl p-6 max-w-sm w-full shadow-2xl shadow-brand-pink/10 animate-slide-up overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-pink/10 rounded-full blur-[50px]" />

        <div className="relative text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center mb-4">
            <Smartphone className="w-8 h-8 text-gray-500" />
          </div>

          <h3 className="text-lg font-bold text-white mb-2">Aplicativo indisponível para iPhone</h3>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            No momento o aplicativo funciona apenas em celulares Android.
          </p>

          <div className="flex items-center justify-center gap-2 text-xs text-[#3DDC84] bg-[#3DDC84]/10 border border-[#3DDC84]/20 rounded-full px-3 py-1.5 mb-6 mx-auto w-fit">
            <AndroidIcon className="w-3.5 h-3.5" />
            <span className="font-medium">Disponível apenas para Android</span>
          </div>

          <button
            onClick={() => setVisible(false)}
            className="w-full py-3 bg-gradient-to-r from-brand-pink to-brand-rose text-white font-bold rounded-full hover:scale-105 transition-transform duration-300"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
}
