const videoFile = '/video-hero.mp4';
import martina from '../assets/Martina-Olvr.jpg';
import mcMirella from '../assets/MC-Mirella.jpg';
import mila from '../assets/Mila-Mondel.jpg';
import casal from '../assets/Casal-Fire-Plus.jpg';
import cibelly from '../assets/cibelly.jpg';
import juliana from '../assets/juliana.jpg';
import melmaia from '../assets/melmaia.jpg';
import mcmirela from '../assets/mcmirela.jpg';
import vazados from '../assets/vazados.jpg';
import onlyfans from '../assets/onlyfans-logo.webp';
import privacy from '../assets/privacy-logo1.png';
import loyal from '../assets/loyal-fans.webp';
import fancentro from '../assets/fancentro.png';

const APP_LINK = 'https://pukfgmaczsvkvyzfywkk.supabase.co/storage/v1/object/public/apps/puteirovip.apk';

function trackDownload() {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('show-download-modal'));
    }, 2500);
  }
}

const TOP_PROFILES = [
  { name: 'Latina amadora', img: cibelly },
  { name: 'Acompanhante', img: juliana },
  { name: 'Iniciante', img: melmaia },
  { name: 'Estudante', img: mcmirela },
  { name: 'Loira fitness', img: martina },
  { name: 'Brasileira', img: vazados },
];

const PROFILES_GRID = [
  { name: 'MC Mirella', img: mcMirella },
  { name: 'Martina', img: martina },
  { name: 'Lust Bella', img: mila },
  { name: 'Lana Rhoades', img: cibelly },
  { name: 'Cecilia Bautzer', img: juliana },
  { name: 'Khloy Kelid', img: melmaia },
  { name: 'Yasmin Mineguero', img: mcmirela },
  { name: 'Iggey Azalea', img: casal },
  { name: 'Mia Khalife', img: vazados },
  { name: 'Cassa Bonita', img: martina },
  { name: 'Olivia Pavlo', img: mila },
  { name: 'Anastacia X.', img: mcMirella },
];

