import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages, type GalleryCategory } from '@/lib/data';

const categories: { key: GalleryCategory; label: string }[] = [
  { key: 'exterior', label: 'Exterior' },
  { key: 'bedroom', label: 'Bedroom' },
  { key: 'livingRoom', label: 'Living Room' },
  { key: 'dining', label: 'Dining' },
  { key: 'bathroom', label: 'Bathroom' },
  { key: 'udaipur', label: 'Udaipur' },
];

const allImages = categories.flatMap(({ key, label }) =>
  galleryImages[key].map((img) => ({ ...img, category: label }))
);

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('exterior');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = galleryImages[activeCategory];

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
  const nextImage = () => setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % images.length));

  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Photo Gallery</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mt-2 mb-4">Photos & Videos</h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            Take a visual tour of Smiling Sparrows and the beautiful city of Udaipur.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat.key
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-white text-stone-600 hover:bg-amber-50 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden rounded-2xl shadow-md group ${
                index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? 'h-64 sm:h-full' : 'h-48'
                }`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium">
                  View Full Size
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>
          <button
            className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <img
            src={images[lightboxIndex].url}
            alt={images[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm text-center max-w-2xl px-4">
            {images[lightboxIndex].alt}
          </p>
        </div>
      )}
    </section>
  );
}

export { allImages };
