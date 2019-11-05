import { createSelector } from "reselect";

const COLLECTTION_ID_MAP = {
  computers: 1,
  phones: 2,
  drones: 3,
  headphones: 4,
  watches: 5
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections =>
      collections.find(
        collection => collection.id === COLLECTTION_ID_MAP[collectionUrlParam]
      )
  );
