import React from 'react';
import { Select } from 'antd';

const currencyOptions = [
    { value: 'BTC-USD', label: 'BTC-USD' },
    { value: 'ETH-USD', label: 'ETH-USD' },
    { value: 'LTC-USD', label: 'LTC-USD' },
    { value: 'BCH-USD', label: 'BCH-USD' },
];

interface CurrencySelectorProps {
    currency: string;
    setCurrency: (currency: string) => void;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ currency, setCurrency }) => {
    const currencyChangeHandler = (value: string) => {
        setCurrency(value);
    };

    return (
        <Select
            placeholder="Currency"
            optionFilterProp="label"
            onChange={currencyChangeHandler}
            options={currencyOptions}
            value={currency}
            className='mb-4'
        />
    );
};

export default CurrencySelector;
