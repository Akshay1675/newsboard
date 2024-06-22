import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    newsList: [],
    detailedNews: null,
  },
  reducers: {
    setDetailedNews: (state, action) => {
      state.detailedNews = action.payload;
    },
    addToNewsList: (state, action) => {
      state.newsList = action.payload;
    }

  },
});

export const { setDetailedNews, addToNewsList } = newsSlice.actions;
export default newsSlice.reducer;
