import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', name: 'Walmart', amount: '$45.67', date: '2024-07-21' },
  { id: '2', name: 'Amazon', amount: '$99.99', date: '2024-07-20' },
  { id: '3', name: 'Best Buy', amount: '$300.00', date: '2024-07-19' },
  { id: '4', name: 'Target', amount: '$78.50', date: '2024-07-18' },
  { id: '5', name: 'McDonald\'s', amount: '$5.50', date: '2024-07-17' },
  { id: '6', name: 'Apple', amount: '$200.00', date: '2024-07-16' },
  { id: '7', name: 'Home Depot', amount: '$125.75', date: '2024-07-15' },
  { id: '8', name: 'Starbucks', amount: '$22.00', date: '2024-07-14' },
  { id: '9', name: 'Netflix', amount: '$12.99', date: '2024-07-13' },
  { id: '10', name: 'Uber', amount: '$50.00', date: '2024-07-12' },
];

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
