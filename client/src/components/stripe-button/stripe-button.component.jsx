import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JzQszHKvyQNyWiMBgpK4E8cAAH1DEsLm6vnP9Xx6qJmxLT4lP2Xv39StweVJj6zHXKPjSWL22XAKZtwUQTXKCr700YSvG1wKE';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful');
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with your payment. Please be sure you uise the provided credit card');
        });
    }
    return ( 
        <StripeCheckout 
            label="Pay now"
            name="CRWN Clothing Ltd"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Yout total is $${price}`}
            amount={ priceForStripe }
            panelLabel="Pay now"
            token={ onToken }
            stripeKey={ publishableKey }
        />
    );
};
 
export default StripeCheckoutButton;