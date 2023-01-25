import React from 'react';
import dots from '../assets/dots.png';
import dots2 from '../assets/dots.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {

    AOS.init();
    
    
  return (
    <section 
        id="testimonial"        
        className='mt-32 mb-4 relative testimonial py-20'
    >
        

        <div
            data-aos="fade-up"
            data-aos-duration="2000"
        >

            <div>
                <img 
                    src={dots} 
                    alt="dot icons"
                    className='md:absolute top-0 left-4'
                />
            </div>

            <div className=''>
                <h2 className='text-darker text-4xl font-extrabold text-center'>
                    Testimonials
                </h2>

                

                <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}                    
                    navigation                        
                >
                    <SwiperSlide>
                        <div className='mx-auto w-3/4 md:w-2/4'>
                            

                            <p                             
                                className="mt-12 text-xl text-center"
                            >                                
                                Delivered exactly what I requested 
                                and well optimized
                            </p>

                            <div className='text-center mt-2'>
                                <h4 className='text-lg text-darker font-bold'>
                                    Traveltrained
                                </h4>                                
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='mx-auto w-3/4 md:w-2/4'>
                            

                            <p                             
                                className="mt-12 text-xl text-center"
                            >
                                
                                Thank you. Well written
                            </p>

                            <div className='text-center mt-2'>
                                <h4 className='text-lg text-darker font-bold'>
                                    Rakalon
                                </h4>                                
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='mx-auto w-3/4 md:w-2/4'>                            
                            <p                             
                                className="mt-12 text-lg text-center"
                            >                                
                                Great delivery! Always a pleasure 
                                working with you. I provided feedback 
                                based I. Previous work, and it was 
                                immediately implemented
                            </p>

                            <div className='text-center mt-2'>
                                <h4 className='text-lg text-darker font-bold'>
                                    Rachelf
                                </h4>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='mx-auto w-3/4 md:w-2/4'>
                            

                            <p 
                            // className='mt-10'
                                className="mt-12 text-xl text-center"
                            >                                
                                No need for revision
                            </p>

                            <div className='text-center mt-2'>
                                <h4 className='text-lg text-darker font-bold'>
                                    Makbar
                                </h4>
                            </div>
                        </div>
                    </SwiperSlide>            
                </Swiper>
            </div>        

        </div>
    </section>
  )
}

export default Testimonials