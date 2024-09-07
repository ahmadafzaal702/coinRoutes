import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TickerStateI } from '../../types/interface';

const initialTickerState: TickerStateI = {
    best_ask: "",
    best_ask_size: "",
    best_bid: "",
    best_bid_size: "",
    high_24h: "",
    last_size: "",
    low_24h: "",
    open_24h: "",
    price: "",
    product_id: "",
    sequence: 0,
    side: "",
    time: "",
    trade_id: 0,
    type: "",
    volume_24h: "",
    volume_30d: "",
};

const tickerSlice = createSlice({
    name: 'ticker',
    initialState: initialTickerState,
    reducers: {
        updateTicker: (state, action: PayloadAction<Partial<TickerStateI>>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { updateTicker } = tickerSlice.actions;

export default tickerSlice.reducer;

export type TickerActions = typeof tickerSlice.actions;
export type TickerReducer = typeof tickerSlice.reducer;
