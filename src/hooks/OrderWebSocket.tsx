import { useEffect, useCallback } from 'react';
import useWebSocket from 'react-use-websocket';
import { WebSocketMessage } from '../types/interface';

import { useDispatch } from 'react-redux';
import { updateTicker } from '../store/features/tickerSlice';
import { updateOrderBook } from '../store/features/orderbookSlice';

const useOrderWebSocket = (currency: string) => {
    const dispatch = useDispatch()
    const socketUrl = 'wss://ws-feed.exchange.coinbase.com';

    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(socketUrl, {
        onOpen: () => {
            console.log('WebSocket connection opened');
        },
        shouldReconnect: (closeEvent) => true,
    });

    const subscribeMessage = useCallback((selectedCurrency: string, sub = true) => ({
        type: sub ? 'subscribe' : 'unsubscribe',
        product_ids: [selectedCurrency],
        channels: ['level2_batch', 'ticker']
    }), []);

    const subscribeOrderBook = useCallback((currency: string) => {
        sendJsonMessage(subscribeMessage(currency));
    }, [sendJsonMessage, subscribeMessage]);

    const unSubscribeOrderBook = useCallback((currency: string) => {
        sendJsonMessage(subscribeMessage(currency, false));
    }, [sendJsonMessage, subscribeMessage]);

    useEffect(() => {
        subscribeOrderBook(currency);

        return () => {
            unSubscribeOrderBook(currency);
        };
    }, [currency]);

    useEffect(() => {
        if (lastJsonMessage) {
            const message = lastJsonMessage as WebSocketMessage;
            if (message.type === 'l2update') {
                // console.log('L2 Update:', message);
                dispatch(updateOrderBook(message));
            } else if (message.type === 'ticker') {
                dispatch(updateTicker(message));
            }
        }
    }, [lastJsonMessage, dispatch]);

    return { subscribeOrderBook, unSubscribeOrderBook };
};

export default useOrderWebSocket;
