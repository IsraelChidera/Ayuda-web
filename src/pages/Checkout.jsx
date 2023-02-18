import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js';
import Layout from '../components/Layout';
import logo from '../assets/gt.jpg';
import logo2 from '../assets/gtbank.png';

const Checkout = ({setBasicAmount}) => {
    const [email, setEmail]= useState("");
    //const [amount, setAmount] = useState("");
    const amount = 1000000;
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastName] = useState(""); 
    const publicKey = "pk_test_59a3034638a797cddb4d05e05025529954c7f3d0";       

    return (
        <Layout>
            <section className='pt-10 px-8 lg:px-64 pb-20'>
                <div>
                    <h1 className='text-4xl md:text-center'>
                        Checkout
                    </h1>            
                </div>

                <div className="mt-10">
                    <div>
                        <p className="md:text-sm">
                            You are ordering for:
                        </p>

                        <p className="text-primary md:text-xl font-semibold">
                            Basic Package:
                            per word for orders within 10,000 words
                        </p>                        
                    </div>

                    <div className="mt-4">
                        <p className="md:text-xl font-semibold">
                            Item Cost
                        </p>

                        <p className="text-primary md:text-lg">
                            $price
                        </p>
                    </div>
                </div>

                <div>
                    <p className="mt-6">
                        Bank Payment
                    </p>

                    <p>
                        For faster verification while making a Bank
                        Payment, please use your full name as the
                        depositor's name on the teller or the depositor
                        field
                    </p>

                    <div className="flex my-8">
                        <div className="md:mr-6 mr-0">
                            <img src={logo} className="w-20 h-20" alt="bank logo"/>
                        </div>

                        <div>
                            <p>
                                <span>Bank: </span>UBA {"(Nationwide)"}
                            </p>

                            <p>
                                <span>Account Name: </span>Ayuda {"(Nationwide)"}
                            </p>

                            <p>
                                <span>Account Number: </span>1011234323 {"(Nationwide)"}
                            </p>
                        </div>
                    </div>

                    <div className="flex mb-6">
                        <div className="md:mr-6 mr-0">
                            <img src={logo2} className="w-20 h-20" alt="bank logo"/>
                        </div>

                        <div>
                            <p>
                                <span>Bank: </span>Zenith bank {"(Nationwide)"}
                            </p>

                            <p>
                                <span>Account Name: </span>Ayuda {"(Nationwide)"}
                            </p>

                            <p>
                                <span>Account Number: </span>1011234323 {"(Nationwide)"}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h1>
                            Bank, Mobile or Internet Transfer
                        </h1>

                        <p>
                            Just make the transfer payment into any of our
                            above account numbers and enter your full name
                            with your number as your narration or reference

                            After payment, send an EMAIL to "info@mysch.com.ng"
                            or send a SMS to "0814626595"
                        </p>
                    </div>
                </div>                
                
            </section>
        </Layout>
    )
}

export default Checkout