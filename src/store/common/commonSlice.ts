/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getConfig } from '@/api/config';
import { CommonState } from './types';

const initialState: CommonState = {
    config: '',
};

export const commonAsync = createAsyncThunk('common/fetchConfig', async () => {
    const response = await getConfig();
    return '';
});

export const commonSlice = createSlice({
    name: 'common',
    initialState,

    reducers: {},

    //extraReducers 处理接口状态，一般是列表加载，loading状态获取，加载成功，加载失败
    extraReducers: (builder) => {
        builder
            .addCase(commonAsync.pending, (state) => {})
            .addCase(
                commonAsync.fulfilled,
                (state: CommonState, action: PayloadAction<string>) => {
                    state.config = action.payload ?? '';
                },
            )
            .addCase(commonAsync.rejected, (state, action) => {});
    },
});

export const selectConfig = (state: RootState) => state.common.config;

export default commonSlice.reducer;
