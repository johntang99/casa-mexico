import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Casa Mexico',
  description: 'Learn about our authentic Mexican cuisine and family traditions.',
};

export default function AboutPage() {
  return (
    <main>
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)]">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-display mb-6">Our Story</h1>
          <p className="text-subheading text-gray-600">Authentic Mexican flavors, family traditions</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-heading mb-6">Family Recipes, Bold Flavors</h2>
            <p className="text-body text-gray-700 leading-relaxed mb-6">
              Casa Mexico brings authentic Mexican cuisine to New York with recipes passed down through generations. Our chef creates bold, flavorful dishes using traditional techniques and the freshest ingredients.
            </p>
            <p className="text-body text-gray-700 leading-relaxed">
              From our handmade tortillas to our signature mole sauce, every dish celebrates the rich culinary heritage of Mexico.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
