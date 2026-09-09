import { Star, MapPin, ChevronDown } from 'lucide-react';
import { villaInfo } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/33658452/pexels-photo-33658452.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Udaipur City Palace from Lake Pichola at dusk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-[fadeInUp_0.8s_ease]">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-white text-sm font-medium">{villaInfo.rating} Rating</span>
          <span className="text-white/40">|</span>
          <span className="text-white/80 text-sm">Villa in Old City, Udaipur</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-3 tracking-tight animate-[fadeInUp_0.8s_ease_0.1s_both]">
          {villaInfo.name}
        </h1>
        <p className="text-2xl md:text-3xl text-amber-300/90 mb-8 animate-[fadeInUp_0.8s_ease_0.2s_both]">
          {villaInfo.hindiName}
        </p>

        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-[fadeInUp_0.8s_ease_0.3s_both]">
          A heritage villa nestled in the heart of Udaipur's old city. Experience
          authentic Rajasthani charm with modern comfort, steps away from City Palace
          and Lake Pichola.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-10 animate-[fadeInUp_0.8s_ease_0.4s_both]">
          {[
            { label: 'Sleeps', value: villaInfo.sleeps },
            { label: 'Bedroom', value: villaInfo.bedrooms },
            { label: 'Beds', value: villaInfo.beds },
            { label: 'Bathroom', value: villaInfo.bathrooms },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-3xl font-bold text-white">{item.value}</p>
              <p className="text-sm text-white/60 uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeInUp_0.8s_ease_0.5s_both]">
          <button
            onClick={() => document.querySelector('#book')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-all hover:shadow-2xl hover:scale-105"
          >
            Book Your Stay
          </button>
          <button
            onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/20 transition-all"
          >
            View Photos
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="w-8 h-8 text-white/50 animate-bounce" />
      </div>
    </section>
  );
}
