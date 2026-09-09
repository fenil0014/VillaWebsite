import { Star, Quote } from 'lucide-react';
import { reviews } from '@/lib/data';

export default function Reviews() {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Guest Experiences</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mt-2 mb-4">What Our Guests Say</h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i <= Math.round(Number(avgRating))
                      ? 'fill-amber-400 text-amber-400'
                      : 'fill-stone-200 text-stone-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-stone-800">{avgRating}</span>
            <span className="text-stone-400">from {reviews.length} reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-stone-50 rounded-2xl p-6 border border-stone-100 hover:shadow-lg transition-all hover:border-amber-200"
            >
              <Quote className="w-8 h-8 text-amber-200 mb-4" />
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i <= review.rating
                        ? 'fill-amber-400 text-amber-400'
                        : 'fill-stone-200 text-stone-200'
                    }`}
                  />
                ))}
              </div>
              <p className="text-stone-600 leading-relaxed mb-6 text-sm">{review.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-stone-800 text-sm">{review.name}</p>
                  <p className="text-xs text-stone-400">{review.location} • {review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
