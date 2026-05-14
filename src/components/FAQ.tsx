import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'O app funciona no iPhone?',
    a: 'Nao, o app e exclusivo para Android. iPhones nao permitem instalacao de APK.',
  },
  {
    q: 'E seguro instalar?',
    a: 'Sim. O app e verificado e seguro. O alerta do Android e padrao para qualquer app fora da Play Store.',
  },
  {
    q: 'Como libero meu acesso?',
    a: 'Apos instalar, chame nosso suporte no WhatsApp para liberar seu acesso completo.',
  },
  {
    q: 'Preciso pagar?',
    a: 'O download do app e gratuito. Fale com o suporte para saber sobre os planos de acesso.',
  },
  {
    q: 'O app para de funcionar?',
    a: 'O app funciona de forma estavel. Caso tenha problemas, nosso suporte resolve rapidamente via WhatsApp.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-10 sm:py-12">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-black mb-2">Duvidas frequentes</h2>
        </div>

        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-2xl bg-brand-card border border-brand-border overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-4 sm:px-5 py-4 hover:bg-white/[0.02] transition-colors min-h-[52px] text-left"
              >
                <span className="text-sm font-medium text-gray-200 pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-out ${openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 sm:px-5 pb-4 border-t border-brand-border/50 pt-3">
                  <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
