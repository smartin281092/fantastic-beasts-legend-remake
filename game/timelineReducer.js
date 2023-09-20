import { createSlice } from '@reduxjs/toolkit'

export const timelineReducer = createSlice({
  name: 'timeline',
  initialState: {
    challenge: '',
    timer: 0,
    roster: [],
    activeBeast: '',
  },
  reducers: {
    setChallenge: (state, action) => {
      state.challenge = action.payload; 
    },
    addBeast: (state, action) => {
      state.roster.push(action.payload);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer