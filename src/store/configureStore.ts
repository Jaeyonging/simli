import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import qtest from "./qtestSlice";

const store = configureStore({
    reducer: {
        user: user.reducer,
        qtest: qtest.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;