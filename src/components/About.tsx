import { Users, BedDouble, Bath, Maximize, Star, Clock, MapPin } from 'lucide-react';
import { villaInfo } from '@/lib/data';

export default function About() {
  const stats = [
    { icon: Users, label: 'Sleeps', value: villaInfo.sleeps },
    { icon: BedDouble, label: 'Bedrooms', value: villaInfo.bedrooms },
    { icon: Bath, label: 'Bathrooms', value: villaInfo.bathrooms },
    { icon: Maximize, label: 'Beds', value: villaInfo.beds },
  ];

  return (
    <section id="overview" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 mb-4">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span className="text-sm font-semibold text-amber-700">{villaInfo.rating} Guest Rating</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 leading-tight">
              A Heritage Villa in the Heart of Udaipur
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              Smiling Sparrows is a beautifully restored heritage villa tucked away in
              the narrow lanes of Udaipur's historic Old City. With its traditional
              Rajasthani architecture, intricate carvings, and warm hospitality, it
              offers a truly authentic stay experience.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              Step outside and you're minutes away from the majestic City Palace,
              the serene waters of Lake Pichola, and the bustling lanes of the old
              market. Yet inside, the villa is a peaceful retreat — a place to unwind
              after a day of exploring the City of Lakes.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {['Heritage Property', 'Old City Location', 'Family Friendly', 'Couple Friendly'].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full bg-white border border-stone-200 text-sm font-medium text-stone-700 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-4 text-center shadow-sm border border-stone-100">
                  <stat.icon className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-stone-800">{stat.value}</p>
                  <p className="text-xs text-stone-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/19160074/pexels-photo-19160074.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Haveli facade"
                className="rounded-2xl shadow-lg object-cover w-full h-64 hover:scale-105 transition-transform duration-500"
              />
              <img
                src="https://images.pexels.com/photos/18285958/pexels-photo-18285958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Living room"
                className="rounded-2xl shadow-lg object-cover w-full h-64 mt-8 hover:scale-105 transition-transform duration-500"
              />
              <img
                src="https://images.pexels.com/photos/6782479/pexels-photo-6782479.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Bedroom"
                className="rounded-2xl shadow-lg object-cover w-full h-64 -mt-4 hover:scale-105 transition-transform duration-500"
              />
              <img
                src="https://images.pexels.com/photos/27960113/pexels-photo-27960113.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Lake Palace Udaipur"
                className="rounded-2xl shadow-lg object-cover w-full h-64 mt-4 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-stone-100">
            <Clock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-stone-800 mb-1">Check-in / Check-out</h3>
              <p className="text-sm text-stone-500">Check-in: {villaInfo.checkInTime}</p>
              <p className="text-sm text-stone-500">Check-out: {villaInfo.checkOutTime}</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-stone-100">
            <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-stone-800 mb-1">Location</h3>
              <p className="text-sm text-stone-500">{villaInfo.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-stone-100">
            <Star className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-stone-800 mb-1">Guest Rating</h3>
              <p className="text-sm text-stone-500">{villaInfo.rating} out of 5 from recent guests</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
