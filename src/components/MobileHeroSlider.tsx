import { Swiper, SwiperSlide } from 'swiper/react';
// --- 1. Re-import Autoplay ---
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper's CSS
import 'swiper/css';
import 'swiper/css/pagination';
// 'swiper/css/navigation'; // Navigation arrows are still removed

// Import your 3 new mobile hero images
import heroSlide1 from "@/assets/hero-building 1.jpg";
import heroSlide2 from "@/assets/hero-building 2.jpg";
import heroSlide3 from "@/assets/hero-building 3.jpg";

const slideImages = [
  heroSlide1,
  heroSlide2,
  heroSlide3,
];

const MobileHeroSlider = () => {
  return (
    <Swiper
      // --- 2. Add Autoplay to modules ---
      modules={[Autoplay, Pagination]}
      className="w-full h-full"
      spaceBetween={30} 
      centeredSlides={true}
      pagination={{
        clickable: true, 
      }}
      loop={true} 
      
      // --- 3. Add autoplay prop ---
      autoplay={{
        delay: 3000, // 3 seconds
        disableOnInteraction: false, // This makes it resume after you swipe
      }}
    >
      {slideImages.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Hero Slide ${index + 1}`}
            className="w-full h-full object-cover" 
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MobileHeroSlider;