import { useState } from 'react';
import { useSelector } from 'react-redux';

// import { defaultModeButton, buyModeButton, sellModeButton } from '../../assets/icons/icons';

const OrderBook = () => {
    const orderBookData = useSelector((state: any) => state.orderbook);

    // const dummyAsks = [
    //     { price: '50000', size: '0.5' },
    //     { price: '50010', size: '1.2' },
    //     { price: '50020', size: '0.8' },
    //     { price: '50020', size: '0.8' },
    //     { price: '50020', size: '0.8' },
    // ];

    // const dummyBids = [
    //     { price: '49990', size: '0.3' },
    //     { price: '49980', size: '0.7' },
    //     { price: '49970', size: '2.0' },
    //     { price: '49970', size: '2.0' },
    //     { price: '49970', size: '2.0' },
    // ];

    const [view, setView] = useState('all');

    // const filteredAsks = view !== 'bids' ? dummyAsks : [];
    // const filteredBids = view !== 'asks' ? dummyBids : [];

    return (
        <div className="w-full h-full p-4 border-[1px] border-grey border-opacity-20">
            <h2 className='text-lg'>Order Book</h2>

            <div className='flex justify-between items-center mt-2'>
                <div className="flex gap-2">
                    <button
                        className={`transition-colors duration-300 ${view === 'all' ? 'text-green-light' : ''}`}
                        onClick={() => setView('all')}
                    >
                        All
                    </button>
                    <button
                        className={`transition-colors duration-300 ${view === 'asks' ? 'text-green-light' : ''}`}
                        onClick={() => setView('asks')}
                    >
                        Asks
                    </button>
                    <button
                        className={`transition-colors duration-300 ${view === 'bids' ? 'text-green-light' : ''}`}
                        onClick={() => setView('bids')}
                    >
                        Bids
                    </button>
                </div>
                <div>dropdown</div>
            </div>



            <div className="flex flex-col gap-5">
                {/* Asks Section */}
                <div className={`${view === 'asks' || view === 'all' ? '' : 'hidden'} h-36 mt-2`}>
                    <h3 className="mb-2 text-base text-sell">Asks</h3>
                    <ul className="list-none p-0 m-0">
                        {orderBookData.asks?.slice(0, 3).map((ask: any, index: any) => (
                            <li key={index} className="flex justify-between py-1">
                                <span className="text-sell">{ask.price}</span>
                                <span className="text-sm text-white">{ask.size}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bids Section */}
                <div className={`${view === 'bids' || view === 'all' ? '' : 'hidden'} h-36 mt-2`}>
                    <h3 className="mb-2 text-base text-buy">Bids</h3>
                    <ul className="list-none p-0 m-0">
                        {orderBookData.asks?.slice(0, 3).map((bid: any, index: any) => (
                            <li key={index} className="flex justify-between py-1">
                                <span className="text-buy">{bid.price}</span>
                                <span className="text-sm text-white">{bid.size}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OrderBook;
