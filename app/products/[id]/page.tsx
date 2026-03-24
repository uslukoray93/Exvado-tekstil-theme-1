'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

// Mock data - normalde API'den gelecek
const productData: any = {
  1: {
    id: 1,
    name: "Premium Viskon Kumaş - Çiçek Desenli",
    price: 89,
    oldPrice: 178,
    category: "Viskon",
    badge: "%50",
    description: "Yüksek kaliteli viskon kumaş, çiçek deseni ile özel tasarım. Elbise, tunik ve gömlek dikim için ideal. Nefes alabilen ve rahat dokuma yapısı ile konforu bir arada sunuyor.",
    images: [
      "https://picsum.photos/seed/product1/800/1000",
      "https://picsum.photos/seed/product1b/800/1000",
      "https://picsum.photos/seed/product1c/800/1000",
      "https://picsum.photos/seed/product1d/800/1000",
    ],
    features: [
      { label: "Kumaş Tipi", value: "Viskon" },
      { label: "Desen", value: "Çiçek Desenli" },
      { label: "En", value: "150 cm" },
      { label: "Ağırlık", value: "180 gr/m²" },
      { label: "Üretim", value: "Türkiye" },
      { label: "Yıkama", value: "30°C Hassas" },
    ],
    stock: 245,
    sku: "VIS-2024-001"
  }
};

