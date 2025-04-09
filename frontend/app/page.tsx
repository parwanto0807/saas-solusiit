import Navbar from '@/components/web-home/navbar';
import Hero from '@/components/web-home/hero';
import ProductSection from '@/components/web-home/product-section';
import LayananSection from '@/components/web-home/layanan';
import ElegantFooter from '@/components/web-home/footer';
import ContactPage from '@/components/web-home/contact';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductSection />
      <LayananSection />
      <ContactPage />
      <ElegantFooter/>
    </div>
  );
}
