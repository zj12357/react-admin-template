/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../';
import { UserState } from './types';
import authToken from '@/common/token';

const initialState: UserState = {
    token: authToken.getToken() ?? '',
    status: 'loading',
};

export const userAsync = createAsyncThunk('user/fetchUser', async () => {
    const response = await Promise.resolve('token');

    return response;
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginOut: (state: UserState) => {
            state.token = '';
            state.status = 'failed';
            authToken.clearToken();
        },
        login: (state: UserState) => {
            state.token = 'token';
            state.status = 'success';
            authToken.setToken('token');
        },
    },
    //extraReducers 处理接口状态，一般是列表加载，loading状态获取，加载成功，加载失败
    extraReducers: (builder) => {
        builder
            .addCase(userAsync.pending, (state: UserState) => {
                state.status = 'loading';
            })
            .addCase(
                userAsync.fulfilled,
                (state: UserState, action: PayloadAction<string>) => {
                    state.status = 'success';
                    state.token = action.payload;
                    authToken.setToken(action.payload);
                },
            )
            .addCase(userAsync.rejected, (state: UserState) => {
                state.status = 'failed';
                state.token = null;
            });
    },
});

export const { loginOut, login } = userSlice.actions;

export const selectToken = (state: RootState) => state.user.token;
export const selectStatus = (state: RootState) => state.user.status;

export default userSlice.reducer;
