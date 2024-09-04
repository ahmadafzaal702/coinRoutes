import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { OrderBook, TradingViewChart, BidsCard, CurrencySelector } from '../components';
import useOrderWebSocket from '../hooks/OrderWebSocket';

const Home: React.FC = () => {
    const [currency, setCurrency] = useState<string>('BTC-USD');
    const tickerState = useSelector((state: any) => state.ticker);

    const { subscribeOrderBook, unSubscribeOrderBook } = useOrderWebSocket(currency);

    useEffect(() => {
        // Subscribe to the new currency
        subscribeOrderBook(currency);

        // Unsubscribe from the old currency when the component unmounts or currency changes
        return () => {
            unSubscribeOrderBook(currency);
        };
    }, [currency, subscribeOrderBook, unSubscribeOrderBook]);

    return (
        <div className={`flex justify-between gap-2 p-4 min-h-screen`}>
            <div className={`basis-1/5`}>
                <OrderBook />
            </div>

            <div className={`basis-3/5 flex flex-col gap-2`}>
                <TradingViewChart currency={currency} />
                <div>will show the graph here</div>
            </div>

            <div className={`basis-1/5 flex flex-col gap-4 border-[1px] border-grey border-opacity-20 p-4`}>
                <div>
                    <CurrencySelector currency={currency} setCurrency={setCurrency} />
                </div>
                <div className={`flex flex-col gap-4`}>
                    <BidsCard title="Best Bid" price={tickerState.best_bid} quantity={tickerState.best_bid_size} bgColor="bg-buy" />
                    <BidsCard title="Best Ask" price={tickerState.best_ask} quantity={tickerState.best_ask_size} bgColor="bg-sell" />
                </div>
            </div>
        </div>
    );
};

export default Home;
