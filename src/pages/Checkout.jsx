import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js';
import Layout from '../components/Layout';
import { PaystackButton } from 'react-paystack';

const Checkout = () => {
    const [email, setEmail]= useState("");
    //const [amount, setAmount] = useState("");
    const amount = 1000000;
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastName] = useState(""); 
    const publicKey = "pk_test_59a3034638a797cddb4d05e05025529954c7f3d0";
   

    const componentProps = {
        email,
        amount,
        metadata: {
          //name,
          //phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
          alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Wait! You need this oil, don't go!!!!"),
      }

    return (
        <Layout>
            <section className='pt-20 px-8 lg:px-64 pb-20'>
                <div>
                    <h1 className='text-4xl md:text-center'>
                        Checkout
                    </h1>            
                </div>

                <div className='md:mt-10 mt-6 md:flex justify-between items-center'>
                    <p className='text-lg'>
                        
                    </p>

                    <p className='font-semibold'>
                        Total: {" "}
                        <span>
                            {amount}
                        </span>
                    </p>
                </div>

                <div className='mt-10 p-2  text-darker'>
                    <form id="paymentForm" className='space-y-6'>
                        <div className="form-group">
                            <label for="email">Email Address</label>
                            <input 
                                type="email" 
                                id="email-address" 
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                required 
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                            />
                        </div>                        

                        <div className="form-group">
                            <label for="first-name">First Name</label>
                            <input 
                                type="text" 
                                id="first-name" 
                                value={firstname}
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                                onChange={(e)=>setFirstname(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label for="last-name">Last Name</label>
                            <input 
                                type="text" 
                                id="last-name" 
                                value={lastname}
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                                onChange={(e)=>setLastName(e.target.value)}
                            />
                        </div>

                        
                    </form>

                    <div 
                        className="mt-10 text-center py-4 text-lg             
                            font-semibold rounded-full border 
                            border-purple-200 bg-primary text-white"
                    >
                        {/* <button 
                            type="submit" 
                            onClick={payWithPaystack}
                            className="px-6 py-3 text-sm             
                                font-semibold rounded-full border 
                                border-purple-200 bg-primary text-white"
                        > 
                            Pay
                        </button> */}
                        <PaystackButton 
                            className="paystack-button" 
                            {...componentProps} 
                        />
                    </div>
                </div>
                
            </section>
        </Layout>
    )
}

export default Checkout