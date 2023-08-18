
import { useSelector } from 'react-redux'
import './showWorkerList.css'
import { Link } from 'react-router-dom';

export default function ShowWorkerList(props) {
    const workers = useSelector(state => state.workers.workers);
    console.log(workers[0].dept);
    return (
        <>

            <article class="records-dashboard">
                <div class="records-header">
                    <h2>ALL WORKERS LIST </h2>
                </div>
                <section class="records-area">
                    <button className='btn-secondary gobackbtn'><Link to="/admin/worker"> Go Back</Link></button>
                    <table class="records">
                        <thead class="table-header font-small">
                            <tr><th colSpan={"5"}><hr/></th></tr>
                            <tr >
                                <th class="table-head">S.No.</th>
                                <th class="table-head">Worker Name</th>
                                <th class="table-head">Department</th>
                                <th class="table-head">product ID</th>
                                <th class="table-head">Rate of Production <br/>(per unit/kg/hour)</th>
                            </tr>
                            <tr><th colSpan={"5"}><hr/></th></tr>
                        </thead>

                        <tbody class="font-small">
                            {workers.map((worker)=>{ return (
                                <tr key={worker.sno}>
                                    <td>{worker.sno}</td>
                                    <td>{worker.workerName}</td>
                                    <td>{worker.dept}</td>
                                    <td>{worker.productId}</td>
                                    <td>{worker.rsOfProction}</td>
                                </tr>
                            )
                                
                            })}
                        </tbody>
                        
                    </table>

                </section>
                <hr class="bottom-line" />
            </article>

        </>
    )
}