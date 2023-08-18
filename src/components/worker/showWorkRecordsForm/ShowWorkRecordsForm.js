import { useDispatch, useSelector } from 'react-redux';
import '../common.css'
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { updateExtraData } from '../workerSlice';
// import 'showWorkRecordsForm.css';

export default function ShowWorkRecordsForm({position}){

    const dispatch = useDispatch();
    const initial_worker = { workerName : "" , date : "" };
    const [Worker, setWorker] = useState(initial_worker);
    
    //                                              GET UNIQUE Employee
    const workers = useSelector(state => state.workers.workers);
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
            setWorker({...Worker , workerName : e.target.value})
    }
    
    const handleDate=(e)=>{
        e.stopPropagation();
        setWorker({...Worker , date : e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if(!Worker.workerName || !Worker.date){
            alert("Please enter the required fields !!! ")
        }
        else{
            dispatch(updateExtraData(Worker));
            setWorker(initial_worker);
        }
    }

    return(
        <>
        <div className='form-container container'>
        <h2 className="heading font-medium">Select Worker Form</h2>
        <form className="EmployeeForm">
        
        <label className='font-small'>Select Worker Name</label>
                    <select onChange={handleName} value={Worker.workerName} required>
                    <option value="" >Select worker Name : -</option>
                    {EmpNames.map((emp,index) => (
                        <option key={index} value={emp}>{emp}</option>
                    ))}
                    </select>
        
        <label className='font-small'>Select Date to Filter</label>
        <input type="date" placeholder='Date' value={Worker.date} id="paid" onChange={handleDate} required />
        { (position==3) ? (<button type="submit" className="btn-primary addbtn" onClick={handleSubmit}><Link to='/admin/worker/work_records'>Submit</Link></button>) :
        (<button type="submit" className="btn-primary addbtn" onClick={handleSubmit}><Link to='/admin/worker/salary_slip'>Get Salary Slip</Link></button>) }
    </form>
    {/* <h2>{Worker.workerName} {Worker.date}</h2> */}
    <h1 className='form-bottom'></h1>
        </div>
        </>
    )
}