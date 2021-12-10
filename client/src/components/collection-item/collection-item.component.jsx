import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item }) => {
    const dispatch = useDispatch();
    const addItemHandler = item => dispatch(addItem(item));
    const { name, price, imageUrl } = item;
    return ( 
        <div className="collection-item">
            <div 
                className="image"
                style={{
                    backgroundImage: `url(${ imageUrl })`
                }}
            />
            <div className="collection-footer">
                <span className="name">{ name }</span>
                <span className="price">{ price }</span>
            </div>
            <CustomButton className='custom-button' onClick={() => addItemHandler(item)} inverted>Add to cart</CustomButton>
        </div>
    );
};
 
export default CollectionItem;