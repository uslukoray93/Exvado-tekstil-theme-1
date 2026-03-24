export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Hakkımızda</h1>

      <div className="prose prose-lg">
        <p className="text-gray-700 mb-6">
          PERDE olarak, 2024 yılından bu yana müşterilerimize en kaliteli perde ve ev tekstili ürünlerini sunuyoruz.
          Modern tasarımlarımız ve üstün kalite anlayışımızla evinize değer katmayı hedefliyoruz.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Misyonumuz</h2>
        <p className="text-gray-700 mb-6">
          Her eve uygun, kaliteli ve şık perde çözümleri sunarak müşterilerimizin yaşam alanlarını
          güzelleştirmek ve konforlarını artırmak.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vizyonumuz</h2>
        <p className="text-gray-700 mb-6">
          Türkiye'nin en güvenilir ve tercih edilen online perde ve ev tekstili platformu olmak.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Değerlerimiz</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Kalite: En iyi kumaşlar ve işçilikle üretim</li>
          <li>Güvenilirlik: Zamanında teslimat ve müşteri memnuniyeti</li>
          <li>Yenilikçilik: Sürekli yenilenen ürün koleksiyonları</li>
          <li>Müşteri Odaklılık: Her zaman müşteri ihtiyaçlarını öncelik olarak görürüz</li>
        </ul>
      </div>
    </div>
  );
}
