import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import DownloadModal from './components/DownloadModal';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <LandingPage />
      <DownloadModal />
      <Analytics />
    </div>
  );
}
