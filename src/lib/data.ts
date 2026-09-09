export const villaInfo = {
  name: 'Smiling Sparrows',
  hindiName: 'स्माइलिंग स्पैरोज़',
  rating: 4.9,
  type: 'Villa',
  sleeps: 6,
  bedrooms: 1,
  beds: 2,
  bathrooms: 1,
  pricePerNight: 6412,
  address: 'Old City, Rao Ji Ka Hata, Udaipur, Rajasthan 313001',
  checkInTime: '11:00 AM',
  checkOutTime: '11:00 AM',
  phone: '+91 98290 12345',
  email: 'stay@smilingsparrows.in',
};

export const galleryImages = {
  exterior: [
    { url: 'https://images.pexels.com/photos/19160074/pexels-photo-19160074.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Traditional Rajasthani haveli facade with intricate carvings' },
    { url: 'https://images.pexels.com/photos/37415377/pexels-photo-37415377.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Rajasthani architecture with sandstone carvings' },
    { url: 'https://images.pexels.com/photos/3974152/pexels-photo-3974152.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Intricate Rajasthani architecture bathed in daylight' },
  ],
  bedroom: [
    { url: 'https://images.pexels.com/photos/6782479/pexels-photo-6782479.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Modern light bedroom with pillows and blanket' },
    { url: 'https://images.pexels.com/photos/8089268/pexels-photo-8089268.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Contemporary bedroom with brick accent wall' },
    { url: 'https://images.pexels.com/photos/30767888/pexels-photo-30767888.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Stylish bedroom with warm tones' },
  ],
  livingRoom: [
    { url: 'https://images.pexels.com/photos/18285958/pexels-photo-18285958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Luxurious traditional living room with ornate fireplace' },
    { url: 'https://images.pexels.com/photos/7166640/pexels-photo-7166640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Bright spacious living room with elegant chandelier' },
    { url: 'https://images.pexels.com/photos/6987730/pexels-photo-6987730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Cozy living room with sofa and tasteful decor' },
  ],
  dining: [
    { url: 'https://images.pexels.com/photos/8583666/pexels-photo-8583666.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Bright dining area with rustic brick wall' },
    { url: 'https://images.pexels.com/photos/8583596/pexels-photo-8583596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Bright dining area with round table' },
    { url: 'https://images.pexels.com/photos/7028108/pexels-photo-7028108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Minimalist dining area with rustic wood table' },
  ],
  bathroom: [
    { url: 'https://images.pexels.com/photos/6957081/pexels-photo-6957081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Contemporary bathroom with ceramic bathtub' },
    { url: 'https://images.pexels.com/photos/30587968/pexels-photo-30587968.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Stylish bathroom with modern fixtures' },
  ],
  udaipur: [
    { url: 'https://images.pexels.com/photos/33658452/pexels-photo-33658452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Udaipur City Palace from Lake Pichola at dusk' },
    { url: 'https://images.pexels.com/photos/27960113/pexels-photo-27960113.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Lake Palace on Lake Pichola, Udaipur' },
    { url: 'https://images.pexels.com/photos/7195782/pexels-photo-7195782.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Udaipur Lake Palace illuminated at twilight' },
  ],
};

export type GalleryCategory = keyof typeof galleryImages;

export const amenities = [
  { icon: 'Wifi', label: 'Free Wi-Fi' },
  { icon: 'AirVent', label: 'Air Conditioning' },
  { icon: 'ChefHat', label: 'Kitchen Access' },
  { icon: 'Car', label: 'Free Parking' },
  { icon: 'WashingMachine', label: 'Washing Machine' },
  { icon: 'Tv', label: 'Smart TV' },
  { icon: 'Mountain', label: 'Rooftop View' },
  { icon: 'ShieldCheck', label: '24/7 Security' },
  { icon: 'Wind', label: 'Garden Area' },
  { icon: 'Droplets', label: 'Hot Water' },
  { icon: 'Utensils', label: 'Breakfast Available' },
  { icon: 'MapPin', label: 'Old City Location' },
];

export const reviews = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    date: 'August 2025',
    text: 'An absolutely charming stay in the heart of Udaipur\'s old city. The villa is beautifully decorated with traditional Rajasthani touches. Walking distance to City Palace and Lake Pichola. Highly recommend!',
  },
  {
    name: 'James Whitfield',
    location: 'London, UK',
    rating: 5,
    date: 'July 2025',
    text: 'Smiling Sparrows is a hidden gem. The rooftop view at sunset is breathtaking. The hosts were incredibly welcoming and helped us plan our entire Udaipur itinerary. We didn\'t want to leave.',
  },
  {
    name: 'Anjali & Rahul',
    location: 'Bangalore, India',
    rating: 5,
    date: 'June 2025',
    text: 'Perfect for a couple\'s getaway. The bedroom is cozy, the living area is spacious, and the location is unbeatable. Every corner of this villa has character. Will definitely come back.',
  },
  {
    name: 'Sophie Martin',
    location: 'Paris, France',
    rating: 4,
    date: 'May 2025',
    text: 'Lovely authentic stay in the old city. The haveli-style architecture is gorgeous. Slightly narrow lanes to reach by car but that\'s part of the old city charm. The hosts arranged an auto rickshaw for us.',
  },
  {
    name: 'Vikram Reddy',
    location: 'Hyderabad, India',
    rating: 5,
    date: 'April 2025',
    text: 'Best value for money in Udaipur. Clean, comfortable, and full of character. The kitchen was well-equipped and the hosts arranged a wonderful rooftop dinner for us. Five stars all the way.',
  },
  {
    name: 'Emma Chen',
    location: 'Sydney, Australia',
    rating: 5,
    date: 'March 2025',
    text: 'Stayed here for 3 nights and it was the highlight of our Rajasthan trip. The attention to detail in the decor is remarkable. Feels like staying in a boutique heritage hotel but with the warmth of a home.',
  },
];

export const nearbyPlaces = [
  { name: 'City Palace', distance: '0.5 km', time: '7 min walk', icon: 'Landmark' },
  { name: 'Lake Pichola', distance: '0.7 km', time: '10 min walk', icon: 'Waves' },
  { name: 'Jagdish Temple', distance: '0.4 km', time: '5 min walk', icon: 'Landmark' },
  { name: 'Bagore Ki Haveli', distance: '0.6 km', time: '8 min walk', icon: 'Building2' },
  { name: 'Clock Tower', distance: '0.3 km', time: '4 min walk', icon: 'Clock' },
  { name: 'Saheliyo Ki Bari', distance: '2.5 km', time: '10 min drive', icon: 'Flower2' },
  { name: 'Sajjangarh Fort', distance: '6 km', time: '20 min drive', icon: 'Mountain' },
  { name: 'Fateh Sagar Lake', distance: '4 km', time: '15 min drive', icon: 'Waves' },
];

export const pricingPartners = [
  { name: 'Bluepillow.in', price: 6886, highlight: false },
  { name: 'Freecancellations.com', price: 6886, highlight: false },
  { name: 'Expedia.co.in', price: 6412, highlight: true },
  { name: 'Hotels.com', price: 6412, highlight: true },
  { name: 'Booking.com', price: null, highlight: false },
  { name: 'Agoda.com', price: null, highlight: false },
];
