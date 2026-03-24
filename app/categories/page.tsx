import Link from 'next/link';

const categories = [
  { id: 1, name: "Viskon", count: 145, image: "/images/cat1.jpg", color: "from-purple-500 to-pink-600" },
  { id: 2, name: "Poplin", count: 98, image: "/images/cat2.jpg", color: "from-blue-500 to-cyan-600" },
  { id: 3, name: "Keten", count: 67, image: "/images/cat3.jpg", color: "from-amber-500 to-orange-600" },
  { id: 4, name: "Kadife", count: 54, image: "/images/cat4.jpg", color: "from-red-500 to-pink-600" },
  { id: 5, name: "Şifon", count: 89, image: "/images/cat5.jpg", color: "from-green-500 to-emerald-600" },
  { id: 6, name: "Dantel", count: 43, image: "/images/cat6.jpg", color: "from-indigo-500 to-purple-600" },
  { id: 7, name: "Penye", count: 76, image: "/images/cat7.jpg", color: "from-yellow-500 to-amber-600" },
  { id: 8, name: "Saten", count: 62, image: "/images/cat8.jpg", color: "from-teal-500 to-cyan-600" },
  { id: 9, name: "Kot", count: 91, image: "/images/cat9.jpg", color: "from-blue-600 to-indigo-700" },
  { id: 10, name: "İthal Kumaşlar", count: 128, image: "/images/cat10.jpg", color: "from-orange-500 to-red-600" },
  { id: 11, name: "Nevresimlik", count: 84, image: "/images/cat11.jpg", color: "from-pink-500 to-rose-600" },
  { id: 12, name: "Vual", count: 39, image: "/images/cat12.jpg", color: "from-gray-500 to-slate-600" },
];

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Kumaş Kategorileri
        </h1>
        <p className="text-gray-600">
          İhtiyacınıza uygun kumaş kategorisini seçin - 40+ farklı kumaş çeşidi
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/products?category=${category.id}`}
            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          >
            <div className={`h-40 bg-gradient-to-br ${category.color} flex items-center justify-center relative overflow-hidden`}>
              {/* Fabric Pattern Overlay */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <pattern id={`pattern-${category.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1" fill="white" opacity="0.5"/>
                  </pattern>
                  <rect width="100" height="100" fill={`url(#pattern-${category.id})`} />
                </svg>
              </div>

              {/* Category Icon */}
              <div className="relative z-10">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#FF7A3D] transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-600 text-sm font-medium">{category.count} ürün</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
