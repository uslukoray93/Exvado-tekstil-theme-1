# PERDE - Modern E-Ticaret Platformu

Modern ve şık perde e-ticaret web sitesi. Next.js 15, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## Özellikler

- 🎨 Modern ve responsive tasarım
- ⚡ Next.js 15 ile hızlı performans
- 💎 TypeScript ile tip güvenliği
- 🎯 Tailwind CSS ile özelleştirilebilir stil
- 🛒 Tam fonksiyonlu alışveriş sepeti
- 📱 Mobil uyumlu tasarım
- 🔍 Ürün filtreleme ve arama
- 📦 Kategori bazlı ürün listeleme

## Sayfalar

- **Ana Sayfa**: Hero bölümü, öne çıkan ürünler ve özellikler
- **Ürünler**: Tüm ürünlerin listelendiği sayfa
- **Ürün Detay**: Detaylı ürün bilgileri ve sepete ekleme
- **Sepet**: Alışveriş sepeti ve sipariş özeti
- **Kategoriler**: Ürün kategorileri
- **Hakkımızda**: Şirket bilgileri
- **İletişim**: İletişim formu ve bilgiler

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat (Port: 3030)
npm run dev

# Production build
npm run build

# Production sunucusunu başlat
npm start
```

## Teknolojiler

- **Framework**: Next.js 15
- **Dil**: TypeScript
- **Stil**: Tailwind CSS v4
- **UI**: React 19

## Proje Yapısı

```
perde/
├── app/
│   ├── about/          # Hakkımızda sayfası
│   ├── cart/           # Sepet sayfası
│   ├── categories/     # Kategoriler sayfası
│   ├── contact/        # İletişim sayfası
│   ├── products/       # Ürünler sayfaları
│   ├── layout.tsx      # Ana layout
│   ├── page.tsx        # Ana sayfa
│   └── globals.css     # Global stiller
├── components/
│   ├── Header.tsx      # Navbar component
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   └── ProductCard.tsx # Ürün kartı component
└── public/
    └── images/         # Görseller

```

## Geliştirme

Proje localhost:3030 portunda çalışır.

```bash
npm run dev
```

Tarayıcıda http://localhost:3030 adresini açın.

## Lisans

MIT

---

**Koray Uslu** tarafından oluşturuldu - 2024
