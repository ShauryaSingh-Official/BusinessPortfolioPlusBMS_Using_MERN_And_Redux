
import { useSelector } from 'react-redux'
import './showWorkRecords.css'
import { Link } from 'react-router-dom';


export default function ShowWorkRecords() {
    const extraData = useSelector(state => state.workers.extradata);

    const all_work_records = useSelector(state=>state.workers.works);

    let filtered_arr = all_work_records.filter((a)=>(a.date>=extraData.date && a.workerName===extraData.workerName))
    console.log(filtered_arr);
    
    return (
        <>

            <article class="records-dashboard">
                <div class="records-header">
                    <h2>ALL WORK Records </h2>
                </div>
                <section class="records-area">
                    <button className='btn-secondary gobackbtn'><Link to="/admin/worker"> Go Back</Link></button>
                    <h3 className='font-small info'>Worker Name : {extraData.workerName}</h3>
                    <h3 className='font-small info datetag'>Records after : {extraData.date}</h3>

                    <table class="records">
                        <thead class="table-header font-small">
                            <tr><th colSpan={"7"}><hr/></th></tr>
                            <tr >
                                <th class="table-head">S.No.</th>
                                <th class="table-head">Worker Name</th>
                                <th class="table-head">Product ID</th>
                                <th class="table-head">Work <br/>(kgs/hrs/units)</th>
                                <th class="table-head">Amount Paid</th>
                                <th class="table-head">Total Work Amount</th>
                                <th class="table-head">Date</th>
                            </tr>
                            <tr><th colSpan={"7"}><hr/></th></tr>
                        </thead>

                        <tbody class="font-small">
                            {filtered_arr.map((work,index)=>{ return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{work.workerName}</td>
                                    <td>{work.productId}</td>
                                    <td>{work.weightHrsUnits}</td>
                                    <td>{work.paidAmt}</td>
                                    <td>{work.totalWorkAmt}</td>
                                    <td>{work.date}</td>
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