import { siteConfig } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Casa Mexico',
};

export default function ContactPage() {
  return (
    <main>
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)]">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-display mb-6">Contact Us</h1>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-heading mb-4">Visit Us</h2>
          <p className="text-subheading mb-2">{siteConfig.contact.address.street}</p>
          <p className="text-subheading mb-6">{siteConfig.contact.address.city}, {siteConfig.contact.address.state}</p>
          <p className="text-subheading text-[var(--primary)] mb-8">
            <a href={siteConfig.contact.phone.href}>{siteConfig.contact.phone.display}</a>
          </p>
          <div className="space-y-2">
            {siteConfig.contact.hoursFormatted.map((hour, i) => (
              <p key={i} className="text-body">
                <span className="font-semibold">{hour.days}:</span> {hour.hours}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
