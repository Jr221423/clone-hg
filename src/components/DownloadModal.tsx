import { useEffect, useState } from 'react';
import { X, MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/5585998035681?text=Ol%C3%A1%2C%20acabei%20de%20baixar%20o%20aplicativo%20pelo%20site.%20Quero%20liberar%20meu%20acesso%20e%20pagar%20a%20taxa%20de%20R%241%2C00%20do%20primeiro%20m%C3%AAs.';

function DownloadModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handler() {
      setOpen(true);
    }
    window.addEventListener('show-download-modal', handler);
    return () => window.removeEventListener('show-download-modal', handler);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="relative bg-brand-card border border-brand-border rounded-2xl p-6 max-w-sm w-full animate-slide-up">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <h3 className="text-lg font-bold text-white mb-2">Download iniciado!</h3>
          <p className="text-sm text-gray-400 mb-5">
            Agora chame nosso suporte no WhatsApp para liberar seu acesso completo.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 min-h-[52px] bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-2xl shadow-lg shadow-[#25D366]/25 transition-all w-full"
          >
            <MessageCircle className="w-5 h-5" />
            CHAMAR NO WHATSAPP
          </a>
        </div>
      </div>
    </div>
  );
}

export default DownloadModal;
