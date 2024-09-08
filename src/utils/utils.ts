import { OrderBookEntryI } from "../types/interface";

export const intervalOptions = [
    { value: 0.01, label: '0.01' },
    { value: 0.05, label: '0.05' },
    { value: 0.10, label: '0.10' },
];

export const currencyOptions = [
    { value: 'BTC-USD', label: 'BTC-USD' },
    { value: 'ETH-USD', label: 'ETH-USD' },
    { value: 'LTC-USD', label: 'LTC-USD' },
    { value: 'BCH-USD', label: 'BCH-USD' },
];


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

