import {
  Wifi, AirVent, ChefHat, Car, WashingMachine, Tv,
  Mountain, ShieldCheck, Wind, Droplets, Utensils, MapPin,
} from 'lucide-react';
import { amenities } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wifi, AirVent, ChefHat, Car, WashingMachine, Tv,
  Mountain, ShieldCheck, Wind, Droplets, Utensils, MapPin,
};

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mt-2 mb-4">Amenities & Features</h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            Everything you need for a comfortable stay, blending modern convenience with traditional charm.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {amenities.map((amenity) => {
            const Icon = iconMap[amenity.icon];
            return (
              <div
                key={amenity.label}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-100 hover:bg-amber-50 hover:border-amber-200 transition-all hover:shadow-md"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                  {Icon && <Icon className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />}
                </div>
                <span className="font-medium text-stone-700 group-hover:text-amber-800 transition-colors">
                  {amenity.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
