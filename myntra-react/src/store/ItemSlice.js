import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/DEFAULT_items";
import { act } from "react";
//   initialState: DEFAULT_ITEMS,

const ItemSlice = createSlice({
  name: "Item Slice",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const { addInitialItems } = ItemSlice.actions;
export default ItemSlice;
