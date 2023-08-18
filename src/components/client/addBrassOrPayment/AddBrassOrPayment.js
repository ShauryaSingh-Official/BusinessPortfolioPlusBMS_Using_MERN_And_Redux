import { useDispatch, useSelector } from 'react-redux';
import '../common.css'
import './addBrassOrPayment.css'
import { useState } from 'react'
import { addBrassOrPayment } from '../ClientSlice';

export default function AddBrassOrPayment() {


    const sales = useSelector(state => state.clients.sales);
    const dispatch = useDispatch();
    const initial_sale = { clientName: "", productIDs: "----", brassProvided: 0.0, rate: 0.0, weight: 0.0, payableAmount: 0.0, paidAmount: 0.0, date: "" };
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

    const handleBrassProvided = (e) => {
        e.stopPropagation();
        setSale({ ...sale, brassProvided: e.target.value })
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
        if (!sale.clientName || !(sale.brassProvided || sale.paidAmount) || !sale.date) {
            alert("Please enter the required fields !!! ")
        }
        else {
            dispatch(addBrassOrPayment(sale))
            setSale(initial_sale)
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
                <h2 className="heading font-medium">ADD NEW WORK</h2>
                <form className="EmployeeForm">

                    <label className='font-small'>Client Name</label>
                    {NameInputType ? <select onChange={handleName} value={sale.clientName} required>
                        <option value="" >Select Client Name Here</option>
                        {ClientNames.map((client, index) => (
                            <option key={index} value={client}>{client}</option>
                        ))}
                    </select> : <input type='text' onChange={handleName} value={sale.workerName} placeholder='Provide new client name' required />}

                    <span className='font-small s2'>Add new Client<input type='checkBox' onClick={updateInputType} className='inp_check'/>
</span> 
                    <label className='font-small'>Brass Provided(in kgs)</label>
                    <input type='number' placeholder='Brass Provided' value={sale.brassProvided} onChange={handleBrassProvided} required />

                    <label className='font-small'>Amount Paid</label>
                    <input type="number" placeholder='Amount Paid' value={sale.paidAmount} onChange={handlePaid} id="paid" />

                    <label className='font-small'>Date</label>
                    <input type="date" placeholder='Date' value={sale.date} id="paid" onChange={handleDate} required />

                    <button type="submit" className="btn-primary addbtn" onClick={handleSubmit}>Add Work</button>
                </form>
                {/* <h2>{sale.workerName} {sale.brassProvided} {sale.paidAmount} {sale.date}</h2> */}
                <h1 className='form-bottom'></h1>
            </div>
        </>
    )
}