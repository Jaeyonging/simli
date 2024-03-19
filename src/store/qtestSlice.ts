import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QTestState } from "../types/qtypes";


const initialState: QTestState = {};

const qtest = createSlice({
    name: 'qtest',
    initialState,
    reducers: {
        addAnswers: (state, action: PayloadAction<{ qnum: string; answer: string }>) => {
            const { qnum, answer } = action.payload;
            state[qnum] = answer;
        }
    }
});

export const { addAnswers } = qtest.actions;
export default qtest;
