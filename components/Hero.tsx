'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: 'Bahar Koleksiyonu',
    subtitle: '%50\'ye Varan İndirimler',
    description: 'Yeni sezon kumaşlarında özel fırsatlar',
    image: 'https://picsum.photos/seed/fabric1/800/600',
    buttonText: 'Alışverişe Başla',
    buttonLink: '/products',
  },
  {
    id: 2,
    title: 'Premium Kumaşlar',
    subtitle: 'En Kaliteli Ürünler',
    description: '1980\'den beri güvenilir kalite',
    image: 'https://picsum.photos/seed/fabric2/800/600',
    buttonText: 'Ürünleri Keşfet',
    buttonLink: '/products',
  },
  {
    id: 3,
    title: 'Toptan Satış',
    subtitle: 'Özel Fiyatlar',
    description: 'Büyük miktarlı siparişler için',
    image: 'https://picsum.photos/seed/fabric3/800/600',
    buttonText: 'İletişime Geçin',
    buttonLink: '/contact',
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <div className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Instagram Story Style Section */}
        <div className="mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-4 pb-4">
            {[
              { name: 'Yeni Gelenler', image: 'https://picsum.photos/seed/story1/100/100', color: 'from-purple-500 to-pink-500' },
              { name: 'İndirimler', image: 'https://picsum.photos/seed/story2/100/100', color: 'from-red-500 to-orange-500' },
              { name: 'Popüler', image: 'https://picsum.photos/seed/story3/100/100', color: 'from-blue-500 to-cyan-500' },
              { name: 'Viskon', image: 'https://picsum.photos/seed/story4/100/100', color: 'from-yellow-500 to-orange-500' },
              { name: 'Poplin', image: 'https://picsum.photos/seed/story5/100/100', color: 'from-blue-600 to-indigo-600' },
              { name: 'Keten', image: 'https://picsum.photos/seed/story6/100/100', color: 'from-amber-500 to-orange-600' },
              { name: 'Kadife', image: 'https://picsum.photos/seed/story7/100/100', color: 'from-purple-600 to-pink-600' },
              { name: 'Şifon', image: 'https://picsum.photos/seed/story8/100/100', color: 'from-green-500 to-emerald-500' },
              { name: 'Dantel', image: 'https://picsum.photos/seed/story9/100/100', color: 'from-pink-500 to-rose-500' },
              { name: 'Penye', image: 'https://picsum.photos/seed/story10/100/100', color: 'from-teal-500 to-cyan-500' },
              { name: 'Saten', image: 'https://picsum.photos/seed/story11/100/100', color: 'from-gray-500 to-slate-600' },
              { name: 'Kot', image: 'https://picsum.photos/seed/story12/100/100', color: 'from-blue-700 to-indigo-800' },
              { name: 'İthal', image: 'https://picsum.photos/seed/story13/100/100', color: 'from-indigo-500 to-purple-500' },
              { name: 'Vual', image: 'https://picsum.photos/seed/story14/100/100', color: 'from-cyan-500 to-blue-500' },
              { name: 'Nevresimlik', image: 'https://picsum.photos/seed/story15/100/100', color: 'from-orange-500 to-red-500' },
              { name: 'Tül', image: 'https://picsum.photos/seed/story16/100/100', color: 'from-lime-500 to-green-500' },
              { name: 'Jarse', image: 'https://picsum.photos/seed/story17/100/100', color: 'from-violet-500 to-purple-500' },
              { name: 'Perde', image: 'https://picsum.photos/seed/story18/100/100', color: 'from-rose-500 to-pink-500' },
              { name: 'Astar', image: 'https://picsum.photos/seed/story19/100/100', color: 'from-slate-500 to-gray-500' },
            ].map((story, index) => (
              <button
                key={index}
                className="flex-shrink-0 flex flex-col items-center space-y-2 group"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${story.color} p-0.5`}>
                  <div className="w-full h-full rounded-full bg-white p-1">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={story.image}
                        alt={story.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <span className="text-xs font-medium text-gray-700 group-hover:text-[#FF7A3D] transition-colors">
                  {story.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side - Slider */}
          <div className="lg:col-span-9">
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Slides */}
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A3D]/70 to-[#FF9500]/70"></div>
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex items-center p-8 md:p-12">
                    <div className="text-white space-y-4">
                      <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                        {slide.subtitle}
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        {slide.title}
                      </h2>
                      <p className="text-lg md:text-xl text-white/90 max-w-md">
                        {slide.description}
                      </p>
                      <Link
                        href={slide.buttonLink}
                        className="inline-flex items-center justify-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
                      >
                        <span>{slide.buttonText}</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? 'w-8 h-2 bg-white'
                        : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Two Cards */}
          <div className="lg:col-span-3 space-y-6">
            {/* Top Card */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-[215px]">
                <Image
                  src="https://picsum.photos/seed/card1/600/400"
                  alt="İthal Kadife"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/70 to-pink-600/70"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-2 w-fit">
                    YENİ ÜRÜN
                  </div>
                  <h3 className="text-2xl font-bold mb-2">İthal Kadife Kumaşlar</h3>
                  <p className="text-white/90 text-sm mb-4">Lüks ve kaliteli kadife çeşitlerimizi keşfedin</p>
                  <Link
                    href="/products?category=kadife"
                    className="inline-flex items-center space-x-2 text-white font-semibold group-hover:translate-x-1 transition-transform"
                  >
                    <span>İncele</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-[215px]">
                <Image
                  src="https://picsum.photos/seed/card2/600/400"
                  alt="İpek Şifon"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-cyan-600/70"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-2 w-fit">
                    ÖNE ÇIKAN
                  </div>
                  <h3 className="text-2xl font-bold mb-2">İpek Şifon Abiyeler</h3>
                  <p className="text-white/90 text-sm mb-4">Özel günleriniz için zarif şifon kumaşlar</p>
                  <Link
                    href="/products?category=sifon"
                    className="inline-flex items-center space-x-2 text-white font-semibold group-hover:translate-x-1 transition-transform"
                  >
                    <span>İncele</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </div>
  );
}
