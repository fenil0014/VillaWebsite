import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Amenities from '@/components/Amenities';
import Gallery from '@/components/Gallery';
import Pricing from '@/components/Pricing';
import Location from '@/components/Location';
import Reviews from '@/components/Reviews';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Amenities />
      <Gallery />
      <Pricing />
      <Location />
      <Reviews />
      <BookingForm />
      <Footer />
    </div>
  );
}
