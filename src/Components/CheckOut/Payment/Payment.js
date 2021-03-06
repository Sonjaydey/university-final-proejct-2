import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import Navigation from './../../Shared/Navigation/Navigation';



const stripePromise = loadStripe('pk_test_51IguhVKzKDyCndTSmMwZXO4HgcVl23cKL4lHifvL1sSAKQrYWnJGYKJD5WbIKRGYBeJbJk26R1AZAFw6pC3Ijz1x00ohH1RyRB');

const Payment = () => {
  return (
    <>
     <Navigation />
 <Elements stripe={stripePromise}>
        <PaymentForm/>
    </Elements>
    </>
   
  );
};

export default Payment;