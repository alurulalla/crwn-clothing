import React from 'react';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
} from './collection-item.styles';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={item.imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{item.name}</NameContainer>
        <PriceContainer className="price">{item.price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
