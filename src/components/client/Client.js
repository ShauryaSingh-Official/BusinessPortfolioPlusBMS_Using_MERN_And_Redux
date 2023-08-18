import './client.css';

import {useState} from 'react';
import { Link } from 'react-router-dom';
import AddNewSaleRecord from './addNewSaleRecord/AddNewSaleRecord'
import AddBrassOrPayment from './addBrassOrPayment/AddBrassOrPayment';
import ShowWorkRecordsForm from './showClientSaleRecordsForm/ShowClientSaleRecordsForm';
// import ShowAllSaleRecords from './showAllSaleRecords/ShowAllSaleRecords';


export default function Client(){
    const [position , setPosition] = useState(-1);  
    const arr = [ <AddNewSaleRecord></AddNewSaleRecord>,<AddBrassOrPayment></AddBrassOrPayment>,,<ShowWorkRecordsForm position={3}></ShowWorkRecordsForm>,<ShowWorkRecordsForm position={4}></ShowWorkRecordsForm>,5];

    return (
        <>
        <article id="admin-home">
        <div className='top-btn'>
                    <button className='btn-secondary gobackbtn'><Link to="/admin"> Go Back</Link></button>
                </div>
        <section class="client-dashboard container">
            <h2 class="font-large">Client Dashboard ( Admin )</h2>
            <p class="sub-heading font-medium">Operations : - </p>

            <div class="admin-options-container">
    
                <div class="admin-option admin-option3" onClick={()=>{setPosition(0)}}>
                    <h3 className='font-medium'>Add Sale Details</h3>
                </div>
    
                <div class="admin-option admin-option4" onClick={()=>{setPosition(1)}}>
                    <h3 className='font-medium'>Add Brass Provided/Payment</h3>
                </div>
    
                <div class="admin-option admin-option5" onClick={()=>{setPosition(2)}}>
                    <Link to='/admin/client/all_sales' className='font-medium'>All Sale Records</Link>
                </div>
                <div class="admin-option admin-option5" onClick={()=>{setPosition(3)}}>
                    <h3 className='font-medium'>Show Client Sale Records</h3>
                </div>

                <div class="admin-option admin-optionunique" onClick={()=>{setPosition(4)}}>
                    <h3 className='font-medium'>Generate Client Bill</h3>
                </div>
            </div>

        </section>

        <section>
            {(position+1)&&(arr[position])}            
        </section>
    </article>
    </>
    )
}