import React, { useState } from 'react';
import Layout from '../components/Layout';
import logo from '../assets/gt.jpg';
import logo2 from '../assets/gtbank.png';
import skype from '../assets/skype.jpg';

const Checkout = ({setBasicAmount}) => {  

    return (
        <Layout>
            <section className='pt-10 px-8 lg:px-64 pb-20'>
                <div>
                    <h1 className='text-4xl md:text-center'>
                        Checkout {setBasicAmount}
                    </h1>            
                </div>

                <div className="mt-10">
                    <div>
                        <p className="md:text-sm">
                            You are ordering for:
                        </p>

                        <p className="text-primary text-xl md:text-4xl font-semibold">
                            Basic Package: $0.06
                            per word for orders within 10,000 words
                        </p>                        
                    </div>

                    <div className="mt-4">
                        <p className="md:text-md font-semibold">
                            Item Cost
                        </p>

                        <p className="text-primary md:text-lg">
                            $0.06 per word
                        </p>
                    </div>
                </div>

                <div>
                    <p className="bg-secondary text-white py-2 pl-2 font-bold text-xl mt-10">
                        Bank Payment
                    </p>

                    <p className="mt-2">
                        For faster verification while making a Bank
                        Payment, please use your full name as the
                        depositor's name on the teller or the depositor
                        field
                    </p>

                    <div className="md:flex block my-8">
                        <div className="md:mr-6 mr-0">
                            <img src={logo} className="w-20 h-20" alt="bank logo"/>
                        </div>

                        <div className="md:mt-0 mt-2">
                            <p>
                                Euro Domiciliary Account
                            </p>

                            <p>
                                <span className="font-bold">Bank: </span>GT Bank {"(Worldwide)"}
                            </p>

                            <p>
                                <span className="font-bold">Account Name: </span>William Oharisi {"(Worldwide)"}
                            </p>

                            <p>
                                <span className="font-bold">Account Number: </span>0762507796 {"(Worldwide)"}
                            </p>
                        </div>
                    </div>

                    <div className="md:flex block mb-8">
                        <div className="md:mr-6 mr-0">
                            <img src={logo2} className="w-20 h-20" alt="bank logo"/>
                        </div>

                        <div className="md:mt-0 mt-2">
                            <p>
                                Dollar Domiciliary Account
                            </p>
                            <p>
                                <span className="font-bold">Bank: </span>GT Bank {"(Worldwide)"}
                            </p>

                            <p>
                                <span className="font-bold">Account Name: </span>William Oharisi {"(Worldwide)"}
                            </p>

                            <p>
                                <span className="font-bold">Account Number: </span>0762420059 {"(Worldwide)"}
                            </p>
                        </div>
                    </div>

                    <div className="md:flex block mb-8">
                        <div className="md:mr-6 mr-0">
                            <img src={logo2} className="w-20 h-20" alt="bank logo"/>
                        </div>

                        <div className="md:mt-0 mt-2">
                            <p>
                                Pound Domiciliary Account
                            </p>
                            <p>
                                <span className="font-bold">Bank: </span>GT Bank {"(Worldwide)"}
                            </p>

                            <p>
                                <span className="font-bold">Account Name: </span>William Oharisi {"(Worldwide)"}
                            </p>

                            <p>
                                <span className="font-bold">Account Number: </span>0762507789 {"(Worldwide)"}
                            </p>
                        </div>
                    </div>

                    <div className='mt-6'>
                        <h1 className="text-lg font-semibold ">
                            Bank, Mobile or Internet Transfer
                        </h1>

                        <p>
                            Just make the transfer payment into any of our
                            above account numbers and enter your full name
                            with your number as your narration or reference.

                            After payment, send an EMAIL to <span className="font-semibold">AyudaContent@gmail.com </span>
                            or send a SMS to <span className="font-semibold">09014960716</span>
                        </p>
                    </div>
                </div>    

                <div className="flex  mt-10 mb-8">
                    <div className="md:mr-6 mr-0">
                        <img src={skype} className="w-20 h-20" alt="skype logo"/>
                    </div>

                    <div className="flex items-center md:pl-0 pl-6 md:mt-0 mt-2">
                        <p>
                            <span className="font-semibold">
                                Skype: live:.cid.db16bf12e52ab168
                            </span>
                        </p>                            
                    </div>
                </div>   

                <p className='pt-4 text-lg'>
                    We also accept payment through 
                    <span className="font-semibold text-primary italic uppercase"> cryptocurrency</span>. 
                    Kindly <span>contact us</span> for further inquiries.  
                    Contact us via email 
                    <span className="font-semibold text-primary"> AyudaContent@gmail.com </span>
                    or send a SMS to <span className="font-semibold text-primary">09014960716</span>  
                </p>         
                
            </section>
        </Layout>
    )
}

export default Checkout