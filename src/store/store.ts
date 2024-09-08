import { configureStore } from "@reduxjs/toolkit";
import tickerReducer from "./features/tickerSlice";
import orderbookReducer from "./features/orderbookSlice"

const store = configureStore({
    reducer: {
        ticker: tickerReducer,
        orderbook: orderbookReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;