import { configureStore } from "@reduxjs/toolkit";
import orderbookReducer from "./features/orderbookSlice"

const store = configureStore({
    reducer: {
        orderbook: orderbookReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;