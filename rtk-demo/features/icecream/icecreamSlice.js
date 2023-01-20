const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

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
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams--;
    });
  },
});
module.exports = icereamSlice.reducer;
module.exports.icecreamActions = icereamSlice.actions;
