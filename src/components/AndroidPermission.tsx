import { useState } from 'react';
import { Settings, CheckCircle2, ArrowLeft, MessageCircle, ChevronDown, ShieldCheck, AlertTriangle } from 'lucide-react';

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
    </svg>
  );
}

const STEPS = [
  { icon: Settings, text: 'Toque em Configuracoes', color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/20' },
  { icon: CheckCircle2, text: 'Permitir desta fonte', color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/20' },
  { icon: ArrowLeft, text: 'Voltar e instalar', color: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/20' },
  { icon: MessageCircle, text: 'Chamar suporte se precisar', color: 'text-brand-pink', bg: 'bg-brand-pink/10 border-brand-pink/20' },
];

function AndroidPermission() {
  const [playProtectOpen, setPlayProtectOpen] = useState(false);

  return (
    <section className="py-10 sm:py-12">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#3DDC84]/10 border border-[#3DDC84]/20 rounded-full px-3 py-1.5 mb-3">
            <AndroidIcon className="w-4 h-4 text-[#3DDC84]" />
            <span className="text-xs font-semibold text-[#3DDC84]">Android</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-2">Seu Android pediu permissao?</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
            Alguns celulares pedem confirmacao para instalar apps fora da Play Store.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {STEPS.map((step, i) => (
            <div key={i} className="flex items-center gap-3 bg-brand-card border border-brand-border rounded-2xl p-4 hover:border-brand-pink/30 transition-colors">
              <div className={`flex-shrink-0 w-11 h-11 rounded-xl border ${step.bg} flex items-center justify-center`}>
                <step.icon className={`w-5 h-5 ${step.color}`} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-brand-pink">{i + 1}.</span>
                <span className="text-sm font-medium text-gray-200">{step.text}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          <div className="relative rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-brand-pink/20 p-4 overflow-hidden">
            <div className="relative flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-brand-pink flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Isso e normal</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  O Android mostra alertas padrao ao instalar apps fora da Play Store. E um procedimento seguro.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-brand-card border border-brand-border overflow-hidden">
            <button
              onClick={() => setPlayProtectOpen(!playProtectOpen)}
              className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/[0.02] transition-colors min-h-[56px]"
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-brand-pink" />
                <span className="text-sm font-medium text-gray-200">Play Protect bloqueou?</span>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${playProtectOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-out ${playProtectOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-5 pb-4 border-t border-brand-border/50 pt-3">
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  Se o Play Protect bloquear, toque em:
                </p>
                <div className="flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-brand-border rounded-xl px-3 py-2.5 w-fit">
                    <CheckCircle2 className="w-4 h-4 text-brand-pink" />
                    <span className="text-sm text-gray-300">"Instalar mesmo assim"</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-brand-border rounded-xl px-3 py-2.5 w-fit">
                    <CheckCircle2 className="w-4 h-4 text-brand-pink" />
                    <span className="text-sm text-gray-300">"Continuar instalacao"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AndroidPermission;
