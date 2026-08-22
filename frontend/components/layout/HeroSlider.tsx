"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

const SLIDER_DATA = [
  {
    id: 1,
    tag: "6331 SAYILI İSG KANUNU UYUMLU",
    title: "İşletmenizde İSG Standartlarını Sıfır Riskle Yönetin",
    description: "A'dan Z'ye iş güvenliği uzmanlığı, işyeri hekimliği ve yasal süreçlerinizi eksiksiz tamamlıyoruz.",
    buttonText: "Danışmanlık Al",
    buttonHref: "/offer",
    
  },
  {
    id: 2,
    tag: "SAĞLIK SEKTÖRÜNDE UZMAN KADRO",
    title: "Çalışanlarınızın Sağlığı, İşletmenizin Geleceğidir",
    description: "Gezici mobil sağlık araçlarımız ve tecrübeli hekimlerimizle, iş akışınızı aksatmadan periyodik sağlık taramalarınızı yerinde yapıyoruz.",
    buttonText: "Mobil Sağlık Hizmetleri",
    buttonHref: "/hizmetlerimiz/mobil-saglik",
    
  },
  {
    id: 3,
    tag: "RİSK DEĞERLENDİRMESİ & ANALİZ",
    title: "Tehlikeleri Erkenden Tespit Edin, İş Kazalarını Önleyin",
    description: "Saha denetimleri, risk analiz raporları ve acil durum eylem planları ile iş yerinizi tam koruma altına alıyoruz.",
    buttonText: "Risk Analizi Talep Et",
    buttonHref: "/hizmetlerimiz/risk-analizi",
    
  },
  {
    id: 4,
    tag: "SERTİFİKALI İSG EĞİTİMLERİ",
    title: "Bilinçli Çalışanlar ile Güvenli Çalışma Ortamı Kurun",
    description: "Temel iş sağlığı ve güvenliği eğitimleri, yangın tatbikatları ve yüksekte çalışma eğitimleri ile ekibinizi donatıyoruz.",
    buttonText: "Eğitim Programları",
    buttonHref: "/hizmetlerimiz/egitimler",
    
  },
  {
    id: 5,
    tag: "PERİYODİK KONTROL & ÖLÇÜM",
    title: "Ekipman ve Tesisatlarınızın Teknik Muayenesini Aksamayın",
    description: "Basınçlı kaplar, kaldırma araçları, topraklama ölçümleri ve ortam ölçümlerini yetkili mühendislerimizle raporluyoruz.",
    buttonText: "Periyodik Ölçüm İste",
    buttonHref: "/hizmetlerimiz/periyodik-kontrol",
    
  }
];

export default function HeroSlider() {
  return (
    <section className="w-full h-[80vh] min-h-[500px] bg-zinc-900 relative">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-full"
      >
        {SLIDER_DATA.map((slide) => (
          <SwiperSlide key={slide.id} className="w-full h-full !bg-zinc-900">
            <div className="relative w-full h-full flex items-center justify-center">
              
              <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-white">
                <span className="inline-block text-[#D4B36E] font-bold text-xs sm:text-sm tracking-widest uppercase mb-4">
                  {slide.tag}
                </span>
                
                <h1 className="text-4xl sm:text-5xl font-extrabold max-w-3xl leading-tight mb-6">
                  {slide.title}
                </h1>
                
                <p className="text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed">
                  {slide.description}
                </p>
                
                <Link 
                  href={slide.buttonHref}
                  className="inline-block bg-[#C5A059] hover:bg-[#D4B36E] text-white px-8 py-3.5 rounded-md font-bold transition-colors shadow-lg"
                >
                  {slide.buttonText}
                </Link>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}



