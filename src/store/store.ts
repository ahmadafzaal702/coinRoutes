import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./features/currencySlice";
import tickerReducer from "./features/tickerSlice";
import orderbookReducer from "./features/orderbookSlice"

const store = configureStore({
    reducer: {
        currency: currencyReducer,
        ticker: tickerReducer,
        orderbook: orderbookReducer,
    }
});

export default store;