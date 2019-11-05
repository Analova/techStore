import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/CollectionPreview";
import { selectCollections } from "../../redux/shop/shop.selectors";
import "./collections-overview.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToPorps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToPorps)(CollectionsOverview);
