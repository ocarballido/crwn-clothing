import React from 'react';
import './checkout-item.styles.scss';
import { useDispatch } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const addItemHandler = item => dispatch(addItem(item));
    const clearItemHandler = item => dispatch(clearItemFromCart(item));
    const removeItemHandler = item => dispatch(removeItem(item));

    const { name, imageUrl, price, quantity } = cartItem;
    return ( 
        <div className="checkout-item">
            <div className="image-container">
                <img src={ imageUrl } alt="item" />
            </div>
            <span className="name">{ name }</span>
            <span className="quantity">
                <div className="arrow" onClick={ () => removeItemHandler(cartItem) }>&#10094;</div>
                <span className="value">{ quantity }</span>
                <div className="arrow" onClick={ () => addItemHandler(cartItem) }>&#10095;</div>
            </span>
            <span className="price">{ price }</span>
            <div className="remove-button" onClick={ () => clearItemHandler(cartItem) }>&#10005;</div>
        </div>
    );
};
 
export default CheckoutItem;