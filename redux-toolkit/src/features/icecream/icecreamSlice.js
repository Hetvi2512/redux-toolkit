import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
  numOfIceCreams: 20,
};
const icereamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  // syntax-1
  //   extraReducers: {
  //     ["cake/ordered"]: (state, action) => {
  //       state.numOfIceCreams--;
  //     },
  //   },

  // syntax-2
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCreams--;
    });
  },
});
export default icereamSlice.reducer;
export const { ordered, restocked } = icereamSlice.actions;
