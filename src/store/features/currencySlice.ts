import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedCurrency: 'BTC-USD',
};

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        changeCurrency: (state, action) => {
            state.selectedCurrency = action.payload;
        },
    },
});

export const { changeCurrency } = currencySlice.actions;
export default currencySlice.reducer;
