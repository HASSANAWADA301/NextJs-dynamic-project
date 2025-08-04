import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SectionItem {
  id: string;
  type: string;
  translations: {
    [lang: string]: any;
  };
}

interface SectionContentState {
  data: SectionItem[]; 
  loadedSections: Record<string, any>;
}

const initialState: SectionContentState = {
  data: [],
  loadedSections: {},
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    
    setAllSections: (state, action: PayloadAction<SectionItem[]>) => {
      state.data = action.payload;
    },

   
    setSectionContent: (state, action: PayloadAction<{ id: string; content: any }>) => {
      state.loadedSections[action.payload.id] = action.payload.content;
    },

    
    clearSectionContent: (state, action: PayloadAction<string>) => {
      delete state.loadedSections[action.payload];
    },
  },
});

export const {
  setAllSections,
  setSectionContent,
  clearSectionContent,
} = contentSlice.actions;

export default contentSlice.reducer;
