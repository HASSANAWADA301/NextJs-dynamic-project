import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SectionItem {
  id: string;
  type: string;
  translations: {
    [lang: string]: any;
  };
  [key: string]: any;
}

interface SectionContentState {
  data: Record<string, SectionItem>;
}

const initialState: SectionContentState = {
  data: {},
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    // Replace the entire content
    setAllSections: (state, action: PayloadAction<Record<string, SectionItem>>) => {
      state.data = action.payload;
    },

    // Set or update one section
    setSectionContent: (state, action: PayloadAction<SectionItem>) => {
      const item = action.payload;
      state.data[item.id] = item;
    },

    // Remove a section
    clearSectionContent: (state, action: PayloadAction<string>) => {
      delete state.data[action.payload];
    },
  },
});

export const {
  setAllSections,
  setSectionContent,
  clearSectionContent,
} = contentSlice.actions;

export default contentSlice.reducer;
