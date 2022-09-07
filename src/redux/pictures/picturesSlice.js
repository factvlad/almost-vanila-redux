import { createSlice } from "@reduxjs/toolkit"
// import { initPicturesAction, addPicturesAction } from "./picteresActions"


export const picturesSlice = createSlice({
    name: "pictures",
    initialState: { images: [1] },
    reducers: {
        initPicturesAction: (state, actions) => {
            state.images = actions.payload
        },
        addPicturesAction: (state, actions) => {
            return { images: [...state.images, ...actions.payload] }
        }
    }
})

// export const { initPicturesAction, addPicturesAction } = picturesSlice.actions
