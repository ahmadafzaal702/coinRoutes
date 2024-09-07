import { OrderBookEntryI } from "../types/interface";

export const aggregateOrderBook = (orderBook: OrderBookEntryI[], aggValue: number) => {
    const aggregatedOrders: any = {};
    
    if (orderBook) {
        orderBook.forEach((order) => {
            const price = order.price;
            const size = order.size;

            if (size === 0) {
                return
            }

            const roundedPrice = Math.floor(price / aggValue) * aggValue;

            if (aggregatedOrders[roundedPrice]) {
                aggregatedOrders[roundedPrice] += size;
            } else {
                aggregatedOrders[roundedPrice] = size;
            }
        });

        return Object.entries(aggregatedOrders).map(([price, size]: any) => ({
            price: parseFloat(price).toFixed(2),
            size: parseFloat(size).toFixed(8)
        }));
    }
}