import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../features/conters/countersSlice";
import postsReducer from "../features/conters/posts/postsSlice";


const store = configureStore({
        reducer : {
            counters: countersReducer,
            posts: postsReducer,
        }
});

export default store;