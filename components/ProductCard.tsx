'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  secondImage?: string;
  category: string;
  badge?: string;
  rating?: number;
  reviews?: number;
}

export default function ProductCard({ id, name, price, oldPrice, image, secondImage, category, badge }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

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
    if (badge === 'Çok Satan') {
      return 'bg-gradient-to-r from-orange-400 to-yellow-500 text-white';
    }
    return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
  };

  return (
    <div
      className="relative bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gray-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${id}`}>
        {/* Image Container */}
        <div className="relative aspect-[5/6] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          <Image
            src={isHovered && secondImage ? secondImage : image}
            alt={name}
            fill
            className="object-cover transition-all duration-500"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          />
          {badge && (
            <div className={`absolute top-2 left-2 ${getBadgeStyle(badge)} px-3 py-1 text-xs font-semibold rounded-full shadow-lg`}>
              {badge}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-3 space-y-1">
          <p className="text-xs text-[#FF7A3D] font-medium">{category}</p>
          <h3 className="text-sm text-gray-900 leading-snug line-clamp-2 font-normal h-10">
            {name}
          </h3>
          <div className="pt-1">
            {oldPrice ? (
              <p className="text-sm font-normal text-gray-900">
                <span className="line-through text-gray-400">{formatPrice(oldPrice)}</span>
                <span className="mx-1">/</span>
                <span className="font-semibold text-[#FF7A3D]">{formatPrice(price)} TL</span>
              </p>
            ) : (
              <p className="text-sm font-semibold text-[#FF7A3D]">{formatPrice(price)} TL</p>
            )}
          </div>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="px-3 pb-3">
        <button
          onClick={(e) => {
            e.preventDefault();
            // Add to cart logic here
          }}
          className="w-full bg-gradient-to-r from-[#FF7A3D] to-[#FF9500] text-white py-2.5 text-xs font-medium rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}
