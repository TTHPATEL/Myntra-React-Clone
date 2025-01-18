import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./ItemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import BagSlice from "./BagSlice";

const MyntraStore = configureStore({
  reducer: {
    items: ItemSlice.reducer,
    fetchStatusSlice: fetchStatusSlice.reducer,
    BagSlice: BagSlice.reducer,
  },
});
export default MyntraStore;
