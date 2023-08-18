
import { useSelector } from 'react-redux'
import './showAllSaleRecords.css'
import { Link } from 'react-router-dom';


export default function ShowAllSaleRecords() {

    const all_sales_records = useSelector(state=>state.clients.sales);
    
    return (
        <>

            <article class="records-dashboard">
                <div class="records-header">
                    <h2>ALL SALE RECORDS </h2>
                </div>
                <section class="records-area">
                    <button className='btn-secondary gobackbtn'><Link to="/admin/client"> Go Back</Link></button>

                    <table class="records">
                        <thead class="table-header font-small">
                            <tr><th colSpan={"9"}><hr/></th></tr>
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
                            <tr><th colSpan={"9"}><hr/></th></tr>
                        </thead>

                        <tbody class="font-small">
                            {all_sales_records.map((record,index)=>{ return (
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
                        <tfoot>
                            <tr>
                                <td colSpan={9}><hr/></td>
                            </tr>
                        </tfoot>
                    </table>

                </section>
            </article>

        </>
    )
}