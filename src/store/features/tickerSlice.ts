import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TickerStateI } from '../../types/interface';

const initialTickerState: TickerStateI = {
    best_ask: "56759.49",
    best_ask_size: "0.00776262",
    best_bid: "56759.48",
    best_bid_size: "0.11127350",
    high_24h: "59359.16",
    last_size: "0.0185503",
    low_24h: "55555",
    open_24h: "59097.99",
    price: "56759.48",
    product_id: "BTC-USD",
    sequence: 87189779396,
    side: "sell",
    time: "2024-09-04T07:48:49.800630Z",
    trade_id: 688117921,
    type: "ticker",
    volume_24h: "11019.91786318",
    volume_30d: "288048.56448955",
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