const relatedProducts = [
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
];

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = productData[id] || productData[1];
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedColor, setSelectedColor] = useState('Çiçek Desenli');
  const [selectedWidth, setSelectedWidth] = useState('150 cm');

  const formatPrice = (price: number) => {
    return price.toFixed(2).replace('.', ',');
  };

  const getBadgeStyle = (badge: string) => {
    if (badge.includes('%')) {
      return 'bg-gradient-to-r from-red-500 to-pink-500 text-white';
    }
    if (badge === 'Yeni') {
      return 'bg-gradient-to-r from-green-400 to-emerald-500 text-white';
    }
    if (badge === 'Premium' || badge === 'İthal') {
      return 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white';
    }
    return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#FF7A3D]">Ana Sayfa</Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-[#FF7A3D]">Ürünler</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.category}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left - Images */}
          <div className="lg:col-span-5 space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.badge && (
                <div className={`absolute top-4 left-4 ${getBadgeStyle(product.badge)} px-4 py-2 text-sm font-semibold rounded-full shadow-lg`}>
                  {product.badge}
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-[#FF7A3D]' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="lg:col-span-7 space-y-6">
            {/* Category */}
            <div>
              <Link href={`/products?category=${product.category.toLowerCase()}`} className="text-sm font-semibold text-[#FF7A3D] hover:text-[#FF9500]">
                {product.category}
              </Link>
            </div>

            {/* Product Name */}
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
                {product.name}
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                Ürün Kodu: <span className="font-medium text-gray-700">{product.sku}</span>
              </p>
            </div>

            {/* Rating & Sales */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 fill-current text-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600">4.8 (247 değerlendirme)</span>
              <span className="text-sm text-gray-400">|</span>
              <span className="text-sm text-[#FF7A3D] font-medium">1.542 satıldı</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline space-x-3">
              {product.oldPrice && (
                <span className="text-2xl text-gray-400 line-through">
                  {formatPrice(product.oldPrice)} TL
                </span>
              )}
              <span className="text-4xl font-bold text-[#FF7A3D]">
                {formatPrice(product.price)} TL
              </span>
              <span className="text-gray-500">/metre</span>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">Stokta {product.stock} metre mevcut</span>
            </div>

            {/* Variants */}
            <div className="space-y-4 border-t border-b border-gray-200 py-6">
              {/* Color Variant */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Renk / Desen
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Çiçek Desenli', 'Düz Kırmızı', 'Çizgili Mavi', 'Geometrik', 'Puanlı'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all ${
                        selectedColor === color
                          ? 'border-[#FF7A3D] bg-orange-50 text-[#FF7A3D]'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Width Variant */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  En (Genişlik)
                </label>
                <div className="flex flex-wrap gap-2">
                  {['90 cm', '120 cm', '150 cm', '180 cm', '240 cm'].map((width) => (
                    <button
                      key={width}
                      onClick={() => setSelectedWidth(width)}
                      className={`px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all ${
                        selectedWidth === width
                          ? 'border-[#FF7A3D] bg-orange-50 text-[#FF7A3D]'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {width}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Miktar (Metre)
              </label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border-2 border-gray-200 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center text-lg font-semibold border-l border-r border-gray-200 py-3"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                <div className="text-sm text-gray-600">
                  Toplam: <span className="font-bold text-gray-900">{formatPrice(product.price * quantity)} TL</span>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-[#FF7A3D] to-[#FF9500] text-white py-4 text-lg font-semibold rounded-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]">
                Sepete Ekle
              </button>
              <button className="w-full bg-white border-2 border-gray-300 text-gray-900 py-4 text-lg font-semibold rounded-lg hover:border-gray-400 transition-all duration-200">
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>Favorilere Ekle</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12 border-t border-gray-200">
          {/* Tab Headers */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-6 py-4 font-semibold text-sm transition-colors ${
                activeTab === 'description'
                  ? 'text-[#FF7A3D] border-b-2 border-[#FF7A3D]'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Ürün Açıklaması
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-4 font-semibold text-sm transition-colors ${
                activeTab === 'features'
                  ? 'text-[#FF7A3D] border-b-2 border-[#FF7A3D]'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Ürün Özellikleri
            </button>
            <button
              onClick={() => setActiveTab('installment')}
              className={`px-6 py-4 font-semibold text-sm transition-colors ${
                activeTab === 'installment'
                  ? 'text-[#FF7A3D] border-b-2 border-[#FF7A3D]'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Taksit Seçenekleri
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              className={`px-6 py-4 font-semibold text-sm transition-colors ${
                activeTab === 'shipping'
                  ? 'text-[#FF7A3D] border-b-2 border-[#FF7A3D]'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Kargo & İade
            </button>
          </div>

          {/* Tab Content */}
          <div className="py-8">
            {activeTab === 'description' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Ürün Açıklaması</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Kullanım Alanları</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Elbise ve tunik dikimi için ideal</li>
                    <li>Günlük ve özel günler için uygundur</li>
                    <li>Gömlek ve bluz yapımına uygun</li>
                    <li>Çocuk kıyafetleri için güvenli</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Bakım Talimatları</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>30°C'de hassas yıkama programı kullanın</li>
                    <li>Ağartıcı kullanmayın</li>
                    <li>Düşük ısıda ütüleyin</li>
                    <li>Asarak kurutun</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Ürün Özellikleri</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {product.features.map((feature: any, index: number) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <div className="text-sm text-gray-600 mb-1">{feature.label}</div>
                      <div className="text-base font-semibold text-gray-900">{feature.value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Ürün Kodu: <span className="font-medium text-gray-700">{product.sku}</span>
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'installment' && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Taksit Seçenekleri</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Taksit Sayısı</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Aylık Ödeme</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Toplam</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-4 px-4 text-gray-700">Tek Çekim</td>
                        <td className="py-4 px-4 font-semibold text-gray-900">{formatPrice(product.price)} TL</td>
                        <td className="py-4 px-4 font-semibold text-gray-900">{formatPrice(product.price)} TL</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-4 px-4 text-gray-700">3 Taksit</td>
                        <td className="py-4 px-4 font-semibold text-gray-900">{formatPrice(product.price / 3)} TL</td>
                        <td className="py-4 px-4 font-semibold text-gray-900">{formatPrice(product.price)} TL</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-4 px-4 text-gray-700">6 Taksit</td>
                        <td className="py-4 px-4 font-semibold text-gray-900">{formatPrice(product.price / 6)} TL</td>
                        <td className="py-4 px-4 font-semibold text-gray-900">{formatPrice(product.price)} TL</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-4 px-4 text-gray-700">9 Taksit</td>
                        <td className="py-4 px-4 font-semibold text-gray-900">{formatPrice(product.price / 9)} TL</td>
                        <td className="py-4 px-4 font-semibold text-gray-900">{formatPrice(product.price)} TL</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-4 px-4 text-gray-700">12 Taksit</td>
                        <td className="py-4 px-4 font-semibold text-gray-900">{formatPrice(product.price / 12)} TL</td>
                        <td className="py-4 px-4 font-semibold text-gray-900">{formatPrice(product.price)} TL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">💳 Taksit İmkanı:</span> Tüm kredi kartlarına taksit imkanı sunulmaktadır. Faiz oranları bankanıza göre değişiklik gösterebilir.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Kargo Bilgileri</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3 bg-gray-50 rounded-lg p-4">
                      <svg className="w-6 h-6 text-[#FF7A3D] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Hızlı Teslimat</h4>
                        <p className="text-sm text-gray-600">Siparişiniz 1-2 iş günü içinde kargoya verilir.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 bg-gray-50 rounded-lg p-4">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Ücretsiz Kargo</h4>
                        <p className="text-sm text-gray-600">150 TL ve üzeri siparişlerde kargo bedava.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">İade Koşulları</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Ürünü teslim aldıktan sonra 14 gün içinde iade edebilirsiniz.</li>
                    <li>İade edilecek ürün kullanılmamış ve ambalajı açılmamış olmalıdır.</li>
                    <li>Kesilen kumaşlar iade kabul edilmemektedir.</li>
                    <li>İade kargo ücreti müşteriye aittir.</li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">📦 Önemli Not:</span> Kumaş ürünlerinde kesim sonrası iade kabul edilmemektedir. Sipariş vermeden önce lütfen dikkatli ölçüm yapınız.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-3">
              <svg className="w-4 h-4 text-[#FF7A3D]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold text-gray-600">Benzer Ürünler</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              İlginizi Çekebilecek Ürünler
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
