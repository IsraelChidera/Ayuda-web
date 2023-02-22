import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <section className='mt-10 bg-secondary text-white px-8 lg:px-32 pt-10 pb-4 md:pb-8'>
        <div>

            <div 
                className='text-center md:flex justify-between items-center 
                pb-10 '
            >
                <p className='text-lg md:block mb-10 md:mb-0 flex items-center justify-center'>
                    <img src={logo} alt="ayuda logo" className="rounded-full bg-white w-32 h-32"/>
                </p>                

                <div className='md:my-0 my-6 md:block flex items-center justify-center'>
                    <ul className='flex items-center space-x-6'>                       

                        <li>
                            <span 
                                
                                className='rounded-full p-2 bg-primary'      
                            >
                                <a 
                                    target="_blank" 
                                    href="https://www.linkedin.com/in/william-oharisi-07b309257"
                                >
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>                                
                            </span>
                        </li>

                        <li>
                            <span 
                                
                                className='rounded-full p-2 bg-primary'      
                            >
                                <a 
                                    target="_blank" 
                                    href="https://twitter.com/oharisi_william?t=BD1JgauXKXFDwgSCbfTzLg&s=09"
                                >
                                    <i className="fa-brands fa-twitter"></i>
                                </a>                                
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-b border-b-slate-800 pb-10 md:grid md:grid-cols-3 xl:grid-cols-3
             gap-4 block ">
                <ul className="md:mb-0 mb-10 opacity-80">
                    <li className="text-xl pb-2">
                        Company
                    </li>

                    <li>
                        About
                    </li>

                    <li>
                        Pricing
                    </li>

                    <li>
                        Services
                    </li>

                    <li>
                        Testimonial
                    </li>
                </ul>

                <ul className="md:mb-0 mb-10 opacity-80">
                    <li className="text-xl pb-2">
                        Content Categories
                    </li>

                    <li>
                        Automative industry
                    </li>

                    <li>
                        Education industry
                    </li>

                    <li>
                        Entertainment & Gaming
                    </li>

                    <li>
                        Fashion & Clothing
                    </li>

                    <li>
                        Health & Beauty
                    </li>

                    <li>
                        Healthcare industry
                    </li>

                    <li>
                        Marketing & Advertising
                    </li>

                    <li>
                        Real Estate & Construction
                    </li>

                    <li>
                        Sports & Fitness
                    </li>
                </ul>

                <ul className="md:mb-0 mb-10 opacity-80">
                    <li className="text-xl pb-2">
                        Professional Content Writing
                    </li>

                    <li>
                        Creative writing
                    </li>

                    <li>
                        Ghostwriting
                    </li>

                    <li>
                       Professional blog writing
                    </li>

                    <li>
                        Social media writing
                    </li>

                    <li>
                        Website content writing
                    </li>

                    <li>
                        Professional email writing
                    </li>

                    <li>
                        SOP writing
                    </li>

                    <li>
                        Academic writing
                    </li>

                    <li>
                        Product description & review writing
                    </li>
                </ul>
                
            </div>

            <p className='mt-10 text-center text-sm'>
                &copy;Ayuda Content 2022 - All Rights Reserved
            </p>
        </div>
    </section>
  )
}

export default Footer