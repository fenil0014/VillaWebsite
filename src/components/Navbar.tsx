import { useState, useEffect } from 'react';
import { Menu, X, Bird } from 'lucide-react';
import { villaInfo } from '@/lib/data';

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Photos', href: '#gallery' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Location', href: '#location' },
  { label: 'Reviews', href: '#reviews' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group"
        >
          <div className={`p-2 rounded-xl transition-colors ${scrolled ? 'bg-amber-100' : 'bg-white/15 backdrop-blur'}`}>
            <Bird className="w-6 h-6 text-amber-600" />
          </div>
          <div className="text-left">
            <h1 className={`text-lg font-bold leading-tight transition-colors ${scrolled ? 'text-stone-800' : 'text-white'}`}>
              {villaInfo.name}
            </h1>
            <p className={`text-[10px] leading-tight transition-colors ${scrolled ? 'text-amber-600' : 'text-white/70'}`}>
              {villaInfo.hindiName}
            </p>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 ${
                scrolled
                  ? 'text-stone-600 hover:bg-amber-50 hover:text-amber-700'
                  : 'text-white/90 hover:bg-white/15'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#book')}
            className="ml-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-amber-600 text-white hover:bg-amber-700 transition-all hover:shadow-lg hover:scale-105 shadow-md"
          >
            Book Now
          </button>
        </div>

        <button
          className={`md:hidden ${scrolled ? 'text-stone-800' : 'text-white'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 shadow-xl">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 rounded-lg text-sm font-medium text-stone-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#book')}
              className="mt-2 px-5 py-3 rounded-lg text-sm font-semibold bg-amber-600 text-white text-center"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
