import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchResults: [],
    
    },
    reducers: {
        addSearchResults: (state, action) => {
            state.searchResults = action.payload
        }
    }
})

export const { addSearchResults } = searchSlice.actions
export default searchSlice.reducer