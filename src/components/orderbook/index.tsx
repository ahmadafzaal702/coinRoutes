import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { updateAggInterval } from '../../store/features/orderbookSlice';

import { Select } from 'antd';

// import { defaultModeButton, buyModeButton, sellModeButton } from '../../assets/icons/icons';

const intervalOptions = [
    { value: 0.01, label: '0.01' },
    { value: 0.05, label: '0.05' },
    { value: 0.10, label: '0.10' },
];

const OrderBook = () => {
    const dispatch = useDispatch();
    const aggIntervalValue = useSelector((state: any) => state.orderbook.aggInterval);
    const orderBookData = useSelector((state: any) => state.orderbook);
    const [view, setView] = useState('all');

    const IntervalChangeHandler = (value: number) => {
        dispatch(updateAggInterval(value));
    };

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
                <div>
                    <Select
                        placeholder="Currency"
                        onChange={IntervalChangeHandler}
                        options={intervalOptions}
                        value={aggIntervalValue}
                        className='mb-4'
                    />
                </div>
            </div>



            <div className="flex flex-col gap-5">
                {/* Asks Section */}
                <div className={`${view === 'asks' || view === 'all' ? '' : 'hidden'} h-44 mt-2`}>
                    <h3 className="mb-2 text-base text-sell">Asks</h3>
                    <ul className="list-none p-0 m-0">
                        
                        <li className="flex justify-between py-1">
                                <span className='text-white'>Price(USD)</span>
                                <span className='text-white'>Amount({orderBookData?.product_id.substring(0, 3)})</span>
                        </li>
                        
                        {orderBookData.asks?.slice(0, 4).map((ask: any, index: any) => (
                            <li key={index} className="flex justify-between py-1">
                                <span className="text-sell">{ask.price}</span>
                                <span className="text-sm text-white">{ask.size}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bids Section */}
                <div className={`${view === 'bids' || view === 'all' ? '' : 'hidden'} h-44 mt-2`}>
                    <h3 className="mb-2 text-base text-buy">Bids</h3>
                    <ul className="list-none p-0 m-0">
                    <li className="flex justify-between py-1">
                                <span className='text-white'>Price(USD)</span>
                                <span className='text-white'>Amount({orderBookData?.product_id.substring(0, 3)})</span>
                    </li>
                        {orderBookData.asks?.slice(0, 4).map((bid: any, index: any) => (
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
