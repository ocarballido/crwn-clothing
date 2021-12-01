import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'

import { updatedCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPagewWithSpinner = WithSpinner(CollectionsOverview);

class ShopPage extends React.Component {
	state = {
		loadding: true
	};
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updatedCollections } = this.props;
		const collectionRef = firestore.collection('collections');
		collectionRef.get().then(snapshot => {
			const collectionsMap = convertCollectionSnapshotToMap(snapshot);
			updatedCollections(collectionsMap);
			this.setState({loadding: false});
		});
	}

	render() {
		const { match } = this.props;
		const { loadding } = this.state;
		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} render={(props) =>  <CollectionsOverviewWithSpinner isLoading={loadding} {...props} />} />
				<Route path={`${match.path}/:collectionId`} render={(props) =>  <CollectionPagewWithSpinner isLoading={loadding} {...props} />} />
			</div>
		);
	}
};

const mapDispatchToProps = dispatch => ({
	updatedCollections: collectionsMap => dispatch(updatedCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);