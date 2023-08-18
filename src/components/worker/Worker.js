import './worker.css';

import {useState} from 'react';
import { Link } from 'react-router-dom';
import AddNewEmployee from './addNewEmployee/AddNewEmployee';
import AddNewWork from './addNewWork/AddNewWork';
import AddEmpPayment from './addEmpPayment/AddEmpPayment';
import SalaryReceipt from './salaryReceipt/SalaryReceipt';
import ShowWorkRecordsForm from './showWorkRecordsForm/ShowWorkRecordsForm';


export default function Worker(){
    const [position , setPosition] = useState(-1);  
    const arr = [ <AddNewEmployee></AddNewEmployee>,<AddNewWork></AddNewWork>, <AddEmpPayment></AddEmpPayment>, <ShowWorkRecordsForm position={position}></ShowWorkRecordsForm> , <ShowWorkRecordsForm position={position}></ShowWorkRecordsForm>];
    const [index, setindex] = useState(4);

    return (
        <>
        <article id="admin-home">
        <div className='top-btn'>
                    <button className='btn-secondary gobackbtn'><Link to="/admin"> Go Back</Link></button>
                </div>
        <section class="worker-dashboard container">
            <h2 class="font-large">Worker Dashboard (Admin)</h2>
            <p class="sub-heading"></p>

            <div class="admin-options-container">
                <div class="admin-option admin-option1" onClick={()=>{setPosition(0)}}>
                    <h3 className='font-medium'>Add New Worker</h3>
                </div>

                <div class="admin-option admin-option2">
                    <Link to="/admin/worker/show_workers" className='font-medium'>Show Workers List</Link>
                </div>
    
                <div class="admin-option admin-option3" onClick={()=>{setPosition(1)}}>
                    <h3 className='font-medium'>New Work Record</h3>
                </div>
    
                <div class="admin-option admin-option4" onClick={()=>{setPosition(2)}}>
                    <h3 className='font-medium'>Add Worker Payment</h3>
                </div>
    
                <div class="admin-option admin-option5" onClick={()=>{setPosition(3)}}>
                    <h3 className='font-medium'>Show Work Records</h3>
                </div>

                <div class="admin-option admin-option6" onClick={()=>{setPosition(4)}}>
                    <h3 className='font-medium'>Generate Salary Slip</h3>
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