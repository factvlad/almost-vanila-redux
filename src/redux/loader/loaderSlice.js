import { createSlice } from "@reduxjs/toolkit"


export const loaderSlice = createSlice({
    name: "loader",
    initialState: { bool: false },
    reducers: {
        onLoader: (state) => {
            state.bool = true
        },
        offLoader: (state) => {
            state.bool = false
        }
    }
})