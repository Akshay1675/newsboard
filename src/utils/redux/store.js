import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice"
import newsReducer from "./newsSlice"
import searchReducer from "./searchSlice"

 const store = configureStore({
    reducer: {
        app: appReducer,
        news: newsReducer,
        search: searchReducer,
    }
})

export default store