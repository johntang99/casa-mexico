import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catering | Casa Mexico',
};

export default function CateringPage() {
  return (
    <main>
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)]">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-display mb-6">Catering Services</h1>
          <p className="text-subheading text-gray-600">Authentic Mexican catering for your events</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white text-center">
        <div className="container mx-auto max-w-5xl">
          <p className="text-body text-gray-700 mb-8">
            We cater all types of events with authentic Mexican cuisine.
          </p>
          <a
            href="tel:5551234567"
            className="inline-block bg-[var(--primary)] text-white px-10 py-5 rounded-lg hover:bg-[var(--primary-dark)] font-bold"
          >
            Call for Catering
          </a>
        </div>
      </section>
    </main>
  );
}
