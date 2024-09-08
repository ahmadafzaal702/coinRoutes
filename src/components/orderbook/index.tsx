import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { updateAggInterval } from '../../store/features/orderbookSlice';

import AskOrder from './AskOrder';
import BidOrder from './BidOrder';

import { Select } from 'antd';

import { intervalOptions } from '../../utils/utils';

const OrderBook = () => {
    const dispatch = useDispatch();
    const orderBookData = useSelector((state: RootState) => state.orderbook);
    
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
                        value={orderBookData?.aggInterval}
                        className='mb-4'
                    />
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <AskOrder view={view} />
                <BidOrder view={view} /> 
            </div>
        </div>
    );
};

export default OrderBook;
