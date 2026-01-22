import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Users, Heart, Star, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | Casa Mexico',
  description: 'Learn about our authentic Mexican cuisine, family traditions, and vibrant atmosphere.',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero with Slogan */}
      <section className="relative py-32 px-4 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
          alt="Mexican restaurant"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center text-white">
          <div className="text-8xl mb-8">🌮</div>
          <h1 className="text-display md:text-[5rem] mb-8">Casa Mexico</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-heading mb-6 text-[var(--accent)] font-bold italic">
              "¡Sabor Auténtico!"
            </p>
            <p className="text-subheading text-white/95 mb-4">
              Authentic Flavor, Vibrant Culture
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-display mb-6">Our Story</h2>
            <p className="text-heading text-[var(--secondary)]">
              Nuestra Historia
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur rounded-3xl p-12 border-4 border-[var(--secondary)]/30 shadow-2xl">
            <p className="text-subheading text-gray-700 leading-relaxed mb-6">
              For over 15 years, Casa Mexico has been bringing the vibrant flavors and warm hospitality of authentic Mexican cuisine to New York.
            </p>
            <p className="text-body text-gray-700 leading-relaxed mb-6">
              Our recipes have been passed down through generations, preserving traditional cooking techniques and the bold, fresh flavors that make Mexican food beloved worldwide. From our handmade tortillas to our signature mole sauce, every dish celebrates Mexico's rich culinary heritage.
            </p>
            <p className="text-body text-gray-700 leading-relaxed">
              We use only the freshest ingredients, authentic spices, and time-honored methods to create dishes that transport you to the heart of Mexico with every bite.
            </p>
          </div>
        </div>
      </section>

      {/* Team & Traditions */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[600px] rounded-3xl overflow-hidden border-4 border-[var(--accent)]/50 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                alt="Casa Mexico team"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            <div>
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-[var(--primary-50)] to-[var(--secondary-50)] rounded-full text-small font-bold text-[var(--primary)] mb-6">
                OUR TEAM
              </span>
              <h2 className="text-heading mb-6">Passionate About Mexican Cuisine</h2>
              <p className="text-body text-gray-700 leading-relaxed mb-4">
                Our team of experienced chefs and staff are dedicated to bringing you the most authentic Mexican dining experience. Trained in traditional methods and passionate about quality, we treat every guest like family.
              </p>
              <p className="text-body text-gray-700 leading-relaxed mb-6">
                From selecting the freshest ingredients each morning to preparing each dish with care, our commitment to excellence shines through in every meal.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Award className="w-6 h-6" />, label: '15+ Years' },
                  { icon: <Users className="w-6 h-6" />, label: 'Expert Team' },
                  { icon: <Heart className="w-6 h-6" />, label: 'Family Recipes' },
                  { icon: <Star className="w-6 h-6" />, label: 'Award Winning' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-xl border-2 border-[var(--secondary)]/20">
                    <div className="text-[var(--primary)]">{item.icon}</div>
                    <span className="font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Restaurant Photos */}
          <div className="text-center mb-12">
            <h2 className="text-heading mb-4">Vibrant Atmosphere</h2>
            <p className="text-subheading text-[var(--secondary)]">Ambiente Vibrante</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', title: 'Main Dining' },
              { src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80', title: 'Bar Area' },
              { src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80', title: 'Patio Seating' },
            ].map((photo, idx) => (
              <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-[var(--secondary)]/30 shadow-xl hover:shadow-2xl transition-all group">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-105"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-subheading font-bold">{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-heading mb-4">Why Casa Mexico</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🌮', title: 'Authentic Recipes', desc: 'Traditional family recipes' },
              { icon: '🌿', title: 'Fresh Daily', desc: 'Ingredients sourced fresh' },
              { icon: '🎉', title: 'Vibrant Atmosphere', desc: 'Festive, welcoming space' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border-2 border-[var(--secondary)]/30 text-center hover:border-[var(--primary)] hover:shadow-xl transition-all">
                <div className="text-display mb-4">{item.icon}</div>
                <h4 className="text-body font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-small text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
