import React from 'react';
import './collections-overview.styles.scss';
import { useSelector } from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors.js';
import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = () => {
    const collections = useSelector(selectCollectionsForPreview);
    return (
    <CollectionsOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </CollectionsOverviewContainer>
)};

  
export default CollectionsOverview;