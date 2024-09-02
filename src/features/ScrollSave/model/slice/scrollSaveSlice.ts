import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaveSchema } from '../types/scrollSave';

const initialState: ScrollSaveSchema = {
  scroll: {},
};

const scrollSaveSlice = createSlice({
  name: 'scrollSave',
  initialState: initialState,
  reducers: {
    setScrollPosition: (
      state,
      { payload: { path, position } }: PayloadAction<{ path: string; position: number }>,
    ) => {
      state.scroll[path] = position;
    },
  },
});

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;
