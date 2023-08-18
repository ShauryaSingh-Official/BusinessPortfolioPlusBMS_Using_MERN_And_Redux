import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    sales: [
        { clientName: "GUPTA JI VRINDAVAN", productIDs: "LG55 LG7", brassProvided: 0.0, rate: 725.0, weight: 87.3, payableAmount: 63307.0, paidAmount: 60000.0, date: "2022-08-22" },
        { clientName: "MANOJ AGARWAL", productIDs: "SHIVLING", brassProvided: 100.0, rate: 195.0, weight: 1.0, payableAmount: 195.0, paidAmount: 0.0, date: "2022-07-23" },
        { clientName: "MANOJ AGARWAL", productIDs: "LG55", brassProvided: 0.0, rate: 195.0, weight: 22.45, payableAmount: 4377.75, paidAmount: 0.0, date: "2022-07-25" },
        { clientName: "MANOJ AGARWAL", productIDs: "LG7", brassProvided: 0.0, rate: 195.0, weight: 43.35, payableAmount: 8453.25, paidAmount: 0.0, date: "2022-07-30" },
        { clientName: "MANOJ AGARWAL", productIDs: "LG13", brassProvided: 0.0, rate: 195.0, weight: 69.0, payableAmount: 13455.0, paidAmount: 0.0, date: "2022-08-07" },
        { clientName: "MANOJ AGARWAL", productIDs: "----", brassProvided: 0.0, rate: 0.0, weight: 0.0, payableAmount: 0.0, paidAmount: 20000.0, date: "2022-08-07" },
        { clientName: "MANOJ AGARWAL", productIDs: "----", brassProvided: 6.49, rate: 0.0, weight: 0.0, payableAmount: 0.0, paidAmount: 0.0, date: "2022-07-22" },
        { clientName: "THAKUR SAHAB ", productIDs: "ALL (LG4-LG13)", brassProvided: 0.0, rate: 710.0, weight: 93.39, payableAmount: 66306.9, paidAmount: 10000.0, date: "2022-07-30" },
        { clientName: "THAKUR SAHAB ", productIDs: "----", brassProvided: 0.0, rate: 0.0, weight: 0.0, payableAmount: 0.0, paidAmount: -700.0, date: "2022-08-09" },
        { clientName: "Manoj Agarwal", productIDs: "LG12", brassProvided: 0.0, rate: 725.0, weight: 45.98, payableAmount: 33335.5, paidAmount: 5000.0, date: "2023-06-23" },
        { clientName: "Manoj Agarwal", productIDs: "----", brassProvided: 25.0, rate: 0.0, weight: 0.0, payableAmount: 0.0, paidAmount: 0.0, date: "2023-06-23" },
        { clientName: "Manoj Agarwal", productIDs: "----", brassProvided: 0.0, rate: 0.0, weight: 0.0, payableAmount: 0.0, paidAmount: 1000.0, date: "2023-06-23" },

    ],
    extradata: { clientName: "", date: "" },
};

export const clientSlice = createSlice({
    name: 'clients',
    initialState: initialState,
    reducers: {
        addNewSale: (state, action) => {
            return {
                ...state,
                sales : [...state.sales, action.payload]
            }
        },

        addBrassOrPayment: (state, action) => {
            return {
                ...state,
                sales: [...state.sales, action.payload]
            }
        },

        updateExtraData: (state, action) => {
            return {
                ...state, extradata: { clientName: action.payload.clientName, date: action.payload.date }
            }
        }
    }
})
export const { addNewSale, addBrassOrPayment ,  updateExtraData } = clientSlice.actions;
export default clientSlice.reducer;