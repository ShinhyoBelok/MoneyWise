import { configureStore } from '@reduxjs/toolkit';
import opportunitiesReducer from './opportunities/opportunities';

const store = configureStore({
  reducer: {
    opportunities: opportunitiesReducer
  },
});

export default store;
