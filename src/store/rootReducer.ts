/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { combineReducers } from '@reduxjs/toolkit';

import commonSlice from './common/commonSlice';
import userSlice from './user/userSlice';
import errorScreenSlice from './errorScreen/errorScreenSlice';

const rootReducer = combineReducers({
    common: commonSlice,
    user: userSlice,
    errorScreen: errorScreenSlice,
});

export default rootReducer;
