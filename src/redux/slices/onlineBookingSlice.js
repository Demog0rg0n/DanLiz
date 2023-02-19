import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeServiceType: 0,
  activeService: 0,
};

const onlineBookingSlice = createSlice({
  name: 'onlineBooking',
  initialState,
  reducers: {
    setActiveService(state, { payload }) {
      state.activeService = payload;
    },
    setActiveServiceType(state, { payload }) {
      state.activeServiceType = payload;
    },
  },
});

export const { setActiveService, setActiveServiceType } = onlineBookingSlice.actions;

export default onlineBookingSlice.reducer;
