import {
  Landmark, Waves, Building2, Clock, Flower2, Mountain, Navigation,
} from 'lucide-react';
import { nearbyPlaces, villaInfo } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Landmark, Waves, Building2, Clock, Flower2, Mountain,
};

export default function Location() {
  return (
    <section id="location" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Where to Find Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mt-2 mb-4">Location & Nearby</h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            Perfectly positioned in Udaipur's historic Old City, steps away from the city's most iconic landmarks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
              <iframe
                title="Smiling Sparrows location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=73.6770%2C24.5740%2C73.6970%2C24.5840&layer=mapnik&marker=24.5790%2C73.6870"
                className="w-full h-80 border-0"
                loading="lazy"
              />
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
              <div className="flex items-start gap-3 mb-4">
                <Navigation className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-stone-800">Address</h3>
                  <p className="text-sm text-stone-500 mt-1">{villaInfo.address}</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Old+City+Rao+Ji+Ka+Hata+Udaipur+Rajasthan+313001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
              >
                Get Directions
                <Navigation className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-stone-800 mb-6">What's Nearby</h3>
            <div className="space-y-3">
              {nearbyPlaces.map((place) => {
                const Icon = iconMap[place.icon] ?? Landmark;
                return (
                  <div
                    key={place.name}
                    className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-stone-100 hover:border-amber-200 hover:shadow-md transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-stone-800">{place.name}</p>
                      <p className="text-sm text-stone-400">{place.time}</p>
                    </div>
                    <span className="text-sm font-semibold text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                      {place.distance}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
