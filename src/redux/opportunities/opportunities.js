import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseApiUrl from '../../../server';

export const getOpportunities = createAsyncThunk(
  'opportunities/getOpportunities',
  async () => {
    const respond = await axios.get(`${baseApiUrl}/opportunities`);
    return respond.data;
  },
);

const opportunitiesSlice = createSlice({
  name: 'opportunities',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHouses.fulfilled, (state, action) => (action.payload))
  },
});

export const opportunitiesActions = opportunitiesSlice.actions;
export default opportunitiesSlice.reducer;
