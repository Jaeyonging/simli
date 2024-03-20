import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import qtest from "./qtestSlice";
import qtype from "./qtypeSlice";

const store = configureStore({
    reducer: {
        user: user.reducer,
        qtest: qtest.reducer,
        qType: qtype.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;