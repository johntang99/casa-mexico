import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Top Bar */}
        <div className="py-2 px-4 text-small bg-[var(--topbar-bg)] text-white">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex gap-6 items-center">
              <a href={siteConfig.contact.phone.href} className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {siteConfig.contact.phone.display}
              </a>
              <a href={`https://maps.google.com/?q=${siteConfig.contact.address.full}`} className="hidden md:flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {siteConfig.contact.address.street}
              </a>
            </div>
            <div>Open Daily 11 AM - 11 PM</div>
          </div>
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
          <nav className="container mx-auto px-6 py-5">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center gap-3">
                <span className="text-3xl">🌮</span>
                <div>
                  <div className="text-subheading font-bold text-[var(--primary)]">{siteConfig.brand.name}</div>
                  <div className="text-small text-gray-600">{siteConfig.brand.tagline}</div>
                </div>
              </Link>
              
              <div className="hidden lg:flex gap-6 items-center">
                {siteConfig.navigation.main.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-[var(--primary)] font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <Link
                href="/order"
                className="bg-[var(--primary)] text-white px-6 py-2.5 rounded-lg hover:bg-[var(--primary-dark)] text-small font-semibold transition-colors"
              >
                Order Online
              </Link>
            </div>
          </nav>
        </header>

        {children}

        {/* Footer */}
        <footer className="border-t bg-gray-900 text-white py-12 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="text-3xl mb-4">🌮</div>
            <h3 className="font-bold text-subheading mb-2">{siteConfig.brand.name}</h3>
            <p className="text-gray-300 mb-8">{siteConfig.brand.tagline}</p>
            <p className="text-small text-gray-400">
              &copy; {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
