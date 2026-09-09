import { ExternalLink, TrendingDown } from 'lucide-react';
import { pricingPartners, villaInfo } from '@/lib/data';

export default function Pricing() {
  const withPrice = pricingPartners.filter((p) => p.price !== null);
  const withoutPrice = pricingPartners.filter((p) => p.price === null);
  const bestPrice = Math.min(...withPrice.map((p) => p.price as number));

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Pricing & Availability</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mt-2 mb-4">Booking Options</h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            Compare prices across booking platforms and reserve your stay at the best rate.
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-3xl p-8 border border-amber-100 shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-8 text-stone-600">
            <TrendingDown className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">
              Best price from <span className="font-bold text-stone-800">₹{bestPrice.toLocaleString('en-IN')}</span> per night
            </span>
          </div>

          <div className="space-y-3">
            {withPrice.map((partner) => {
              const isBest = partner.price === bestPrice;
              return (
                <div
                  key={partner.name}
                  className={`flex items-center justify-between p-4 rounded-2xl transition-all ${
                    isBest
                      ? 'bg-white border-2 border-green-400 shadow-md'
                      : 'bg-white/70 border border-stone-200 hover:border-amber-200 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${
                      isBest ? 'bg-green-100 text-green-700' : 'bg-stone-100 text-stone-500'
                    }`}>
                      {partner.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-stone-800">{partner.name}</p>
                      {isBest && (
                        <p className="text-xs text-green-600 font-medium">Best Price</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xl font-bold text-stone-800">
                      ₹{(partner.price as number).toLocaleString('en-IN')}
                    </span>
                    <button
                      onClick={() => document.querySelector('#book')?.scrollIntoView({ behavior: 'smooth' })}
                      className="px-4 py-2 rounded-lg bg-amber-600 text-white text-sm font-semibold hover:bg-amber-700 transition-colors flex items-center gap-1.5"
                    >
                      View <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {withoutPrice.length > 0 && (
            <>
              <p className="text-sm text-stone-400 font-medium mt-8 mb-3">Additional results from the web</p>
              <div className="space-y-2">
                {withoutPrice.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/50 border border-stone-200"
                  >
                    <span className="text-stone-600 font-medium text-sm">{partner.name}</span>
                    <span className="text-sm text-amber-600 font-medium hover:underline cursor-pointer">Visit site</span>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="mt-8 p-4 rounded-xl bg-amber-100/50 border border-amber-200 text-center">
            <p className="text-sm text-stone-600">
              Prefer to book directly? Call us at <span className="font-semibold text-amber-700">{villaInfo.phone}</span> or
              <button
                onClick={() => document.querySelector('#book')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-semibold text-amber-700 hover:underline ml-1"
              >
                send an inquiry
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
