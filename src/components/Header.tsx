import { Download } from 'lucide-react';
import logo from '../assets/logo copy copy.png';

const APP_LINK = 'https://pukfgmaczsvkvyzfywkk.supabase.co/storage/v1/object/public/apps/puteirovip.apk';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-darker/80 backdrop-blur-xl border-b border-brand-border/50">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 flex items-center justify-center h-14 relative">
        <img src={logo} alt="VIP Access" className="h-7 sm:h-8 w-auto object-contain" />
        <a
          href={APP_LINK}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-pink to-brand-rose text-white text-sm font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all absolute right-5 sm:right-6"
        >
          <Download className="w-4 h-4" />
          BAIXAR APK
        </a>
      </div>
    </header>
  );
}

export default Header;
