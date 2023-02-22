import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Subscribe = () => {

    AOS.init();

    const onSubscribeHandleClick = () =>{

    }

  return (
    <section 
        data-aos="fade-up"
        data-aos-duration="1000"
        className='mt-20 text-center py-6'
    >

        <div className="px-8 md:px-0 md:w-2/4 mx-auto">
            <div className=''>
                <p className='text-primary font-semibold  mb-2 uppercase'>
                    Subscribe
                </p>
                
                <p className='font-bold text-xl md:text-3xl'>
                    Subscribe to Join our Community                    
                </p>

                <p className='text-xs'>
                    Please drop your e-mail below to 
                    explore our community 
                </p>

                <div className='mt-6 flex justify-center items-center'>
                    <form>                        
                        <div>
                            <button 
                                className="px-10 py-3 text-sm             
                                font-semibold rounded-full border 
                                border-purple-200 bg-primary text-white"
                                onClick={onSubscribeHandleClick}
                            >
                                <a target="_blank" href="https://forms.gle/8mJzf4sb9ZwxaBe18">
                                    Subscribe
                                </a>                                
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Subscribe