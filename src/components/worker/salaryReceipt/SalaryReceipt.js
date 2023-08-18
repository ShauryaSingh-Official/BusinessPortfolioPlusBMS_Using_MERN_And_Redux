import { useSelector } from 'react-redux'
import './salaryReceipt.css'
import { Link } from 'react-router-dom';

export default function SalaryReceipt() {
    const extraData = useSelector(state => state.workers.extradata);
    
    const all_work_records = useSelector(state => state.workers.works);
    
    let filtered_arr = all_work_records.filter((a) => (a.date >= extraData.date && a.workerName === extraData.workerName));
    
    let till_date = filtered_arr[0].date;
    let total_weight = 0;
    let total_paid = 0;
    let total_payable=0;
    
    filtered_arr.forEach((obj)=>{
        total_weight+=obj.weightHrsUnits;
        total_paid+=obj.paidAmt;
        total_payable+=obj.totalWorkAmt;
        if(obj.date>=till_date){
            till_date=obj.date;
        }
    })



    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const worker = useSelector(state=>state.workers.workers);
    let dept = "";
    worker.forEach(obj => {
        if(obj.workerName===extraData.workerName){
            dept = obj.dept
        }
    });



    return (
        <>

            <article className="records-dashboard">
                
                <div className='top-buttons'>
                <button className='btn-secondary gobackbtn'><Link to="/admin/worker"> Go Back</Link></button>
                <button className='btn-secondary gobackbtn' onClick={()=>{window.print()}}> Print</button>
                </div>

                <div className="bill-header">
                    <h2 className='font-medium'>EMPLOYEE SALARY RECEIPT</h2>
                    <p className='font-small'>।। 🙏  राधे राधे ।। जय श्री महाकाल  🙏 ।।</p>

                </div>
                <section className="records-area">
                    <h2 className='font-small'>Emp. Name : {extraData.workerName} </h2>
                    <p className="font-small">Deptartment : {dept}</p>
                    <p className="font-small">From Date : {extraData.date}</p>
                    <p className="font-small">Till Date : {till_date}</p>
                    <h2 className="font-small" style={{ textAlign: "center" }}>WORK DETAILS</h2>

                    <table class="records">
                        <thead class="table-header font-small">
                            <tr><th colSpan={"7"}><hr /></th></tr>
                            <tr >
                                <th class="table-head">S.No.</th>
                                <th class="table-head">Worker Name</th>
                                <th class="table-head">Product ID</th>
                                <th class="table-head">Work <br />(kgs/hrs/units)</th>
                                <th class="table-head">Amount Paid</th>
                                <th class="table-head">Total Work Amount</th>
                                <th class="table-head">Date</th>
                            </tr>
                            <tr><th colSpan={"7"}><hr /></th></tr>
                        </thead>

                        <tbody class="font-small">
                            {filtered_arr.map((work, index) => {
                                return (
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

                        <tfoot className="font-small">
                            <tr>
                                <td colspan="7"><hr /></td>
                            </tr>
                            <tr style={{ fontWeight: 'bold' }}>
                                <td colspan="3"></td>
                                <td>Total Work(hrs/kgs/pcs)</td>
                                <td>Total Amount Paid</td>
                                <td>Total Amount</td>
                                <td>BALANCE</td>
                            </tr>
                            <tr>
                                <td colspan="3"></td>
                                <td>{total_weight}</td>
                                <td>{total_paid}</td>
                                <td>{total_payable}</td>
                                <td>{total_payable-total_paid}</td>
                            </tr>

                            <tr>
                                <td></td>
                            </tr>
                            
                            <tr>
                                <td colSpan={5}></td>
                                <td>
                                    <h2 className="font-small signature">Authorised By : - ShaurayaSingh<br/>(DIRECTOR - MKJ Team)</h2></td>
                            </tr>
                            
                            <tr>
                                <td><hr /></td>
                            </tr>
                        </tfoot>
                    </table>

                </section>
                
            </article>

        </>
    )
}