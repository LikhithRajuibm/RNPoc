import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

const cartSlice = createSlice({
  name: 'Cart',
  initialState: [],
  reducers: {
    addItem: (state: any, action: any) => {
      if (!state?.some((item: any) => item.id === action.payload.id)) {
        state.push(action.payload);
        Alert.alert('Item Successfully Added into Cart');
      } else {
        Alert.alert('Item Already Exists.');
      }
    },
    removeItem: (state: any, action: any) => {
      const productId = action.payload;
      return state.filter((item: any) => item.id !== productId);
    },
  },
});

export const {addItem, removeItem} = cartSlice.actions;

export default cartSlice.reducer;
