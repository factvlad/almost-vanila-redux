import { configureStore } from "@reduxjs/toolkit";
import { picturesSlice } from "./pictures/picturesSlice";

export const store = configureStore({
    reducer: picturesSlice.reducer ,
})

