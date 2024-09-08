import React from 'react';
import { Select } from 'antd';
import { CurrencySelectorProps } from '../../types/interface';

import {currencyOptions} from "../../utils/utils";

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
