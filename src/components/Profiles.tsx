import martina from '../assets/Martina-Olvr.jpg';
import mcMirella from '../assets/MC-Mirella.jpg';
import mila from '../assets/Mila-Mondel.jpg';
import casal from '../assets/Casal-Fire-Plus.jpg';

const PROFILES = [
  {
    name: 'Martina Olvr',
    img: martina,
    category: 'Fitness',
  },
  {
    name: 'MC Mirella',
    img: mcMirella,
    category: 'Musica',
  },
  {
    name: 'Mila Mondel',
    img: mila,
    category: 'Lifestyle',
  },
  {
    name: 'Casal Fire',
    img: casal,
    category: 'Entretenimento',
  },
];

function Profiles() {
  return (
    <section className="py-10 sm:py-12">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-black mb-2">Criadores em destaque</h2>
          <p className="text-gray-400 text-sm sm:text-base">Acesse os melhores perfis do momento</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {PROFILES.map((profile, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden border border-brand-border hover:border-brand-pink/30 transition-colors">
              <div className="aspect-[3/4] relative">
                <img
                  src={profile.img}
                  alt={profile.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-sm font-bold text-white">{profile.name}</p>
                  <p className="text-[11px] text-brand-pink font-medium">{profile.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Profiles;
