import { useEffect, useState } from 'react'
import '../common.css'
import { useDispatch, useSelector } from 'react-redux';
import { addNewWorker } from '../workerSlice';

export default function AddNewEmployee() {
    
    const dispatch= useDispatch();
    const workers = useSelector(state => state.workers.workers);
    const A = useSelector(state=>state.workers);
    
    //                                              GET UNIQUE DEPARTMENTS
    const uniqueDept = new Set( workers.map((workr) => { return workr.dept.toUpperCase(); }) );
    let initialDepts = [];
    for(let item of uniqueDept){
        initialDepts.push(item);
    }
    const [departments, setDepartments] = useState(initialDepts);           // use to list the dept options
    

    const worker_initial = { workerName: "", dept: "", productId: "COMMON", rsOfProction: 0 }
    const [worker, setWorker] = useState(worker_initial)

    const handleName = (e)=>{
        e.stopPropagation();
            setWorker({...worker , workerName : e.target.value})
    }

    const handleDeptOption = (e)=>{
        e.stopPropagation();
        setWorker({...worker , dept : e.target.value})
    }
    
    const handlePID=(e)=>{
        e.stopPropagation();
        setWorker({...worker , productId : e.target.value})
    }
    
    const handleROP=(e)=>{
        e.stopPropagation();
        setWorker({...worker , rsOfProction : e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if(!worker.workerName || !worker.dept || !worker.productId || !worker.rsOfProction){
            alert("Please enter the required fields !!! ")
        }
        else{
            const noOfWorker =workers.length+1 
            let W = {...worker , sno : noOfWorker}
            console.log(W)
            dispatch(addNewWorker(W))
            setWorker(worker_initial)
            console.log("I am reachable")
            console.log(A)
        }
    }

    return (
        <>
            <div className='form-container container'>
                <h2 className="heading font-medium">ADD NEW EMPLOYEE</h2>
                <form className="EmployeeForm">
                    <label className='font-small'>Employee Name</label>
                    <input type="text" placeholder='Employee Name Here' id="empName" value={worker.workerName} required onChange={handleName}/>
                    
                    <label className='font-small'>Select Department</label>
                    <select onChange={handleDeptOption} value={worker.dept} required>
                    <option value="" >Choose Option here: -</option>
                    <option value={"Common"} >COMMON</option>
                    {departments.map((dept,index) => (
                        <option key={index} value={dept}>{dept}</option>
                    ))}
                    </select>

                    <label className='font-small'>Product ID</label>
                    <input type="text" placeholder='Product ID' id="productID" value={worker.productId} required onChange={handlePID}/>
                    <label className='font-small'>Rate of Production</label>
                    <input type="text" placeholder='Rate of Production' id="paidPerUnit" value={worker.rsOfProction} required onChange={handleROP}/>
                    <button type="submit" class="btn-primary addbtn" onClick={handleSubmit}>Add Employee</button>
                </form>
                
                {/* <h1>{worker.workerName} {worker.dept} {worker.productId} {worker.rsOfProction}</h1> */}
                <h1 className='form-bottom'></h1>
            </div>
        </>
    )
}