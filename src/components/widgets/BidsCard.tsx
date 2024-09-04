interface IcardProps {
    title: string,
    price: string,
    quantity: string,
    bgColor: string,
}

const BidsCard: React.FC<IcardProps> = ({ title, price, quantity, bgColor }) => {
    return (
        <>
            <div className="w-full overflow-hidden">
                <div className={`p-2 ${bgColor}`}>
                    <h3 className="text-sm text-white">{title}</h3>
                </div>
                <div className="flex justify-between items-center gap-4 p-2 border-[1px] border-grey border-opacity-20">
                    <div>
                        <strong>{price}</strong>
                        <br />
                        <span className="text-sm ">Price</span>
                    </div>
                    <div>
                        <strong>{quantity}</strong>
                        <br />
                        <span className="text-sm">Quantity</span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default BidsCard;