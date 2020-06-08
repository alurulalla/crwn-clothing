import React from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map((col) => {
          return (
            <CollectionPreview
              key={col.id}
              title={col.title}
              id={col.id}
              name={col.name}
              items={col.items}
            />
          );
        })}
      </div>
    );
  }
}

export default Shop;
