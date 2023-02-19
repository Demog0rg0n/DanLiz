import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popupState: false,
};

const requestCallPopupSlice = createSlice({
  name: 'requestCallPopup',
  initialState,
  reducers: {
    closePopup(state) {
      state.popupState = false;
    },
    openPopup(state) {
      state.popupState = true;
    },
  },
});

export const { closePopup, openPopup } = requestCallPopupSlice.actions;

export default requestCallPopupSlice.reducer;
