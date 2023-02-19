import { configureStore } from '@reduxjs/toolkit';

import onlineBookingSlice from './slices/onlineBookingSlice';
import requestCallPopupSlice from './slices/requestCallPopupSlice';

export const store = configureStore({
  reducer: {
    onlineBookingSlice,
    requestCallPopupSlice,
  },
});

export default store;
