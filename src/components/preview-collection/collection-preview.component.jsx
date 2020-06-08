import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = (props) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title}</h1>
      <div className="preview">
        {props.items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return (
              <CollectionItem
                key={item.id}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
