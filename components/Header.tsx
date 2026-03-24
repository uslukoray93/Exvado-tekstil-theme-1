'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories = [
    {
      name: 'Viskon',
      subcategories: ['Desenli Viskon', 'Düz Viskon', 'İthal Viskon', 'Pamuklu Viskon', 'İnce Viskon', 'Kalın Viskon']
    },
    {
      name: 'Poplin',
      subcategories: ['Nevresimlik Poplin', 'Gömlek Poplin', 'Masa Örtüsü', 'Desenli Poplin', 'Düz Poplin', 'İthal Poplin']
    },
    {
      name: 'Keten',
      subcategories: ['Doğal Keten', 'Karışım Keten', 'Boya Keten', 'İthal Keten', 'Viskon Keten', 'Pamuk Keten']
    },
    {
      name: 'Şifon',
      subcategories: ['İpek Şifon', 'Polyester Şifon', 'Abiye Şifon', 'Desenli Şifon', 'Düz Şifon', 'İthal Şifon']
    },
    {
      name: 'Kadife',
      subcategories: ['Kadife', 'İpek Kadife', 'Streç Kadife', 'İthal Kadife', 'Pamuklu Kadife', 'Viskon Kadife']
    },
    {
      name: 'Dantel',
      subcategories: ['Fransız Dantel', 'Güpür', 'Tül Dantel', 'Kordon Dantel', 'Brode', 'İthal Dantel']
    },
    {
      name: 'Saten',
      subcategories: ['İpek Saten', 'Polyester Saten', 'Astar Saten', 'Desenli Saten', 'Düz Saten', 'İthal Saten']
    },
    {
      name: 'Penye',
      subcategories: ['Basic Penye', 'Süprem', 'İnterlok', 'Ribana', 'Viskon Penye', 'Pamuk Penye']
    },
    {
      name: 'Tül',
      subcategories: ['Perde Tül', 'Fon Tül', 'Brode Tül', 'Jakar Tül', 'İşlemeli Tül', 'İthal Tül']
    },
    {
      name: 'Nevresimlik',
      subcategories: ['Pamuklu', 'Saten', 'Ranforce', 'Poplin', 'Viskon', 'İpek']
    },
    {
      name: 'İthal Kumaş',
      subcategories: ['İtalyan Kumaş', 'Fransız Kumaş', 'Türk İthal', 'İngiliz Kumaş', 'İspanyol Kumaş', 'Alman Kumaş']
    }
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Bar - White */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-[#FF7A3D] to-[#FF9500] px-4 py-2 rounded-lg shadow-md">
                <span className="text-2xl font-bold text-white">CANKO</span>
                <span className="text-sm text-white/90 block -mt-1 font-medium">Tekstil</span>
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ürün, kategori veya marka ara..."
                  className="w-full px-6 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A3D] focus:border-transparent text-gray-700"
                />
                <button className="absolute right-0 top-0 h-full px-6 bg-[#FF7A3D] text-white rounded-r-lg hover:bg-[#FF9500] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Login */}
              <Link href="/account" className="flex items-center space-x-2 text-gray-700 hover:text-[#FF7A3D] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-sm font-medium">Giriş Yap</span>
              </Link>

              {/* Favorites */}
              <Link href="/favorites" className="flex items-center space-x-2 text-gray-700 hover:text-[#FF7A3D] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-sm font-medium">Favoriler</span>
              </Link>

              {/* Cart */}
              <Link href="/cart" className="relative bg-gradient-to-r from-[#FF7A3D] to-[#FF9500] text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="text-sm font-medium">Sepetim</span>
                <span className="absolute -top-2 -right-2 bg-[#0080FF] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  0
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Category Menu - White with Dropdowns */}
      <div className="bg-white border-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center space-x-4 h-12">
            {/* Tüm Kategoriler Button with Mega Menu */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => {
                setOpenDropdown('all-categories');
                setHoveredCategory(categories[0].name);
              }}
              onMouseLeave={() => {
                setOpenDropdown(null);
                setHoveredCategory(null);
              }}
            >
              <button className="bg-gradient-to-r from-[#0080FF] to-[#0066CC] text-white px-4 h-full font-semibold text-sm flex items-center space-x-2 hover:shadow-lg transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span>Tüm Kategoriler</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Menu */}
              {openDropdown === 'all-categories' && (
                <div className="fixed left-0 right-0 top-[128px] bg-white shadow-2xl border-t border-gray-200 z-[100]">
                  <div className="max-w-[1400px] mx-auto flex">
                    {/* Left Sidebar - Categories */}
                    <div className="w-56 bg-gray-50 border-r border-gray-200">
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className={`flex items-center justify-between px-4 py-2.5 text-sm font-medium transition-all ${
                            hoveredCategory === category.name
                              ? 'bg-white text-[#0080FF] border-r-4 border-[#0080FF]'
                              : 'text-gray-700 hover:bg-white hover:text-[#0080FF]'
                          }`}
                          onMouseEnter={() => setHoveredCategory(category.name)}
                        >
                          <span>{category.name}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>

                    {/* Right Content - Subcategories */}
                    <div className="flex-1 py-6 px-8 bg-white">
                      {hoveredCategory && (
                        <div>
                          <h3 className="text-base font-bold text-gray-900 mb-4">
                            {hoveredCategory}
                          </h3>
                          <div className="grid grid-cols-5 gap-x-4 gap-y-2">
                            {categories
                              .find((cat) => cat.name === hoveredCategory)
                              ?.subcategories.map((sub) => (
                                <Link
                                  key={sub}
                                  href={`/categories/${hoveredCategory.toLowerCase()}/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="block px-3 py-2 text-sm text-gray-700 hover:text-[#FF7A3D] hover:bg-gray-50 transition-all"
                                >
                                  {sub}
                                </Link>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Category Links */}
            <div className="flex items-center space-x-3 flex-1 h-full ml-6">
              {categories.map((category, index) => {
                const hasDropdown = category.name === 'Viskon' || category.name === 'İthal Kumaş';

                return (
                  <div key={category.name} className="flex items-center h-full">
                    {hasDropdown ? (
                      <div
                        className="relative h-full flex items-center"
                        onMouseEnter={() => setOpenDropdown(category.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <Link
                          href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-gray-700 hover:text-[#FF7A3D] font-medium whitespace-nowrap transition-colors text-[15px] h-full flex items-center px-3 space-x-1"
                        >
                          <span>{category.name}</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </Link>

                        {openDropdown === category.name && (
                          <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                            {category.subcategories.map((sub) => (
                              <Link
                                key={sub}
                                href={`/categories/${category.name.toLowerCase()}/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FF7A3D] hover:text-white transition-colors"
                              >
                                {sub}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-gray-700 hover:text-[#FF7A3D] font-medium whitespace-nowrap transition-colors text-[15px] h-full flex items-center px-3"
                      >
                        {category.name}
                      </Link>
                    )}
                    {index < categories.length - 1 && (
                      <div className="h-4 w-px bg-gray-300"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="px-4 py-4 space-y-3">
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Ara..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A3D]"
              />
            </div>

            {/* Mobile Categories */}
            <div className="space-y-2">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block py-2 text-gray-700 hover:text-[#FF7A3D]"
                >
                  {category}
                </Link>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="flex space-x-4 pt-4 border-t">
              <Link href="/account" className="text-gray-700">Giriş Yap</Link>
              <Link href="/favorites" className="text-gray-700">Favoriler</Link>
              <Link href="/cart" className="text-gray-700">Sepetim</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
