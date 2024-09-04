export interface TickerStateI {
    best_ask: string;
    best_ask_size: string;
    best_bid: string;
    best_bid_size: string;
    high_24h: string;
    last_size: string;
    low_24h: string;
    open_24h: string;
    price: string;
    product_id: string;
    sequence: number;
    side: string;
    time: string;
    trade_id: number;
    type: string;
    volume_24h: string;
    volume_30d: string;
}

export interface OrderBookStateI {
    bids: { price: string; size: string }[];
    asks: { price: string; size: string }[];
    product_id: string,
    time: string,
}

// types/websocketMessages.ts
export interface L2UpdateMessage {
    type: 'l2update';
}

export interface TickerMessage {
    type: 'ticker';
}

export type WebSocketMessage = L2UpdateMessage | TickerMessage;
