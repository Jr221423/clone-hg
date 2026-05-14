import { MessageCircle, Zap, ShieldCheck } from 'lucide-react';

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
    </svg>
  );
}

const BENEFITS = [
  { icon: AndroidIcon, label: 'APK Android', sub: 'Download direto' },
  { icon: MessageCircle, label: 'Suporte WhatsApp', sub: 'Resposta rapida' },
  { icon: Zap, label: 'Liberacao rapida', sub: 'Acesso imediato' },
  { icon: ShieldCheck, label: 'Privacidade protegida', sub: 'Dados seguros' },
];

function TrustBlock() {
  return (
    <section className="py-6 sm:py-8 border-y border-brand-border/50 bg-brand-card/30">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {BENEFITS.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 sm:gap-3 bg-white/[0.03] border border-brand-border rounded-2xl px-3 sm:px-4 py-3 sm:py-4">
              <div className="flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-brand-pink/10 border border-brand-pink/20 flex items-center justify-center">
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-pink" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white">{item.label}</p>
                <p className="text-[10px] sm:text-xs text-gray-500">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBlock;
