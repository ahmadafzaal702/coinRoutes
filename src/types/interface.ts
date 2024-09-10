export interface TickerStateI {
    best_ask?: string;
    best_ask_size?: string;
    best_bid?: string;
    best_bid_size?: string;
    high_24h?: string;
    last_size?: string;
    low_24h?: string;
    open_24h?: string;
    price?: string;
    product_id?: string;
    sequence?: number;
    side?: string;
    time?: string;
    trade_id?: number;
    type?: string;
    volume_24h?: string;
    volume_30d?: string;
}

// orderbook state interface
export interface OrderBookStateI {
    bids: OrderBookEntryI[] | undefined;
    asks: OrderBookEntryI[] | undefined;
    product_id: string | undefined;
    time: string | undefined;
    aggInterval: number,
    tickerList: TickerStateI,
}

// orderbook entry interface (bids and asks)
export interface OrderBookEntryI {
    side?: string;
    price: number;
    size: number;
}

export interface OrderBookPayloadI {
    type: string;
    product_id: string;
    time: string;
    changes: [string, string, string][]
}

export interface CurrencySelectorProps {
    currency: string;
    setCurrency: (currency: string) => void;
}


export interface L2UpdateMessage {
    type: 'l2update';
}

export interface TickerMessage {
    type: 'ticker';
}

export type WebSocketMessage = L2UpdateMessage | TickerMessage;


export interface IcardProps {
    title: string,
    price?: string,
    quantity?: string,
    bgColor: string,
}
