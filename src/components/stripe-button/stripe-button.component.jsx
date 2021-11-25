import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JzQszHKvyQNyWiMBgpK4E8cAAH1DEsLm6vnP9Xx6qJmxLT4lP2Xv39StweVJj6zHXKPjSWL22XAKZtwUQTXKCr700YSvG1wKE';

    const onToken = token => {
        console.log(token);
        alert('Payment successfull')
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