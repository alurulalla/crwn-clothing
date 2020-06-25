import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map((sec) => {
      return (
        <MenuItem
          key={sec.id}
          title={sec.title}
          imageUrl={sec.imageUrl}
          size={sec.size}
          linkUrl={sec.linkUrl}
        />
      );
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
