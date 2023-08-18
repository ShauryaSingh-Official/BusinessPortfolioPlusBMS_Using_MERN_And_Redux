import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    workers: [
        { sno: 1, dept: "POLISH", workerName: "BABU LAL", productId: "COMMON", rsOfProction: 35 },
        { sno: 2, dept: "WELDING", workerName: "WELDER", productId: "COMMON", rsOfProction: 75 },
        { sno: 3, dept: "WELDING", workerName: "HELPER", productId: "COMMON", rsOfProction: 50 },
        { sno: 4, dept: "Polish", workerName: "Sourav Kumar", productId: "COMMON", rsOfProction: 35 },
    ],
    works: [
        { workerName: "BABU LAL", productId: "LG7", weightHrsUnits: 41.0, totalWorkAmt: 1435.0, paidAmt: 350.0, date: "2022-07-15" },
        { workerName: "BABU LAL", productId: "LG55", weightHrsUnits: 54.0, totalWorkAmt: 1890.0, paidAmt: 1500.0, date: "2022-07-12" },
        { workerName: "BABU LAL", productId: "----", weightHrsUnits: 0.0, totalWorkAmt: 0.0, paidAmt: 200.0, date: "2022-07-13" },
        { workerName: "BABU LAL", productId: "LG13", weightHrsUnits: 87.0, totalWorkAmt: 3045.0, paidAmt: 0.0, date: "2022-07-11" },
        { workerName: "BABU LAL", productId: "----", weightHrsUnits: 0.0, totalWorkAmt: 0.0, paidAmt: 2500.0, date: "2022-07-14" },
    ],
    extradata : { workerName : "" , date : ""},
};

export const workerSlice = createSlice({
    name: 'worker',
    initialState: initialState,
    reducers: {
        addNewWorker: (state, action) => {
            return {
                ...state,
                workers: [...state.workers, action.payload]
            }
        },

        addNewWork: (state, action) => {
            return {
                ...state,
                works: [...state.works, action.payload]
            }
        },

        updateExtraData : (state , action) =>{
            return {
                ...state , extradata : {workerName : action.payload.workerName , date : action.payload.date}
            }
        }
    }
})
export const { addNewWorker, addNewWork , updateExtraData } = workerSlice.actions;
export default workerSlice.reducer;