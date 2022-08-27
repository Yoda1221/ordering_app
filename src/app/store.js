import { configureStore }   from "@reduxjs/toolkit"
import counterReducer       from '../features/counter/counterSlice'
//! EZZ HONNAN VAN???

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})
