import React from 'react';
import { Select } from 'antd';
import { CurrencySelectorProps } from '../../types/interface';

const currencyOptions = [
    { value: 'BTC-USD', label: 'BTC-USD' },
    { value: 'ETH-USD', label: 'ETH-USD' },
    { value: 'LTC-USD', label: 'LTC-USD' },
    { value: 'BCH-USD', label: 'BCH-USD' },
];

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ currency, setCurrency }) => {
    const currencyChangeHandler = (value: string) => {
        setCurrency(value);
    };

    return (
        <Select
            placeholder="Currency"
            onChange={currencyChangeHandler}
            options={currencyOptions}
            value={currency}
            className='mb-4'
        />
    );
};

export default CurrencySelector;
