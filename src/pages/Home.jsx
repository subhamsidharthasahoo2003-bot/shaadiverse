import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Stats from '../components/Stats';
import FeaturedVendors from '../components/FeaturedVendors';
import InspirationGallery from '../components/InspirationGallery';
import RealWeddings from '../components/RealWeddings';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import MobileApp from '../components/MobileApp';
import CTABanner from '../components/CTABanner';

const Home = ({ wishlist, toggleWishlist, onSelectCategory, onSelectLocation }) => {
  const navigate = useNavigate();

  const handleHeroSearch = (category, location) => {
    onSelectCategory(category);
    onSelectLocation(location);
    navigate('/vendors');
  };

  const handleCategorySelect = (category) => {
    onSelectCategory(category);
    onSelectLocation('');
    navigate('/vendors');
  };

  return (
    <>
      <Hero
        onSearch={handleHeroSearch}
        onStartPlanning={() => navigate('/planner')}
      />
      <Categories onSelectCategory={handleCategorySelect} />
      <Stats />
      
      {/* Short preview of featured vendors directly on Home */}
      <FeaturedVendors
        selectedCategory=""
        selectedLocation=""
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
        onSelectCategory={onSelectCategory}
        onSelectLocation={onSelectLocation}
      />
      
      <WhyChooseUs />
      <Testimonials />
      <MobileApp />
      <CTABanner onGetStarted={() => navigate('/register')} />
    </>
  );
};

export default Home;
