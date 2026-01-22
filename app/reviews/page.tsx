import { Star } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reviews | Casa Mexico',
};

const reviews = [
  { name: 'Maria Garcia', rating: 5, text: 'Best tacos in NYC! Authentic Mexican flavors.' },
  { name: 'John Smith', rating: 5, text: 'Amazing margaritas and incredible mole sauce!' },
  { name: 'Lisa Chen', rating: 5, text: 'Family favorite. Fresh guacamole is the best!' },
];

export default function ReviewsPage() {
  return (
    <main>
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)]">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-display mb-6">Customer Reviews</h1>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl space-y-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-gradient-to-br from-[var(--backdrop-primary)] to-white rounded-2xl p-8 border-2 border-[var(--secondary)]/30">
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
      </section>
    </main>
  );
}
