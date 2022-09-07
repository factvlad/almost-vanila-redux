import { combineReducers } from "redux"
import { loaderSlice } from "../loader/loaderSlice"
import { picturesSlice } from "../pictures/picturesSlice"

const rootReducer = combineReducers({
    loader: loaderSlice.reducer,
    images: picturesSlice.reducer
})

export default rootReducer