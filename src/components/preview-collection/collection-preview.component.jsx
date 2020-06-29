import React from 'react';
import { withRouter } from 'react-router-dom';

import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = (props) => {
  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() =>
          props.history.push(`${props.match.path}/${props.routeName}`)
        }
      >
        {props.title.toUpperCase()}
      </h1>
      <div className="preview">
        {props.items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
