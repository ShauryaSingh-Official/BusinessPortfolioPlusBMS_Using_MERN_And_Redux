import { useSelector } from 'react-redux'
import './clientBill.css'
import { Link } from 'react-router-dom';

export default function ClientBill() {
    console.log("Bill component")
    const extraData = useSelector(state => state.clients.extradata);

    const all_sale_records = useSelector(state => state.clients.sales);

    let filtered_arr = all_sale_records.filter((a) => (a.date >= extraData.date && a.clientName === extraData.clientName));
    console.log(filtered_arr);
    let till_date = filtered_arr[0].date;
    let total_weight = 0;
    let total_brass_provided = 0;
    let actual_brass_provided = 0;
    let total_paid = 0;
    let total_payable = 0;

    filtered_arr.forEach((obj) => {
        
        total_weight += obj.weight;
        total_paid += obj.paidAmount;
        total_payable += obj.payableAmount;
        total_brass_provided += obj.brassProvided;
        if (obj.rate >= 680){
            actual_brass_provided += obj.weight;
        }
        actual_brass_provided += obj.brassProvided;
        if (obj.date >= till_date) {
            till_date = obj.date;
        }
    })


    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    return (
        <>

            <article className="records-dashboard">

                <div className='top-buttons'>
                    <button className='btn-secondary gobackbtn'><Link to="/admin/client"> Go Back</Link></button>
                    <button className='btn-secondary gobackbtn' onClick={() => { window.print() }}> Print</button>
                </div>

                <div className="bill-header">
                    <h2 className='font-medium'>CLIENT BILL</h2>
                    <p className='font-small'>।। 🙏  राधे राधे ।। जय श्री महाकाल  🙏 ।।</p>

                </div>
                <hr />
                <section className="records-area">
                    <h2 className='font-small'>Client Name : {extraData.workerName} </h2>
                    <p className="font-small">From Date : {extraData.date}</p>
                    <p className="font-small">Till Date : {till_date}</p>
                    {/* <hr /> */}
                    <h2 className="font-small" style={{ textAlign: "center" }}>SELL DETAILS</h2>
                    {/* <hr /> */}

                    <table class="records">
                        <thead class="table-header font-small">
                            <tr><th colSpan={"9"}><hr /></th></tr>
                            <tr >
                                <th class="table-head">S.No.</th>
                                <th class="table-head">Client Name</th>
                                <th class="table-head">Product ID</th>
                                <th class="table-head">Weight</th>
                                <th class="table-head">Brass Provided</th>
                                <th class="table-head">Rate</th>
                                <th class="table-head">Amount Paid</th>
                                <th class="table-head">Amount Payable</th>
                                <th class="table-head">Date</th>
                            </tr>
                            <tr><th colSpan={"9"}><hr /></th></tr>
                        </thead>

                        <tbody class="font-small">
                            {filtered_arr.map((record, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{record.clientName}</td>
                                        <td>{record.productIDs}</td>
                                        <td>{record.weight}</td>
                                        <td>{record.brassProvided}</td>
                                        <td>{record.rate}</td>
                                        <td>{record.paidAmount}</td>
                                        <td>{record.payableAmount}</td>
                                        <td>{record.date}</td>
                                    </tr>
                                )
                            })}
                        </tbody>

                        <tfoot class="font-small">
                            <tr>
                                <td colSpan={9}><hr /></td>
                            </tr>

                            <tr style={{fontWeight:"bold"}}>
                                <td colSpan={3}></td>
                                <td>Total Weight</td>
                                <td colSpan={2}>Total Brass Provided</td>
                                <td>Total Amount Paid</td>
                                <td>Total Amount</td>
                            </tr>
                            <tr>
                                <td colSpan={3}></td>
                                <td>{total_weight}</td>
                                <td colSpan={2}>{total_brass_provided}</td>
                                <td>{total_paid}</td>
                                <td>{total_payable}</td>
                            </tr>

                            <tr>
                                <td colSpan={9}></td>
                            </tr>

                            <tr>
                                <td colSpan={9}>
                                    <h2 className='font-small'>Remaining Brass : {actual_brass_provided - total_weight }</h2>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={9}>
                                    <h2 className='font-small'>Remaining Payable Amount : {total_payable - total_paid} </h2>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={9}>
                                    <h2 className="font-small signature">Authorised By : - ShaurayaSingh<br />(DIRECTOR - MKJ Team)</h2>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={9}>
                                    <hr  />
                                </td>
                            </tr>

                        </tfoot>
                    </table>

                </section>

            </article>

        </>
    )
}