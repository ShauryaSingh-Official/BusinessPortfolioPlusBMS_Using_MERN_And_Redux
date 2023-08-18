import { useDispatch, useSelector } from 'react-redux';
import '../common.css'
import {useState} from 'react'
import { addNewWork } from '../workerSlice';

export default function AddEmpPayment(){


    const works = useSelector(state => state.workers.works);
    const workers = useSelector(state => state.workers.workers);
    const dispatch = useDispatch();
    const initial_work = { workerName : ""  , productId : "----" , weightHrsUnits : 0,  totalWorkAmt  : 0 ,  paidAmt : 0  , date : "" };
    const [Work, setWork] = useState(initial_work);
    //                                              GET UNIQUE Employee
    const uniqueEmp = new Set( workers.map((worker) => { return worker.workerName.toUpperCase(); }) );
    let initialENames = [];
    for(let worker of uniqueEmp){
        initialENames.push(worker);
    }
    initialENames.sort();
    const [EmpNames, setEmpNames] = useState(initialENames); 
    

    //          EVENT HANDLERS
    const handleName = (e)=>{
        e.stopPropagation();
            setWork({...Work , workerName : e.target.value})
    }

    
    const handlePaid=(e)=>{
        e.stopPropagation();
        setWork({...Work , paidAmt : e.target.value})
    }
    
    const handleDate=(e)=>{
        e.stopPropagation();
        setWork({...Work , date : e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if(!Work.workerName || !Work.paidAmt || !Work.date){
            alert("Please enter the required fields !!! ")
        }
        else{
           let W = {...Work }
            console.log("I am reachable")
            console.log("WorkAmt : " , W)
            dispatch(addNewWork(W))
            setWork(initial_work)
            console.log(works);
            // console.log("I am reachable")
        }
    }

    return(
        <>
        <div className='form-container container'>
        <h2 className="heading font-medium">ADD WORKER'S PAYMENT</h2>
        <form className="EmployeeForm">
        
        <label className='font-small'>Select Department</label>
                    <select onChange={handleName} value={Work.workerName} required>
                    <option value="" >Select worker Name : -</option>
                    {EmpNames.map((emp,index) => (
                        <option key={index} value={emp}>{emp}</option>
                    ))}
                    </select>
       
        <label className='font-small'>Amount Paid</label>
        <input type="number" placeholder='Amount Paid' value={Work.paidAmt} onChange={handlePaid} id="paid" />
        
        <label className='font-small'>Date</label>
        <input type="date" placeholder='Date' value={Work.date} id="paid" onChange={handleDate} required />
        <button type="submit" className="btn-primary addbtn" onClick={handleSubmit}>Add Work</button>
    </form>
    {/* <h2>{Work.workerName} {Work.productId} {Work.weightHrsUnits} {Work.paidAmt} {Work.date}</h2> */}
    <h1 className='form-bottom'></h1>
        </div>
        </>
    )
}