function LandingPage() {
  return (
    <main className="pt-14">
      <section className="relative max-w-3xl mx-auto px-3 pt-3 pb-2">
        <div className="mb-3 rounded-md overflow-hidden border border-pink-500/30 shadow-lg shadow-pink-500/20 aspect-video bg-black">
          <video
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            preload="metadata"
            className="w-full h-full object-cover rounded-lg"
          >
            <source src={videoFile} type="video/mp4" />
          </video>
        </div>

        <p className="text-center text-[11px] sm:text-xs text-yellow-300 font-bold mb-3 tracking-wide">
          {'\u26A0\uFE0F'} Apos instalar o app, chame no WhatsApp para liberar seu acesso por apenas R$1.
        </p>

        <a
          href={APP_LINK}
          onClick={trackDownload}
          className="block text-center w-full py-4 mb-1 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 text-white font-black text-base tracking-wider rounded-md shadow-lg shadow-pink-500/40 hover:scale-[1.01] active:scale-[0.99] transition-transform"
        >
          BAIXAR APK ANDROID
        </a>
        <p className="text-center text-[11px] text-gray-400 mb-4">
          O app nao libera acesso automaticamente.
        </p>

        <div className="bg-black/60 border border-green-500/30 rounded-lg p-4 mb-5">
          <h4 className="text-center text-green-400 font-black text-sm sm:text-base mb-2 tracking-wide">
            LIBERE SEU ACESSO POR R$1 NO WHATSAPP
          </h4>
          <p className="text-center text-gray-300 text-xs sm:text-sm mb-3">
            Apos instalar o aplicativo, fale com o suporte para ativar seu acesso.
          </p>
          <a
            href="https://wa.me/5521992827749?text=Ola,%20instalei%20o%20aplicativo,%20mas%20preciso%20de%20ajuda%20para%20autorizar%20meu%20dispositivo%20e%20ativar%20o%20acesso."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-black text-sm sm:text-base tracking-wide rounded-xl shadow-lg shadow-green-500/40 hover:shadow-green-400/60 transition-all"
          >
            <span className="absolute inset-0 rounded-xl ring-2 ring-green-400/40 group-hover:ring-green-300/70 transition" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.044zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.297-.496.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
            </svg>
            <span>CHAMAR NO WHATSAPP</span>
          </a>
        </div>

        <div className="bg-black/60 border border-pink-500/30 rounded-lg p-4 mb-5">
          <h4 className="text-center text-white font-black text-sm sm:text-base mb-3 tracking-wide">
            COMO FUNCIONA
          </h4>
          <ol className="space-y-2 text-xs sm:text-sm text-gray-200">
            <li className="flex gap-2"><span className="text-pink-500 font-bold">1.</span> Baixe o APK</li>
            <li className="flex gap-2"><span className="text-pink-500 font-bold">2.</span> Ative fontes desconhecidas</li>
            <li className="flex gap-2"><span className="text-pink-500 font-bold">3.</span> Desative o Play Protect temporariamente</li>
            <li className="flex gap-2"><span className="text-pink-500 font-bold">4.</span> Instale e abra o app</li>
            <li className="flex gap-2"><span className="text-pink-500 font-bold">5.</span> Chame no WhatsApp</li>
            <li className="flex gap-2"><span className="text-pink-500 font-bold">6.</span> Libere seu acesso por R$1</li>
          </ol>
        </div>

        <div className="text-center mb-3">
          <h3 className="text-red-500 font-black text-sm sm:text-base tracking-wide">
            EM ALTA AGORA: <span className="text-white">LATINAS E AMADORAS</span>
          </h3>
        </div>

        <div className="grid grid-cols-6 gap-1.5 mb-4">
          {TOP_PROFILES.map((p, i) => (
            <div key={i} className="text-center">
              <div className="aspect-square overflow-hidden rounded-sm mb-1">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-[8px] sm:text-[10px] text-gray-400 leading-tight">{p.name}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-300 text-center text-xs sm:text-sm leading-relaxed mb-4 px-2">
          Com o Acesso VIP, voce paga apenas uma assinatura e tem acesso ao conteudo de todas as plataformas de entretenimento. Atualizado diariamente, oferecendo um ambiente seguro e discreto para voce navegar livremente. Milhares de videos e fotos de todas as plataformas que voce possa imaginar!
        </p>

        <a
          href={APP_LINK}
          onClick={trackDownload}
          className="block text-center w-full py-3 mb-1 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 text-white font-black text-sm tracking-wider rounded-md shadow-lg shadow-pink-500/40 hover:scale-[1.01] active:scale-[0.99] transition-transform"
        >
          BAIXAR APK ANDROID
        </a>
        <p className="text-center text-[11px] text-gray-400 mb-2">
          O app nao libera acesso automaticamente.
        </p>
        <a
          href="https://wa.me/5521992827749?text=Ola,%20instalei%20o%20aplicativo,%20mas%20preciso%20de%20ajuda%20para%20autorizar%20meu%20dispositivo%20e%20ativar%20o%20acesso"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 mb-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black text-sm tracking-wide rounded-md shadow-lg shadow-green-500/40 hover:scale-[1.01] active:scale-[0.99] transition-transform"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true">
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.044zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.297-.496.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
          </svg>
          CHAMAR NO WHATSAPP
        </a>

        <div className="text-center mb-4">
          <h3 className="font-black text-base sm:text-lg tracking-wide">
            <span className="text-red-500">ACESSO ILIMITADO</span> <span className="text-white">A TODOS OS PERFIS!</span>
          </h3>
        </div>

        <div className="grid grid-cols-6 gap-2 mb-5">
          {PROFILES_GRID.map((p, i) => (
            <div key={i} className="text-center">
              <div className="aspect-square overflow-hidden rounded-full border-2 border-pink-500/40 mb-1">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-[8px] sm:text-[10px] text-gray-300 leading-tight font-medium">{p.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-2">
          <h3 className="text-white font-black text-base sm:text-lg tracking-wide">
            GARANTA SUA DIVERSAO <span className="text-red-500">AGORA MESMO!</span>
          </h3>
        </div>

        <p className="text-gray-300 text-center text-xs sm:text-sm leading-relaxed mb-4 px-2">
          O que voce esta esperando para acessar o melhor conteudo de todas as plataformas? Lancamento imediato e acesso ilimitado aos perfis das modelos mais sensuais do mundo!
        </p>

        <div className="text-center mb-4">
          <h3 className="font-black text-base sm:text-lg tracking-wide">
            <span className="text-red-500">TODAS AS PLATAFORMAS</span> <span className="text-white">DESBLOQUEADAS!</span>
          </h3>
        </div>

        <div className="bg-black/60 border border-pink-500/30 rounded-lg p-3 mb-4">
          <div className="flex items-center justify-around gap-2 flex-wrap">
            <img src={onlyfans} alt="OnlyFans" className="h-5 sm:h-6 object-contain" />
            <img src={privacy} alt="Privacy" className="h-5 sm:h-6 object-contain" />
            <img src={loyal} alt="LoyalFans" className="h-5 sm:h-6 object-contain" />
            <img src={fancentro} alt="FanCentro" className="h-5 sm:h-6 object-contain" />
          </div>
        </div>

        <a
          href={APP_LINK}
          onClick={trackDownload}
          className="block text-center w-full py-4 mb-1 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 text-white font-black text-base tracking-wider rounded-xl shadow-xl shadow-pink-500/40 hover:scale-[1.01] active:scale-[0.99] transition-transform"
        >
          BAIXAR APK ANDROID
        </a>
        <p className="text-center text-[11px] text-gray-400 mb-2">
          O app nao libera acesso automaticamente.
        </p>

        <a
          href="https://wa.me/5521992827749?text=Ola,%20instalei%20o%20aplicativo,%20mas%20preciso%20de%20ajuda%20para%20autorizar%20meu%20dispositivo%20e%20ativar%20o%20acesso"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-4 mb-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-black text-sm sm:text-base tracking-wide rounded-xl shadow-lg shadow-green-500/40 hover:shadow-green-400/60 transition-all"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.044zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.297-.496.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
          </svg>
          <span>CHAMAR NO WHATSAPP</span>
        </a>
      </section>
    </main>
  );
}

export default LandingPage;
