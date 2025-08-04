import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DynamicConfigState {
  [componentId: string]: {
    [key: string]: any;
  };
}

const initialState: DynamicConfigState = {};

const dynamicConfigSlice = createSlice({
  name: "dynamicConfig",
  initialState,
  reducers: {
    setComponentConfig: (
      state,
      action: PayloadAction<{
        id: string;
        config: Record<string, any>;
      }>
    ) => {
      state[action.payload.id] = {
        ...(state[action.payload.id] || {}),
        ...action.payload.config,
      };
    },

    clearComponentConfig: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
  },
});

export const { setComponentConfig, clearComponentConfig } = dynamicConfigSlice.actions;
export default dynamicConfigSlice.reducer;
