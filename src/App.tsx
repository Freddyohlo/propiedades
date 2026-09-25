import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Properties from '@/components/Properties';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero search={search} onSearchChange={setSearch} />
      <Properties search={search} />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
