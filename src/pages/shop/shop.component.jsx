import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collections-overview/collections.component';
import CollectionPage from '../collection/collection.component';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.util';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');

    // fetch(
    //   'https://firestore.googleapis.com/v1/projects/crwn-db-ee3d6/databases/(default)/documents/collections'
    // )
    //   .then((res) => res.json())
    //   .then((collections) => console.log(collections));

    collectionRef.get().then(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      this.props.updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
