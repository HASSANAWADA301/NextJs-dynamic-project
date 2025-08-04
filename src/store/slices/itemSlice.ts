// src/store/slices/itemSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Item = {
  id: number;
  title: string;
  description: string;
};

type ItemState = {
  selectedItem: Item | null;
};

const initialState: ItemState = {
  selectedItem: null,
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setSelectedItem(state, action: PayloadAction<Item>) {
      state.selectedItem = action.payload;
    },
  },
});

export const { setSelectedItem } = itemSlice.actions;
export default itemSlice.reducer;
