import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";



const qtest = createSlice({
    name: 'qtest',
    initialState: "",
    reducers: {
        addAnswers: (state, action: PayloadAction<string>) => {
            state = state + action.payload + ","
            return state
        }
    }
});

export const { addAnswers } = qtest.actions;
export default qtest;
