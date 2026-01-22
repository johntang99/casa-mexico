import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Casa Mexico',
};

export default function GalleryPage() {
  const photos = [
    'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80',
    'https://images.unsplash.com/photo-1599974768596-e345fc3a0daf?w=800&q=80',
    'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&q=80',
    'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&q=80',
    'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=800&q=80',
    'https://images.unsplash.com/photo-1599974768596-e345fc3a0daf?w=800&q=80',
  ];

  return (
    <main>
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)]">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-display mb-6">Photo Gallery</h1>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6">
            {photos.map((src, idx) => (
              <div key={idx} className="aspect-square relative rounded-xl overflow-hidden">
                <Image src={src} alt={`Mexican food ${idx}`} fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
