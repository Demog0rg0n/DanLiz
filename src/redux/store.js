import { configureStore } from '@reduxjs/toolkit';

import onlineBookingSlice from './slices/onlineBookingSlice';
import popupSlice from './slices/popupSlice';

export const store = configureStore({
  reducer: {
    onlineBookingSlice,
    popupSlice,
  },
});

export default store;
