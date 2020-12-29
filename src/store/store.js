import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import createSagaMiddleware from 'redux-saga'
import { hello } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: todoReducer,
    middleware: sagaMiddleware
})
sagaMiddleware.run(hello)
export default store