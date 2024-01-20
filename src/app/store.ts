import { configureStore, ThunkAction, Action, createSlice } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { isBrowser, isMobile } from 'react-device-detect';

export const CardSlice = createSlice({
  name: 'cards',
  initialState: {value : {
    title: "",
    project: [{
      title: "",
      exposition: "",
      image: "",
      github: ""
    }],
    image: ""
  }},
  reducers: {
      change: (state, action) =>{
          state.value.title = action.payload.title;
          state.value.project = action.payload.project;
          state.value.image = action.payload.image;
      }
  }
});

export const DiviceCheck = createSlice({
  name: 'DiviceCheck',
  initialState: {value : {
    Browser: (isBrowser || window.matchMedia('(orientation:landscape)').matches),
    Mobile: (isMobile || window.matchMedia('(orientation:portrait)').matches),
  }},
  reducers: {
    BrowserChange: (state, action) =>{
      state.value.Browser = action.payload.Browser;
    },

    MobileChange: (state, action) =>{
      state.value.Mobile = action.payload.Mobile;
    }
  }
});

export const IndexSlice = createSlice({
  name: "Index",
  initialState: {value: 0},
  reducers: {
    IndexChange: (state, action) =>{
      state.value = action.payload;
    }
  }
})

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cards: CardSlice.reducer,
    DiviceCheck: DiviceCheck.reducer,
    Index: IndexSlice.reducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;