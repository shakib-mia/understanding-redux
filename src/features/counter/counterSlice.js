import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => state.value >= 10 ? alert("This is too much") : void(state.value += 1),
        decrement: state => state.value <= 0 ? alert("This is too low") : void(state.value -= 1)
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer