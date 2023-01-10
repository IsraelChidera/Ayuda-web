import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Subscribe from '../components/Subscribe';
import Testimonials from '../components/Testimonials';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
  <>
    {/* <div>
      < Navbar /> 
    </div> */}

    <Layout>
      <section className="relative">
        <div>
          < Hero />
        </div>   

        <div className="bg-primary rounded-full text-white p-4 fixed right-14 bottom-10">
          <a
          href="https://wa.me/2348178764726"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
          >
            <i className="fab fa-2x fa-whatsapp"></i>
          </a>
        </div>   

        <div>
          < Projects />
        </div> 

        <div>
          < Services />
        </div> 

        <div>
          < Testimonials />
        </div> 

        <div>
          < Subscribe />
        </div> 
            
      </section>
    </Layout>
  </>
  )
}

export default LandingPage