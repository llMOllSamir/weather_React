import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  lastSearch: [],
  lang: "en",
  city: "",
};
if(localStorage.getItem("history")){
  initialState.lastSearch=JSON.parse(localStorage.getItem("history"))
  initialState.city=initialState.lastSearch[0]
}
if(localStorage.getItem("lang")){
  initialState.lang=localStorage.getItem("lang")
}

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setLastSearch: (state, action) => {
      state.lastSearch.unshift(action.payload);
      state.lastSearch = [...new Set(state.lastSearch)];
      state.lastSearch = state.lastSearch.splice(0, 5);
      localStorage.setItem("history", JSON.stringify(state.lastSearch));
    },
    clearHistory:(state)=>{
      state.lastSearch=[]
    }
    ,
    getLastSearch: (state) => {
      state.lastSearch = JSON.parse(localStorage.getItem("history"));
     },
    setLang: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem("lang", action.payload);
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const {
  setLang,
  setLastSearch,
  setCity,
  setSelectedCountry,
  getLastSearch,
  clearHistory
} = weatherSlice.actions;

export default weatherSlice.reducer;
