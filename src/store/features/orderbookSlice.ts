import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderBookStateI, OrderBookPayloadI, TickerStateI } from '../../types/interface';
import { aggregateOrderBook, filterL2BidsAsks, prepareL2BidsAsks } from "../../utils/utils";

const initialOrderBookState: OrderBookStateI = {
    bids: [],
    asks: [],
    product_id: "",
    time: "",
    aggInterval: 0.01,
    tickerList: {
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
    }
}

const orderbookSlice = createSlice({
    name: 'orderbook',
    initialState: initialOrderBookState,
    reducers: {
        updateOrderBook: (state, action: PayloadAction<Partial<OrderBookPayloadI>>) => {
            if (action.payload) {

                const { changes, product_id, time } = action.payload;

                if (changes && changes.length > 0) {

                    // ['side', 'price', 'size']
                    const filterBidsOnly = filterL2BidsAsks(changes, "buy");
                    const filterAsksOnly = filterL2BidsAsks(changes, "sell");

                    // {side:'buy', price:56890.5, size:0.21457385}
                    const prepareBidsData = prepareL2BidsAsks(filterBidsOnly);
                    const prepareAsksData = prepareL2BidsAsks(filterAsksOnly)

                    // {side:'buy', price:56890.5, size:0.21457385}
                    const aggregatedBidData = aggregateOrderBook(prepareBidsData, state.aggInterval);
                    const aggregatedAskData = aggregateOrderBook(prepareAsksData, state.aggInterval);

                    if (aggregatedBidData.length > 0) {
                        state.bids = aggregatedBidData;
                    }

                    if (aggregatedAskData.length > 0) {
                        state.asks = aggregatedAskData;
                    }

                    state.product_id = product_id;
                    state.time = time;
                }

            }
        },

        updateAggInterval: (state, action: PayloadAction<number>) => {
            if (action.payload) {
                state.aggInterval = action.payload;
            }
        },

        setTickers: (state, action: PayloadAction<Partial<TickerStateI>>) => {
            if (action.payload != null) {
                state.tickerList = action.payload;
            }
        }
    }
});

export const { updateOrderBook, updateAggInterval, setTickers } = orderbookSlice.actions;
export default orderbookSlice.reducer;
