import React, {useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from '../components/Layout';
import Checkout from './Checkout';

const PricingPage = () => {
     
    AOS.init();
    const [basicAmount, setBasicAmount] = useState("0.06");
    const [showView, setShowView] = useState(null);
    const navigate = useNavigate();
    const handleSubscribe = () => {
        navigate("/payment")        
        //setBasicAmount("0.06");
    }   

    const handleSubscribe2 = () => {
        navigate("/payment/2")        
        //setBasicAmount("0.06");
    } 

    const handleSubscribe3 = (content) => {
        navigate("/payment/3")        
        //setBasicAmount("0.06");
    } 
  return (
    <Layout>
        <section className='lg:mt-0 lg:mb-32 mb-0 mt-0 pt-20 px-8 lg:px-32 pb-20'>
            <div
                data-aos="fade-up"
                // data-aos-duration="1000"
            >
                <h1 className='text-4xl'>
                    Plans {"&"} Pricing
                </h1>
                
                <p>
                    You can choose and manage 
                    subscriptions from here. 
                    <br/>Browse plans, start a subscription
                    at any time.
                </p>
            </div>

            <section 
                data-aos="fade-up"
                data-aos-duration="2000"
                className="mt-20 mb-20 md:space-y-0 space-y-10 md:grid grid-cols-3 gap-6"
            >

                <div className="feature-one py-8 px-6 border border-darker">
                    <div className="text-center">
                        <p className="text-2xl mt-2 mb-2 font-semibold">
                            Basic
                        </p>

                        <p className="text-4xl font-bold">
                            $0.06
                        </p>

                        <p className="text-sm">
                            per word for orders within 10,000 words
                        </p>
                    </div>

                    <button 
                        onClick={handleSubscribe} 
                        className='mt-6 mb-4 w-full text-sm text-primary border-2 bg-white  border-primary  py-3 px-6'
                    >
                        Start Plan
                    </button>                    
                </div>

                <div className="feature-two text-white py-8 px-6 bg-primary">
                    <div className="text-center">
                        <p className="text-2xl mt-2 mb-2 font-semibold">
                            Standard
                        </p>

                        <p className="text-4xl font-bold">
                            $0.05
                        </p>

                        <p className="text-sm">
                            per word for orders within 5,000 words
                        </p>
                    </div>

                    <button className='mt-6 mb-4 w-full text-sm text-primary border-2
                     bg-white border-white  py-3 px-6'
                     onClick={handleSubscribe2}
                     >
                        Start Plan
                    </button>
                    
                </div>

                <div className="feature-three py-8 px-6 border border-darker">
                    <div className="text-center">
                        <p className="text-2xl mt-2 mb-2 font-semibold">
                            Premium
                        </p>

                        <p className="text-4xl font-bold">
                            $0.04
                        </p>

                        <p className="text-sm">
                            per word for orders within 20,000 words
                        </p>
                    </div>

                    <button 
                        className='mt-6 mb-4 w-full text-sm text-primary border-2 bg-white  border-primary  py-3 px-6'
                        onClick={handleSubscribe3}    
                    >
                        Start Plan
                    </button>
                    
                </div>

            </section>
            
            
        </section>
    </Layout>
  )
}

export default PricingPage