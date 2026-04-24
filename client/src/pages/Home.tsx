import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Simulator from '@/components/Simulator';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import AdminPanel from '@/components/AdminPanel';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Simulator />
      <Features />
      <Footer />
      <AdminPanel />
      <FloatingWhatsApp />
    </div>
  );
}
