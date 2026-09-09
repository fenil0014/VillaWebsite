import { Bird, MapPin, Phone, Mail, Star } from 'lucide-react';
import { villaInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-amber-600/20">
                <Bird className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{villaInfo.name}</h3>
                <p className="text-sm text-amber-400/80">{villaInfo.hindiName}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-stone-400 max-w-md mb-4">
              A heritage villa in the heart of Udaipur's Old City. Experience authentic
              Rajasthani hospitality with modern comfort, steps away from City Palace and
              Lake Pichola.
            </p>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium text-stone-300">{villaInfo.rating} Guest Rating</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Overview', href: '#overview' },
                { label: 'Photo Gallery', href: '#gallery' },
                { label: 'Amenities', href: '#amenities' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'Book Now', href: '#book' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-stone-400">{villaInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-stone-400">{villaInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-stone-400">{villaInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-500">
            © 2025 Smiling Sparrows. All rights reserved.
          </p>
          <p className="text-sm text-stone-500">Udaipur, Rajasthan, India</p>
        </div>
      </div>
    </footer>
  );
}
