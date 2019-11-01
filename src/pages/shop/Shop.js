import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreviw from "../../components/collection-preview/CollectionPreview";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreviw key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default Shop;
