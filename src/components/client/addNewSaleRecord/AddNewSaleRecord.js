import { useDispatch, useSelector } from 'react-redux';
import '../common.css'
import { useState } from 'react'
import { addNewSale } from '../ClientSlice';

export default function AddNewSaleRecord() {


    const sales = useSelector(state => state.clients.sales);
    const dispatch = useDispatch();
    const initial_sale = { clientName: "", productIDs: "", brassProvided: 0.0, rate: 0.0, weight: 0.0, payableAmount: 0.0, paidAmount: 0.0, date: "" };
    const [sale, setSale] = useState(initial_sale);
    //                                              GET UNIQUE CLIENTS
    const uniqueClients = new Set(sales.map((sale) => { return sale.clientName.toUpperCase(); }));
    let initialCNames = [];
    for (let client of uniqueClients) {
        initialCNames.push(client);
    }
    initialCNames.sort();
    const [ClientNames, setClientNames] = useState(initialCNames);



    //          EVENT HANDLERS
    const handleName = (e) => {
        e.stopPropagation();
        setSale({ ...sale, clientName: e.target.value })
    }

    const handlePID = (e) => {
        e.stopPropagation();
        setSale({ ...sale, productId: e.target.value })
    }

    const handleBrassProvided = (e) => {
        e.stopPropagation();
        setSale({ ...sale, brassProvided: e.target.value })
    }

    const handleRate = (e) => {
        e.stopPropagation();
        setSale({ ...sale, rate: e.target.value })
    }
    const handleWeight = (e) => {
        e.stopPropagation();
        setSale({ ...sale, weight: e.target.value })
    }

    const handlePaid = (e) => {
        e.stopPropagation();
        setSale({ ...sale, paidAmount: e.target.value })
    }

    const handleDate = (e) => {
        e.stopPropagation();
        setSale({ ...sale, date: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!sale.clientName || !sale.productIDs || !sale.brassProvided || !sale.rate || !sale.weight || !sale.paidAmount || !sale.date) {
            alert("Please enter the required fields !!! ")
        }
        else {
            let payable = sale.rate * sale.weight;
            let S = { ...sale, payableAmount: payable };
            console.log("I am reachable")
            console.log("WorkAmt : ", S)
            dispatch(addNewSale(S))
            setSale(initial_sale)
            console.log(sale);
            // console.log("I am reachable")
        }
    }

    const [NameInputType, setNameInputType] = useState(0);
    const updateInputType = (e) => {
        e.stopPropagation();
        setNameInputType(!NameInputType);
    }

    return (
        <>
            <div className='form-container container'>
                <h2 className="heading font-medium">ADD NEW SALE RECORD</h2>
                <form className="EmployeeForm">

                    <label className='font-small'>Client Name<span style={{ color: "red", }}> *</span></label>
                    {!NameInputType ? <select onChange={handleName} value={sale.clientName} required>
                        <option value="" >Select Client Name : -</option>
                        {ClientNames.map((client, index) => (
                            <option key={index} value={client}>{client}</option>
                        ))}
                    </select> : <input type='text' onChange={handleName} value={sale.workerName} placeholder='Provide new client name' required/>}
                    Add new client
                    <input type='checkBox' onClick={updateInputType} />

                    <label className='font-small'>Select Product ID <span style={{ color: "red", }}> *</span></label>
                    <input type='text' onChange={handlePID} value={sale.productId} required/>
                    {/* <select onChange={handlePID} value={sale.productId} required>
                    <option value="" >Select Product ID : -</option>
                    {Pid.map((id,index) => (
                        <option key={index} value={id}>{id}</option>
                    ))}
                    </select> */}

                    <label className='font-small'>Weight (kgs/hrs/units) <span style={{ color: "red", }}> *</span></label>
                    <input type='number' placeholder='Work (kgs/hrs/units)' value={sale.weight} id="weight" onChange={handleWeight} required />

                    <label className='font-small'>Brass Provided(in kgs) <span style={{ color: "red", }}> *</span></label>
                    <input type='number' value={sale.brassProvided} onChange={handleBrassProvided} required />

                    <label className='font-small'>Rate <span style={{ color: "red", }}> *</span></label>
                    <input type='number' placeholder='If Brass not provided , include/add Brass rates' value={sale.rate} onChange={handleRate} required />

                    <label className='font-small'>Amount Paid <span style={{ color: "red", }}> *</span></label>
                    <input type="number" placeholder='Amount Paid' value={sale.paidAmt} onChange={handlePaid} id="paid" />

                    <label className='font-small'>Date <span style={{ color: "red", }}> *</span></label>
                    <input type="date" placeholder='Date' value={sale.date} id="paid" onChange={handleDate} required />
                    <button type="submit" className="btn-primary addbtn" onClick={handleSubmit}>Add Sale Records</button>
                </form>
                {/* <h2>{sale.workerName} {sale.productId} {sale.weight} {sale.brassProvided} {sale.rate} {sale.paidAmount} {sale.date}</h2> */}
                <h1 className='form-bottom'></h1>
            </div>
        </>
    )
}