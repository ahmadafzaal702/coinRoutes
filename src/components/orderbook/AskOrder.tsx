import { useSelector } from "react-redux";
import { RootState } from '../../store/store';
import { OrderBookEntryI } from "../../types/interface";

const AskOrder = ({ view }: { view: string }) => {
    const orderBookData = useSelector((state: RootState) => state.orderbook);
    return (
        <>
            <div className={`${view === 'asks' || view === 'all' ? '' : 'hidden'} h-48 mt-2`}>
                <h3 className="mb-2 text-base text-sell">Asks</h3>
                <ul className="list-none p-0 m-0">

                    <li className="flex justify-between py-1 text-sm">
                        <span className='text-white'>Price(USD)</span>
                        <span className='text-white'>Amount({orderBookData?.product_id?.substring(0, 3) ?? ''})</span>
                    </li>

                    {orderBookData.asks?.slice(0, 4).map((ask: OrderBookEntryI, index: number) => (
                        <li key={index} className="flex justify-between py-1">
                            <span className="text-sell">{ask.price}</span>
                            <span className="text-sm text-white">{ask.size}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default AskOrder;
