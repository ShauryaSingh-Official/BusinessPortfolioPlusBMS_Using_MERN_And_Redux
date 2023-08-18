import './admin.css';
import {Link} from 'react-router-dom'

function Admin(){
    return (
        <>
        <article id="admin-home">
        <section className="admin-dashboard container">
            <h2 className="font-large ">Admin Dashboard<br/></h2>
            <p className="font-medium admin-select-option">Select your admin operation type : -</p>

            <div className="admin-options-container">
                <div className="admin-option admin-option1">
                    <Link to="/admin/client">Client</Link>
                </div>
    
                <div className="admin-option admin-option2">
                    <Link to="/admin/worker">Worker</Link>
                </div>
    
                <div className="admin-option admin-option3">
                    <Link to="abc">Post New Job Vacancy</Link>
                </div>
    
                <div className="admin-option admin-option4">
                    <Link to="abc">View Career Applications</Link>
                </div>
            </div>

        </section>
    </article>
    </>
    )
}

export default Admin;