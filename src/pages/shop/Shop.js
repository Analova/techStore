import React from "react";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";

import CollectionPreviw from "../../components/collection-preview/CollectionPreview";

const Shop = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreviw key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToPorps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToPorps)(Shop);
