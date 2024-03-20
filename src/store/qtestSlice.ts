import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";



const qtest = createSlice({
    name: 'qtest',
    initialState: "",
    reducers: {
        addAnswers: (state, action: PayloadAction<{ qnum: string; answer: string }>) => {
            const { qnum, answer } = action.payload;
            state = state + " " + qnum + "=" + answer;
            return state
        }
    }
});

export const { addAnswers } = qtest.actions;
export default qtest;
