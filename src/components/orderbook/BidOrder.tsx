import { useSelector } from "react-redux";
import {RootState} from '../../store/store'

const BidOrder = ({view}:{view:string}) => {
    const orderBookData = useSelector((state: RootState) => state.orderbook);
  return (

    <>
    <div className={`${view === 'bids' || view === 'all' ? '' : 'hidden'} h-44 mt-2`}>
                    <h3 className="mb-2 text-base text-buy">Bids</h3>
                    <ul className="list-none p-0 m-0">
                    <li className="flex justify-between py-1">
                                <span className='text-white'>Price(USD)</span>
                                <span className='text-white'>Amount({orderBookData?.product_id.substring(0, 3)})</span>
                    </li>
                        {orderBookData.asks?.slice(0, 3).map((bid: any, index: any) => (
                            <li key={index} className="flex justify-between py-1">
                                <span className="text-buy">{bid.price}</span>
                                <span className="text-sm text-white">{bid.size}</span>
                            </li>
                        ))}
                    </ul>
                </div>
    </>
  );
};

export default BidOrder;
