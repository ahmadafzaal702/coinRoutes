import { useSelector } from "react-redux";
import {RootState} from '../../store/store'

const AskOrder = ({view}:{view:string}) => {
    const orderBookData = useSelector((state: RootState) => state.orderbook);
  return (
    <>
    <div className={`${view === 'asks' || view === 'all' ? '' : 'hidden'} h-44 mt-2`}>
                    <h3 className="mb-2 text-base text-sell">Asks</h3>
                    <ul className="list-none p-0 m-0">
                        
                        <li className="flex justify-between py-1">
                                <span className='text-white'>Price(USD)</span>
                                <span className='text-white'>Amount({orderBookData?.product_id.substring(0, 3)})</span>
                        </li>
                        
                    {orderBookData.asks?.slice(0, 3).map((ask: any, index: any) => (
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
