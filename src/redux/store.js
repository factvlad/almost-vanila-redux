import { configureStore } from "@reduxjs/toolkit";
import reducer from './rootReducer/rootReducer';

export const store = configureStore({
    reducer
})

