import { configureStore, createReducer } from '@reduxjs/toolkit';
import workerSlice from '../components/worker/workerSlice';
import clientSlice from '../components/client/ClientSlice';


export const store = configureStore({
    reducer :{
        workers : workerSlice,
        clients : clientSlice,
    }
})