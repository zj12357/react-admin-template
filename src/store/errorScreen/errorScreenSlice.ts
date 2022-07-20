/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../';
import { ErrorScreenState, ErrorScreenType } from './types';

const initialState: ErrorScreenState = {
    type: null,
};

export const errorScreenSlice = createSlice({
    name: 'errorScreen',
    initialState,
    reducers: {
        showErrorScreen: (state, action: PayloadAction<ErrorScreenType>) => {
            state.type = action.payload;
        },
        hideErrorScreen: (state) => {
            state.type = null;
        },
    },
});
export const { showErrorScreen, hideErrorScreen } = errorScreenSlice.actions;

export const selectErrorScreen = (state: RootState) => state.errorScreen;

export default errorScreenSlice.reducer;
