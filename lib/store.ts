import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './features/bookingSlice'; // Adjust the path as necessary

export const makeStore = () => {
    return configureStore({
        reducer: {
            booking: bookingReducer,
        },
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];