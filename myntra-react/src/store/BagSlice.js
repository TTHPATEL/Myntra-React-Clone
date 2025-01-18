import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
  name: "Bag Slice",
  initialState: ["001", "004", "006"],
  reducers: {
    AddtoBag: (state, action) => {
      state.push(action.payload);
    },
    RemoveFromBag: (state, action) => {
      return state.filter((itemID) => itemID !== action.payload);
    },
  },
});

export const { AddtoBag, RemoveFromBag } = BagSlice.actions;
export default BagSlice;
