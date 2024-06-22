import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        category: "general",
    },
    reducers: {
        changeCategory: (state, action) => {
            state.category = action.payload
        }
    }
})

export const { changeCategory } = appSlice.actions
export default appSlice.reducer