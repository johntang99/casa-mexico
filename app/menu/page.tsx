import Image from 'next/image';
import { menuItems, categories, getMenuByCategory, getHouseSpecials } from '@/lib/menu';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu | Casa Mexico',
  description: 'Explore our authentic Mexican menu featuring tacos, burritos, enchiladas, and house specialties with fresh ingredients.',
};

// Photo mapping for all dishes
const dishPhotos: { [key: string]: string } = {
  // Tacos
  'tacos-al-pastor': 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80',
  'carne-asada-tacos': 'https://images.unsplash.com/photo-1599974768596-e345fc3a0daf?w=600&q=80',
  'fish-tacos': 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&q=80',
  
  // Burritos
  'burrito-california': 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80',
  'burrito-carnitas': 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80',
  
  // Enchiladas  
  'enchiladas-verdes': 'https://images.unsplash.com/photo-1599974768596-e345fc3a0daf?w=600&q=80',
  'mole-enchiladas': 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&q=80',
  
  // Especialidades
  'mole-poblano': 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&q=80',
  'carnitas': 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600&q=80',
};

export default function MenuPage() {
  const houseSpecials = getHouseSpecials();
  const regularCategories = categories.filter(cat => cat.name !== "Especialidades");

  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1600&q=80"
          alt="Mexican cuisine"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/40"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center text-white">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary-light)] text-white rounded-full text-small font-bold mb-8 shadow-2xl">
            OUR MENU
          </span>
          <h1 className="text-display md:text-[5rem] mb-6 font-bold">
            "¡Sabor Auténtico!"
          </h1>
          <p className="text-heading text-[var(--accent)] mb-4">
            Authentic Flavor, Vibrant Culture
          </p>
          <p className="text-subheading text-white/90">
            Fresh ingredients, traditional recipes, bold Mexican flavors
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" className="w-full h-20" preserveAspectRatio="none">
            <path d="M0,40 Q360,0 720,40 T1440,40 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* House Specialties - Featured */}
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-black relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl relative">
          <div className="text-center mb-16">
            <p className="text-small text-[var(--accent)] italic mb-4">¡Sabor Auténtico!</p>
            <div className="text-8xl mb-6">⭐</div>
            <h2 className="text-display text-white mb-4 font-bold">House Specialties</h2>
            <p className="text-heading text-[var(--accent)]">Especialidades de la Casa</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {houseSpecials.map((dish) => (
              <div key={dish.id} className="group bg-white rounded-3xl overflow-hidden border-4 border-[var(--accent)]/40 shadow-2xl hover:shadow-[0_0_50px_rgba(251,191,36,0.4)] transition-all">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={dishPhotos[dish.slug] || 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80'}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-105"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[var(--accent)] to-yellow-300 text-gray-900 px-4 py-2 rounded-full font-bold shadow-xl">
                    ${dish.price.toFixed(2)}
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-[var(--backdrop-primary)]">
                  <h3 className="text-subheading font-bold text-gray-900 mb-1">{dish.name}</h3>
                  <p className="text-body text-[var(--secondary)] font-bold mb-3">{dish.nameSpanish}</p>
                  <p className="text-gray-700 mb-4 leading-relaxed">{dish.description}</p>
                  <div className="flex items-center gap-2">
                    {dish.spicyLevel && dish.spicyLevel > 0 && (
                      <span className="flex gap-1">
                        {Array.from({ length: dish.spicyLevel }).map((_, i) => <span key={i}>🌶️</span>)}
                      </span>
                    )}
                    <span className="px-3 py-1 bg-[var(--accent-light)] text-gray-900 rounded-full text-small font-bold">
                      ⭐ House Special
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Menu - List Layout */}
      {regularCategories.map((category) => {
        const items = getMenuByCategory(category.name);
        if (items.length === 0) return null;

        return (
          <section key={category.id} id={category.id} className="py-16 px-4 bg-white border-b">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-10">
                <div className="text-[4rem] mb-4">{category.icon}</div>
                <h2 className="text-heading mb-2 font-bold">{category.name}</h2>
                <p className="text-subheading text-[var(--secondary)] font-bold">{category.nameSpanish}</p>
              </div>

              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="group bg-gradient-to-r from-[var(--backdrop-primary)] to-white rounded-2xl overflow-hidden border-2 border-[var(--secondary)]/20 hover:border-[var(--primary)] hover:shadow-xl transition-all">
                    <div className="grid md:grid-cols-[280px_1fr] gap-0">
                      {/* Photo - Left */}
                      <div className="aspect-[4/3] md:aspect-auto relative overflow-hidden">
                        <Image
                          src={dishPhotos[item.slug] || 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80'}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-105"
                          sizes="280px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
                      </div>

                      {/* Content - Right */}
                      <div className="p-6 flex flex-col justify-center">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <h3 className="text-subheading font-bold text-gray-900 mb-1 group-hover:text-[var(--primary)] transition-colors">
                              {item.name}
                            </h3>
                            <p className="text-body text-[var(--secondary)] font-semibold">
                              {item.nameSpanish}
                            </p>
                          </div>
                          <div className="text-heading font-bold text-[var(--primary)] ml-6">
                            ${item.price.toFixed(2)}
                          </div>
                        </div>

                        <p className="text-gray-700 mb-3 leading-relaxed">{item.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {item.spicyLevel && item.spicyLevel > 0 && (
                            <span className="flex gap-0.5 px-2 py-1 bg-red-50 rounded items-center">
                              {Array.from({ length: item.spicyLevel }).map((_, i) => (
                                <span key={i} className="text-small">🌶️</span>
                              ))}
                            </span>
                          )}
                          {item.vegetarian && (
                            <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-small font-medium">
                              🥬 Vegetarian
                            </span>
                          )}
                          {item.popular && (
                            <span className="px-3 py-1 bg-[var(--primary-50)] text-[var(--primary)] rounded-full text-small font-semibold">
                              🔥 Popular
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-heading mb-4">¿Listo para Ordenar?</h2>
          <p className="text-subheading mb-10 text-white/95">
            Dine-in, takeout, or delivery available
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/order" className="bg-gradient-to-r from-[var(--accent)] to-yellow-300 text-gray-900 px-10 py-5 rounded-full hover:shadow-2xl font-bold transition-all">
              Order Online
            </a>
            <a href="tel:5551234567" className="border-2 border-white text-white px-10 py-5 rounded-full hover:bg-white/10 font-bold transition-all">
              Call to Order
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
