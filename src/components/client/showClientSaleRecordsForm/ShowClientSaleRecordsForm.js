import { useDispatch, useSelector } from 'react-redux';
import '../common.css'
import {useState} from 'react';
import { Link } from 'react-router-dom';
import {updateExtraData} from '../ClientSlice';


export default function ShowWorkRecordsForm({position}){

    const dispatch = useDispatch();
    const initial_client = { clientName : "" , date : "" };
    const [client, setClient] = useState(initial_client);
    
    //                                              GET UNIQUE Employee
    const sales = useSelector(state => state.clients.sales);
    const uniqueClients = new Set( sales.map((sale) => { return sale.clientName.toUpperCase(); }) );
    let initialCNames = [];
    for(let person of uniqueClients){
        initialCNames.push(person);
    }
    initialCNames.sort();
    const [clientNames, setClientNames] = useState(initialCNames); 

    
    //          EVENT HANDLERS
    const handleName = (e)=>{
        e.stopPropagation();
            setClient({...client , clientName : e.target.value})
    }
    
    const handleDate=(e)=>{
        e.stopPropagation();
        setClient({...client , date : e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if(!client.clientName || !client.date){
            alert("Please enter the required fields !!! ")
        }
        else{
            dispatch(updateExtraData(client));
            setClient(initial_client);
        }
    }

    return(
        <>
        <div className='form-container container'>
        <h2 className="heading font-medium">Select Client Form</h2>
        <form className="EmployeeForm">
        
        <label className='font-small'>Select Client Name</label>
                    <select onChange={handleName} value={client.clientName} id="ClientName" required>
                    <option value="" >Select client Name : -</option>
                    {clientNames.map((clt,index) => (
                        <option key={index} value={clt}>{clt}</option>
                    ))}
                    </select>
        
        <label className='font-small'>Select Date</label>
        <input type="date" placeholder='Date' value={client.date} id="date" onChange={handleDate} required />

        { (position==3) ? (<button type="submit" className="btn-primary addbtn" onClick={handleSubmit}><Link to='/admin/client/show_client_sales'>Submit</Link></button>) :
        (<button type="submit" className="btn-primary addbtn" onClick={handleSubmit}><Link to='/admin/client/client_bill'>Generate Client Bill</Link></button>) }
    </form>
    {/* <h2>{client.clientName} {client.date}</h2> */}
    <h1 className='form-bottom'></h1>
        </div>
        </>
    )
}