// components/ProductSection.tsx
import ProductCard from "@/components/web-home/product-card";

export default function ProductSection() {
  return (
    <section id="product" className="py-16 bg-gray-100 text-center text-black scroll-mt-20">
    <h2 className="text-3xl font-bold">Produk Kami</h2>
    <div className="flex justify-center flex-wrap mt-8">
      <ProductCard
        title="ERP untuk UMKM dan Perusahaan"
        description="Manajemen keuangan, pengelolaan stok, dan laporan untuk bisnis Anda."
        link="/produk/erp"
      />
      <ProductCard
        title="IoT Meter Service"
        description="Monitor dan kelola meter air, gas, dan KWH secara otomatis."
        link="/produk/iot-meter"
      />
      <ProductCard
        title="Cluster Management & Gate System"
        description="Solusi manajemen cluster dan kontrol pintu gerbang untuk pengamanan."
        link="/produk/cluster-gate"
      />
      {/* Product Card for Maintenance Ticket Integrated IoT Controller Devices */}
      <ProductCard
        title="Maintenance Ticket Integrated IoT Controller Devices"
        description="Solusi pemeliharaan dan pelaporan yang terintegrasi untuk perangkat IoT yang memudahkan pemantauan dan perbaikan otomatis."
        link="/produk/maintenance-iot-controller"
      />
    </div>
  </section>
  );
}
