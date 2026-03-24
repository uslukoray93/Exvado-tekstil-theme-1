import ProductCard from "@/components/ProductCard";

const allProducts = [
  { id: 1, name: "Premium Viskon Kumaş - Desenli", price: 89, oldPrice: 178, image: "https://picsum.photos/seed/prod1/600/800", secondImage: "https://picsum.photos/seed/prod1b/600/800", category: "Viskon", badge: "%50" },
  { id: 2, name: "Pamuklu Poplin Kumaş - Nevresimlik", price: 65, oldPrice: 95, image: "https://picsum.photos/seed/prod2/600/800", secondImage: "https://picsum.photos/seed/prod2b/600/800", category: "Poplin", badge: "Çok Satan" },
  { id: 3, name: "Doğal Keten Kumaş - Ham Renk", price: 125, oldPrice: 160, image: "https://picsum.photos/seed/prod3/600/800", secondImage: "https://picsum.photos/seed/prod3b/600/800", category: "Keten" },
  { id: 4, name: "İthal Kadife Kumaş - Lüks", price: 180, oldPrice: 240, image: "https://picsum.photos/seed/prod4/600/800", secondImage: "https://picsum.photos/seed/prod4b/600/800", category: "Kadife", badge: "İthal" },
  { id: 5, name: "İpek Şifon Kumaş - Abiye", price: 220, oldPrice: 280, image: "https://picsum.photos/seed/prod5/600/800", secondImage: "https://picsum.photos/seed/prod5b/600/800", category: "Şifon" },
  { id: 6, name: "Pamuklu Penye Kumaş - Çocuk", price: 45, oldPrice: 65, image: "https://picsum.photos/seed/prod6/600/800", secondImage: "https://picsum.photos/seed/prod6b/600/800", category: "Penye", badge: "Yeni" },
  { id: 7, name: "Polyester Saten Kumaş - Parlak", price: 75, oldPrice: 110, image: "https://picsum.photos/seed/prod7/600/800", secondImage: "https://picsum.photos/seed/prod7b/600/800", category: "Saten" },
  { id: 8, name: "İnce Dantel Kumaş - Beyaz", price: 140, oldPrice: 185, image: "https://picsum.photos/seed/prod8/600/800", secondImage: "https://picsum.photos/seed/prod8b/600/800", category: "Dantel" },
  { id: 9, name: "Viskon Karışımlı Kumaş - Çiçek Desenli", price: 95, oldPrice: 135, image: "https://picsum.photos/seed/prod9/600/800", secondImage: "https://picsum.photos/seed/prod9b/600/800", category: "Viskon" },
  { id: 10, name: "Tül Kumaş - İşlemeli", price: 55, oldPrice: 85, image: "https://picsum.photos/seed/prod10/600/800", secondImage: "https://picsum.photos/seed/prod10b/600/800", category: "Tül" },
  { id: 11, name: "Poliviskon Kumaş - Desenli", price: 78, oldPrice: 120, image: "https://picsum.photos/seed/prod11/600/800", secondImage: "https://picsum.photos/seed/prod11b/600/800", category: "Viskon" },
  { id: 12, name: "İpek Kadife Kumaş - Premium", price: 350, oldPrice: 580, image: "https://picsum.photos/seed/prod12/600/800", secondImage: "https://picsum.photos/seed/prod12b/600/800", category: "Kadife", badge: "%40" },
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
