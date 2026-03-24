'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Lüks Kadife Perde", price: 1299, quantity: 2, image: "/images/product1.jpg" },
    { id: 2, name: "Modern Zebra Perde", price: 899, quantity: 1, image: "/images/product2.jpg" },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 50;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Alışveriş Sepeti</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600 mb-4">Sepetiniz boş</p>
          <Link href="/products" className="text-blue-600 hover:text-blue-700">
            Alışverişe Devam Et
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-6 flex items-center gap-4">
                  <div className="w-24 h-24 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center">
                    <span className="text-gray-400 text-xs">Ürün</span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-gray-600">{item.price} ₺</p>
                  </div>

                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-lg font-semibold text-gray-900 w-24 text-right">
                    {item.price * item.quantity} ₺
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Sipariş Özeti</h2>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-gray-700">
                  <span>Ara Toplam</span>
                  <span>{subtotal} ₺</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Kargo</span>
                  <span>{shipping} ₺</span>
                </div>
                <div className="border-t pt-2 flex justify-between text-lg font-bold text-gray-900">
                  <span>Toplam</span>
                  <span>{total} ₺</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4">
                Siparişi Tamamla
              </button>

              <Link href="/products" className="block text-center text-blue-600 hover:text-blue-700">
                Alışverişe Devam Et
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
