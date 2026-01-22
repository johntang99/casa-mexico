import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reservations | Casa Mexico',
};

export default function ReservationsPage() {
  return (
    <main>
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)]">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-display mb-6">Make a Reservation</h1>
        </div>
      </section>

      <section className="py-16 px-4 bg-white text-center">
        <div className="container mx-auto max-w-2xl">
          <p className="text-body mb-8">Call us to reserve your table</p>
          <a
            href="tel:5551234567"
            className="inline-block bg-[var(--primary)] text-white px-10 py-5 rounded-lg hover:bg-[var(--primary-dark)] font-bold"
          >
            (555) 123-4567
          </a>
        </div>
      </section>
    </main>
  );
}
