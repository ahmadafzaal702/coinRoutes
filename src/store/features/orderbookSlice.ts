import { createSlice } from "@reduxjs/toolkit";
import { OrderBookStateI } from '../../types/interface';


const initialOrderBookState: OrderBookStateI = {
    bids: [],
    asks: [],
    product_id: "",
    time: "",
}

const orderbookSlice = createSlice({
    name: 'orderbook',
    initialState: initialOrderBookState,
    reducers: {
        updateOrderBook: (state, action) => {
            const { changes, product_id, time } = action.payload;

            if (changes.length > 5) {
                const newBids = changes
                    .filter(([side]: any) => side === 'buy')
                    .map(([side, price, size]: any) => ({ price, size }));
                const newAsks = changes
                    .filter(([side]: any) => side === 'sell')
                    .map(([side, price, size]: any) => ({ price, size }));

                state.bids = newBids;
                state.asks = newAsks;
                state.product_id = product_id;
                state.time = time;
            }
        }
    }
});

export const { updateOrderBook } = orderbookSlice.actions;
export default orderbookSlice.reducer;



