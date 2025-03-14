import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const qtypeSlice = createSlice({
    name: 'qtype',
    initialState: "",
    reducers: {
        SetQtype(state, action: PayloadAction<string>) {
            state = action.payload;
            return state
        }
    }
});

export const { SetQtype } = qtypeSlice.actions;
export default qtypeSlice;
