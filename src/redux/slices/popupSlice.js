import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requestCallPopupState: false,
  servicePopupState: false,
  activeServicePopup: 0,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    closeRequestCallPopup(state) {
      state.requestCallPopupState = false;
    },
    openRequestCallPopup(state) {
      state.requestCallPopupState = true;
    },
    openServicePopup(state, { payload }) {
      state.servicePopupState = true;
      state.activeServicePopup = payload;
    },
    closeServicePopup(state) {
      state.servicePopupState = false;
    },
  },
});

export const { closeRequestCallPopup, openRequestCallPopup, openServicePopup, closeServicePopup } =
  popupSlice.actions;

export default popupSlice.reducer;
