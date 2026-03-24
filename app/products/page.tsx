import ProductCard from "@/components/ProductCard";

const allProducts = [
  { id: 1, name: "Premium Viskon Kumaş - Desenli", price: 89, image: "/images/product1.jpg", category: "Viskon", badge: "%50" },
  { id: 2, name: "Pamuklu Poplin Kumaş - Nevresimlik", price: 65, image: "/images/product2.jpg", category: "Poplin", badge: "Çok Satan" },
  { id: 3, name: "Doğal Keten Kumaş - Ham Renk", price: 125, image: "/images/product3.jpg", category: "Keten" },
  { id: 4, name: "İthal Kadife Kumaş - Lüks", price: 180, image: "/images/product4.jpg", category: "Kadife", badge: "İthal" },
  { id: 5, name: "İpek Şifon Kumaş - Abiye", price: 220, image: "/images/product5.jpg", category: "Şifon" },
  { id: 6, name: "Pamuklu Penye Kumaş - Çocuk", price: 45, image: "/images/product6.jpg", category: "Penye", badge: "Yeni" },
  { id: 7, name: "Polyester Saten Kumaş - Parlak", price: 75, image: "/images/product7.jpg", category: "Saten" },
  { id: 8, name: "İnce Dantel Kumaş - Beyaz", price: 140, image: "/images/product8.jpg", category: "Dantel" },
  { id: 9, name: "Kot Kumaş - Denim", price: 95, image: "/images/product9.jpg", category: "Kot" },
  { id: 10, name: "Vual Kumaş - Tül", price: 55, image: "/images/product10.jpg", category: "Vual" },
  { id: 11, name: "Poliviskon Kumaş - Desenli", price: 78, image: "/images/product11.jpg", category: "Viskon" },
  { id: 12, name: "İpek Kadife Kumaş - Premium", price: 350, image: "/images/product12.jpg", category: "Kadife", badge: "%40" },
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Tüm Kumaşlar
        </h1>
        <p className="text-gray-600">
          Geniş kumaş koleksiyonumuzdan size en uygun olanı seçin - Metre ile satış
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button className="px-4 py-2 bg-[#FF7A3D] text-white rounded-lg font-medium">
          Tümü
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium">
          Viskon
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium">
          Poplin
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium">
          Keten
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium">
          Kadife
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium">
          Şifon
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
