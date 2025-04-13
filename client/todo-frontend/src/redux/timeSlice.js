import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTime = createAsyncThunk('time/fetchTime', async () => {
  const response = await fetch('http://localhost:3000/time');
  let responseData = {};
  responseData.status = response.status;
  responseData.statusText = response.statusText;
  responseData.data = await response.json();
  return responseData;
});

const timeSlice = createSlice({
    name: 'time',
    initialState: {
        currentTime: null,
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTime.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchTime.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.currentTime = action.payload.data.currentTime;
        })
        .addCase(fetchTime.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
    });

export default timeSlice.reducer;