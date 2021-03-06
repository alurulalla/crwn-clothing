import ShopActionTypes from './shop.types';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.util';

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

// export const fetchCollectionsStartAsync = () => {
//   return (dispatch) => {
//     const collectionRef = firestore.collection('collections');
//     dispatch(fetchCollectionStart());

//     collectionRef
//       .get()
//       .then(async (snapshot) => {
//         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//         // this.props.updateCollections(collectionsMap);
//         dispatch(fetchCollectionSuccess(collectionsMap));
//         // this.setState({ loading: false });
//       })
//       .catch((error) => dispatch(fetchCollectionFailure(error.message)));
//   };
// };
