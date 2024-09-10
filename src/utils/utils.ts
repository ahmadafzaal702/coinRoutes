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


export const filterL2BidsAsks = (changes: [string, string, string][], side: string) => {
    return changes.filter((item) => {
        return (
            item[0] === side && parseFloat(item[2]) !== 0
        );
    });
}

export const prepareL2BidsAsks = (filterData: [string, string, string][]) => {
    return filterData?.map(([side, price, size]) => {
        return {
            side,
            price: parseFloat(price),
            size: parseFloat(size)
        }
    });
}


export const aggregateOrderBook = (orderBook: OrderBookEntryI[], aggValue: number) => {
    const groupedOrders: { [key: number]: OrderBookEntryI } = {}

    orderBook.forEach((order) => {
        const price = order.price;
        const size = order.size;
        
        const roundPrice = Math.floor(price / aggValue) * aggValue;
        
        if (groupedOrders[roundPrice]) {
            groupedOrders[roundPrice].size += size;
        } else {
            groupedOrders[roundPrice] = { ...order, price: roundPrice };
        }
    });

    
    return Object.values(groupedOrders).map((order: any) => {
        return {
            side: order.side,
            price: parseFloat(order.price.toFixed(2)), 
            size: parseFloat(order.size.toFixed(8)),  
        }
    });
}
