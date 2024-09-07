import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderBookStateI, OrderBookPayloadI } from '../../types/interface';
import { aggregateOrderBook } from "../../utils/utils";

const initialOrderBookState: OrderBookStateI = {
    bids: [],
    asks: [],
    product_id: "",
    time: "",
    aggInterval: 0.01,
}

const orderbookSlice = createSlice({
    name: 'orderbook',
    initialState: initialOrderBookState,
    reducers: {
        updateOrderBook: (state, action: PayloadAction<Partial<OrderBookPayloadI>>) => {
            const { changes, product_id, time } = action.payload;

            if (changes && changes.length > 0) {
                const newBids = changes
                    .filter(([side]) => side === 'buy')
                    .map(([side, price, size]) => (
                        {
                            side,
                            price: parseFloat(price),
                            size: parseFloat(size)
                        }));
                const newAsks = changes
                    .filter(([side]) => side === 'sell')
                    .map(([side, price, size]) => (
                        {
                            side,
                            price: parseFloat(price),
                            size: parseFloat(size)
                        }
                    ));

                const aggregatedBidData = aggregateOrderBook(newBids, state.aggInterval);
                const formatedAggregatedBidData = aggregatedBidData?.map(order => ({
                    side:'buy',
                    price: parseFloat(order.price),
                    size: parseFloat(order.size)
                  }));

                const aggregatedAskData = aggregateOrderBook(newAsks, state.aggInterval);
                const formatedAggregatedAskData = aggregatedAskData?.map(order => ({
                    side:'sell',
                    price: parseFloat(order.price),
                    size: parseFloat(order.size)
                  }));

                state.bids = formatedAggregatedBidData;
                state.asks = formatedAggregatedAskData;
                state.product_id = product_id;
                state.time = time;
            }
        },

        updateAggInterval: (state, action: PayloadAction<number>) => {
            state.aggInterval = action.payload;
        }
    }
});

export const { updateOrderBook, updateAggInterval } = orderbookSlice.actions;
export default orderbookSlice.reducer;



