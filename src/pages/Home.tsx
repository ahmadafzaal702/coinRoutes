import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import useOrderWebSocket from '../hooks/OrderWebSocket';


import { OrderBook, TradingViewChart, BidsCard, CurrencySelector, } from '../components';

// Home Functional Component
const Home = () => {
    const [currency, setCurrency] = useState<string>('BTC-USD');
    const tickerState = useSelector((state: RootState) => state.ticker);

    // order book subscription and unsubscription on load and currency change
    const { subscribeOrderBook, unSubscribeOrderBook } = useOrderWebSocket(currency);

    useEffect(() => {
        subscribeOrderBook(currency);

        return () => {
            unSubscribeOrderBook(currency);
        };
    }, [currency, subscribeOrderBook, unSubscribeOrderBook]);


    // Home FC Return
    return (
        <div className={`flex flex-col-reverse md:flex-row justify-between gap-2 p-4 min-h-screen h-full`}>
            <div className={`basis-1/5`}>
                <OrderBook />
            </div>

            <div className={`basis-3/5 flex flex-col gap-2`}>
                <TradingViewChart currency={currency} />
                {/* <ChartWidget /> */}
            </div>

            <div className={`basis-1/5 flex flex-col gap-4 border-[1px] border-grey border-opacity-20 p-4`}>
                <div>
                    <CurrencySelector currency={currency} setCurrency={setCurrency} />
                </div>
                <div className={`flex flex-col gap-4`}>
                    <BidsCard title="Best Bid" price={tickerState?.best_bid} quantity={tickerState?.best_bid_size} bgColor="bg-buy" />
                    <BidsCard title="Best Ask" price={tickerState?.best_ask} quantity={tickerState?.best_ask_size} bgColor="bg-sell" />
                </div>
            </div>
        </div>
    );
};

export default Home;
