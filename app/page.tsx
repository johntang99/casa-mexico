'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { menuItems, categories, getHouseSpecials } from '@/lib/menu';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dishesVisible, setDishesVisible] = useState(false);
  const dishesRef = useRef<HTMLDivElement>(null);

  // Hero carousel
  const heroImages = [
    'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1600&q=80',
    'https://images.unsplash.com/photo-1599974768596-e345fc3a0daf?w=1600&q=80',
    'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=1600&q=80',
    'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=1600&q=80',
    'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=1600&q=80',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !dishesVisible) {
            setDishesVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (dishesRef.current) {
      observer.observe(dishesRef.current);
    }

    return () => observer.disconnect();
  }, [dishesVisible]);

  const houseSpecials = [
    { name: 'Tacos Al Pastor', nameSpanish: 'Tacos Al Pastor', description: 'Marinated pork with pineapple', price: 14.95, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80' },
    { name: 'Mole Poblano', nameSpanish: 'Mole Poblano', description: 'Rich chocolate-chili sauce', price: 19.95, image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&q=80' },
    { name: 'Carnitas', nameSpanish: 'Carnitas', description: 'Slow-cooked pork perfection', price: 18.95, image: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600&q=80' },
    { name: 'Carne Asada', nameSpanish: 'Carne Asada', description: 'Grilled steak with fresh salsa', price: 17.95, image: 'https://images.unsplash.com/photo-1599974768596-e345fc3a0daf?w=600&q=80' },
    { name: 'Chile Relleno', nameSpanish: 'Chile Relleno', description: 'Stuffed poblano pepper', price: 16.95, image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&q=80' },
    { name: 'Enchiladas Verdes', nameSpanish: 'Enchiladas Verdes', description: 'Tangy tomatillo sauce', price: 16.95, image: 'https://images.unsplash.com/photo-1551506448-074afa034c05?w=600&q=80' },
  ];

  const reviews = [
    { name: 'Maria Garcia', rating: 5, text: 'Best authentic Mexican food in NYC! Tacos are incredible!' },
    { name: 'Carlos Rodriguez', rating: 5, text: 'Feels like home. Fresh ingredients, bold flavors, generous portions.' },
    { name: 'Sarah Johnson', rating: 5, text: 'The margaritas and guacamole are amazing. Family loves it!' },
    { name: 'Miguel Santos', rating: 5, text: 'Authentic mole sauce - best I\'ve had outside Mexico!' },
  ];

  return (
    <main>
      {/* Vibrant Hero Carousel */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {heroImages.map((src, idx) => (
          <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <Image src={src} alt="Mexican food" fill className="object-cover" priority={idx === 0} sizes="100vw" />
          </div>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary-light)] text-white px-6 py-3 rounded-full text-small font-bold">
                🌮 Authentic Mexican Cuisine Since 2010
              </span>
            </div>
            
            <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-tight mb-6 font-bold">
              Casa Mexico
            </h1>
            
            <p className="text-heading md:text-[2rem] text-[var(--accent)] font-bold mb-4 italic">
              "¡Sabor Auténtico!"
            </p>
            <p className="text-subheading text-[var(--accent)]/90 mb-8">
              Authentic Flavor, Vibrant Culture
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/menu" className="bg-[var(--primary)] text-white px-10 py-5 rounded-full font-bold text-subheading hover:scale-105 transition-all shadow-2xl text-center">
                View Menu
              </Link>
              <Link href="/order" className="bg-[var(--secondary)] text-white px-10 py-5 rounded-full font-bold text-subheading hover:scale-105 transition-all shadow-2xl text-center">
                Order Online
              </Link>
            </div>
          </div>
        </div>

        <button onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur hover:bg-white/30 flex items-center justify-center z-20">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur hover:bg-white/30 flex items-center justify-center z-20">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20" preserveAspectRatio="none">
            <path d="M0,60 Q360,0 720,60 T1440,60 L1440,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {[
              { value: '15+', label: 'Years Serving' },
              { value: '100+', label: 'Mexican Dishes' },
              { value: '4.9★', label: 'Rating' },
              { value: '15,000+', label: 'Happy Guests' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-heading font-bold mb-2">{stat.value}</div>
                <div className="text-small">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories with Photos */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-display mb-4">Explore Our Menu</h2>
            <p className="text-subheading text-gray-600">Fresh, bold, authentic Mexican flavors</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { ...categories[1], photo: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80' },
              { ...categories[2], photo: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80' },
              { ...categories[3], photo: 'https://images.unsplash.com/photo-1599974768596-e345fc3a0daf?w=600&q=80' },
              { ...categories[0], photo: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600&q=80' },
              { ...categories[4], photo: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&q=80' },
              { ...categories[5], photo: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80' },
            ].map((category) => (
              <Link key={category.id} href={`/menu#${category.id}`} className="group relative rounded-2xl overflow-hidden border-4 border-[var(--secondary)]/30 hover:border-[var(--primary)] shadow-lg hover:shadow-2xl transition-all">
                <div className="aspect-[4/3] relative">
                  <Image src={category.photo} alt={category.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500 brightness-105" sizes="33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white">
                    <h3 className="text-subheading font-bold mb-2">{category.name}</h3>
                    <p className="text-body text-[var(--accent)] font-semibold">{category.nameSpanish}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Dishes - Animated */}
      <section className="py-24 px-4 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-black relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative">
          <div className="text-center mb-16">
            <p className="text-small text-[var(--accent)] italic mb-4">¡Sabor Auténtico!</p>
            <div className="text-8xl mb-6">⭐</div>
            <h2 className="text-display text-white mb-4 font-bold">House Specialties</h2>
            <p className="text-heading text-[var(--accent)]">Especialidades de la Casa</p>
          </div>

          <div ref={dishesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {houseSpecials.map((dish, idx) => {
              const animations = ['animate-slide-in-left', 'animate-slide-in-top-right', 'animate-slide-in-bottom', 'animate-slide-in-right', 'animate-slide-in-bottom-left', 'animate-slide-in-top'];
              return (
                <div key={idx} className={`group ${dishesVisible ? animations[idx] : 'opacity-0'}`}>
                  <div className="bg-white rounded-3xl overflow-hidden border-4 border-[var(--accent)]/40 shadow-2xl hover:shadow-[0_0_50px_rgba(251,191,36,0.4)] transition-all">
                    <div className="aspect-[4/3] relative">
                      <Image src={dish.image} alt={dish.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-105" sizes="33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-[var(--accent)] text-white px-4 py-2 rounded-full font-bold shadow-xl">
                        ${dish.price.toFixed(2)}
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-white to-[var(--backdrop-primary)]">
                      <h3 className="text-subheading font-bold text-gray-900 mb-1">{dish.name}</h3>
                      <p className="text-body text-[var(--secondary)] font-bold mb-3">{dish.nameSpanish}</p>
                      <p className="text-gray-700 leading-relaxed">{dish.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style jsx>{`
          @keyframes slideInLeft {
            0% { transform: translateX(-200%) rotate(-45deg); opacity: 0; }
            100% { transform: translateX(0) rotate(0deg); opacity: 1; }
          }
          @keyframes slideInRight {
            0% { transform: translateX(200%) rotate(45deg); opacity: 0; }
            100% { transform: translateX(0) rotate(0deg); opacity: 1; }
          }
          @keyframes slideInTop {
            0% { transform: translateY(-200%) rotate(45deg); opacity: 0; }
            100% { transform: translateY(0) rotate(0deg); opacity: 1; }
          }
          @keyframes slideInBottom {
            0% { transform: translateY(200%) rotate(-45deg); opacity: 0; }
            100% { transform: translateY(0) rotate(0deg); opacity: 1; }
          }
          @keyframes slideInTopRight {
            0% { transform: translate(150%, -150%) rotate(90deg) scale(0.5); opacity: 0; }
            100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
          }
          @keyframes slideInBottomLeft {
            0% { transform: translate(-150%, 150%) rotate(-90deg) scale(0.5); opacity: 0; }
            100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
          }
          .animate-slide-in-left { animation: slideInLeft 1s ease-out 0.2s both; }
          .animate-slide-in-right { animation: slideInRight 1s ease-out 0.8s both; }
          .animate-slide-in-top { animation: slideInTop 1s ease-out 1.2s both; }
          .animate-slide-in-bottom { animation: slideInBottom 1s ease-out 0.6s both; }
          .animate-slide-in-top-right { animation: slideInTopRight 1.2s ease-out 0.4s both; }
          .animate-slide-in-bottom-left { animation: slideInBottomLeft 1.2s ease-out 1s both; }
        `}</style>
      </section>

      {/* Auto-Scrolling Gallery */}
      <section className="py-20" style={{ backgroundColor: '#305908' }}>
        <div className="text-center mb-12 px-4">
          <h2 className="text-heading text-white mb-4">A Visual Fiesta</h2>
        </div>
        
        <div className="gallery-scroll-container" onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'} onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}>
          <div className="gallery-scroll-track">
            {Array(2).fill([
              'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80',
              'https://images.unsplash.com/photo-1599974768596-e345fc3a0daf?w=600&q=80',
              'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600&q=80',
              'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&q=80',
              'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&q=80',
              'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80',
              'https://images.unsplash.com/photo-1551506448-074afa034c05?w=600&q=80',
              'https://images.unsplash.com/photo-1614566065450-5d4c8bb19c05?w=600&q=80',
              'https://images.unsplash.com/photo-1599974768596-e345fc3a0daf?w=600&q=80',
              'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80',
            ]).flat().map((src, idx) => (
              <div key={idx} className="flex-shrink-0 w-80 aspect-[4/3] rounded-lg overflow-hidden border-4 border-[var(--accent)]/40 shadow-2xl hover:scale-105 transition-transform">
                <Image src={src} alt={`Mexican dish ${idx}`} width={320} height={240} className="object-cover w-full h-full brightness-105" />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .gallery-scroll-container {
            width: 100vw;
            overflow: hidden;
            position: relative;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
          }
          .gallery-scroll-track {
            display: flex;
            gap: 1.5rem;
            animation: scroll 30s linear infinite;
          }
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* Reviews Rail */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-heading mb-4">What Our Guests Say</h2>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
            {reviews.map((review, idx) => (
              <div key={idx} className="flex-shrink-0 w-96 bg-gradient-to-br from-[var(--backdrop-primary)] to-white rounded-2xl p-8 border-2 border-[var(--secondary)]/30 shadow-xl">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5" fill="var(--accent)" color="var(--accent)" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{review.text}"</p>
                <p className="font-bold">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
        <div className="container mx-auto max-w-5xl text-center text-white">
          <h2 className="text-heading mb-6">¡Viva México!</h2>
          <p className="text-subheading mb-10">Experience authentic Mexican hospitality today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order" className="bg-white text-[var(--primary)] px-12 py-6 rounded-full font-bold hover:scale-105 transition-all shadow-2xl">
              Order Online
            </Link>
            <a href="tel:5551234567" className="border-2 border-white text-white px-12 py-6 rounded-full hover:bg-white/10 font-bold transition-all">
              Call: (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
