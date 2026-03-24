import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import Image from "next/image";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Viskon Kumaş - Çiçek Desenli",
    price: 89,
    oldPrice: 178,
    image: "https://picsum.photos/seed/product1/600/800",
    secondImage: "https://picsum.photos/seed/product1b/600/800",
    category: "Viskon",
    badge: "%50"
  },
  {
    id: 2,
    name: "Pamuklu Poplin Kumaş - Nevresimlik",
    price: 65,
    oldPrice: 95,
    image: "https://picsum.photos/seed/product2/600/800",
    secondImage: "https://picsum.photos/seed/product2b/600/800",
    category: "Poplin",
    badge: "Çok Satan"
  },
  {
    id: 3,
    name: "Doğal Keten Kumaş - Ham Renk",
    price: 125,
    oldPrice: 160,
    image: "https://picsum.photos/seed/product3/600/800",
    secondImage: "https://picsum.photos/seed/product3b/600/800",
    category: "Keten",
    badge: "Yeni"
  },
  {
    id: 4,
    name: "İthal Kadife Kumaş - Lüks Kalite",
    price: 180,
    oldPrice: 240,
    image: "https://picsum.photos/seed/product4/600/800",
    secondImage: "https://picsum.photos/seed/product4b/600/800",
    category: "Kadife"
  },
  {
    id: 5,
    name: "İpek Şifon Kumaş - Abiye Elbiselik",
    price: 220,
    oldPrice: 280,
    image: "https://picsum.photos/seed/product5/600/800",
    secondImage: "https://picsum.photos/seed/product5b/600/800",
    category: "Şifon",
    badge: "İthal"
  },
  {
    id: 6,
    name: "Pamuklu Penye Kumaş - Çocuk Kıyafetlik",
    price: 45,
    oldPrice: 65,
    image: "https://picsum.photos/seed/product6/600/800",
    secondImage: "https://picsum.photos/seed/product6b/600/800",
    category: "Penye"
  },
  {
    id: 7,
    name: "Fransız Dantel - Özel Tasarım",
    price: 195,
    oldPrice: 250,
    image: "https://picsum.photos/seed/product7/600/800",
    secondImage: "https://picsum.photos/seed/product7b/600/800",
    category: "Dantel",
    badge: "%22"
  },
  {
    id: 8,
    name: "İpek Saten - Gelinlik Kumaş",
    price: 280,
    oldPrice: 350,
    image: "https://picsum.photos/seed/product8/600/800",
    secondImage: "https://picsum.photos/seed/product8b/600/800",
    category: "Saten",
    badge: "Premium"
  },
  {
    id: 9,
    name: "Perde Tül - Brode İşlemeli",
    price: 95,
    oldPrice: 130,
    image: "https://picsum.photos/seed/product9/600/800",
    secondImage: "https://picsum.photos/seed/product9b/600/800",
    category: "Tül",
    badge: "Yeni"
  },
  {
    id: 10,
    name: "İtalyan İthal Kumaş - Lüks",
    price: 320,
    oldPrice: 420,
    image: "https://picsum.photos/seed/product10/600/800",
    secondImage: "https://picsum.photos/seed/product10b/600/800",
    category: "İthal Kumaş",
    badge: "İthal"
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />

      {/* Flash Sale Banner */}
      <section className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold">%50'ye Varan İndirim</span>
              </div>
              <span className="text-lg">Seçili Ürünlerde</span>
            </div>
            <Link
              href="/products?sale=true"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-shadow"
            >
              Fırsatları Gör
            </Link>
          </div>
        </div>
      </section>

      {/* Categories - Premium Grid */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <svg className="w-4 h-4 text-[#0080FF]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              <span className="text-sm font-semibold text-gray-600">Öne Çıkan Kategoriler</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Kumaş Çeşitlerimiz
            </h2>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {[
              { name: 'Viskon', count: 145, image: 'https://picsum.photos/seed/cat-viskon/400/400', color: 'from-purple-500/40 to-pink-600/40' },
              { name: 'Poplin', count: 98, image: 'https://picsum.photos/seed/cat-poplin/400/400', color: 'from-blue-500/40 to-cyan-600/40' },
              { name: 'Keten', count: 67, image: 'https://picsum.photos/seed/cat-keten/400/400', color: 'from-amber-500/40 to-orange-600/40' },
              { name: 'Kadife', count: 54, image: 'https://picsum.photos/seed/cat-kadife/400/400', color: 'from-red-500/40 to-pink-600/40' },
              { name: 'Şifon', count: 89, image: 'https://picsum.photos/seed/cat-sifon/400/400', color: 'from-green-500/40 to-emerald-600/40' },
              { name: 'Dantel', count: 43, image: 'https://picsum.photos/seed/cat-dantel/400/400', color: 'from-indigo-500/40 to-purple-600/40' },
              { name: 'Penye', count: 76, image: 'https://picsum.photos/seed/cat-penye/400/400', color: 'from-yellow-500/40 to-amber-600/40' },
              { name: 'Saten', count: 62, image: 'https://picsum.photos/seed/cat-saten/400/400', color: 'from-teal-500/40 to-cyan-600/40' },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/products?category=${category.name.toLowerCase()}`}
                className="group relative bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[#FF7A3D] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-24 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} group-hover:opacity-80 transition-opacity`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                <div className="p-2 bg-white">
                  <h3 className="text-xs font-bold text-gray-900 group-hover:text-[#FF7A3D] transition-colors mb-0.5">
                    {category.name}
                  </h3>
                  <p className="text-[10px] text-gray-600">{category.count} ürün</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Premium Grid */}
      <section className="pt-8 pb-16 bg-gradient-to-b from-white via-orange-50/30 to-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-3">
              <svg className="w-4 h-4 text-[#FF7A3D]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold text-gray-600">Öne Çıkan Ürünler</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Premium Kumaş Koleksiyonu
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center space-x-2 bg-white border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold text-base hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              <span>Tüm Ürünleri Görüntüle</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Neden Canko Tekstil?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              1980'den beri kumaş sektöründeki tecrübemizle size en iyi hizmeti sunuyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF7A3D] to-[#FF9500] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kalite Garantisi</h3>
              <p className="text-gray-600 leading-relaxed">
                Tüm ürünlerimiz kalite kontrolünden geçer. %100 müşteri memnuniyeti garantisi sunuyoruz.
              </p>
            </div>

            <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0080FF] to-[#0066CC] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hızlı Teslimat</h3>
              <p className="text-gray-600 leading-relaxed">
                Siparişleriniz aynı gün kargoya verilir. Türkiye'nin her yerine ücretsiz kargo imkanı.
              </p>
            </div>

            <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Uygun Fiyat</h3>
              <p className="text-gray-600 leading-relaxed">
                Toptan ve perakende satışta en uygun fiyatları sunuyoruz. Özel indirimlerden faydalanın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF7A3D] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0080FF] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl px-8 md:px-16 py-20 text-center">
            <span className="inline-block bg-gradient-to-r from-[#FF7A3D] to-[#FF9500] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Toptan Satış
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Toptan Alımlarınız İçin<br />Özel Fiyatlar
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Büyük miktarlı siparişleriniz için sizlere özel teklifler sunuyoruz. Hemen bizimle iletişime geçin ve avantajlı fiyatlardan yararlanın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#FF7A3D] to-[#FF9500] text-white px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Bizimle İletişime Geçin</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:+905551234567"
                className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Hemen Arayın</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
