
import { useSelector } from 'react-redux'
import './showClientSaleRecords.css'
import { Link } from 'react-router-dom';


export default function ShowSaleRecords() {
    const extraData = useSelector(state => state.clients.extradata);

    const all_sales_records = useSelector(state=>state.clients.sales);
    let filtered_arr = all_sales_records.filter((a)=>(a.date>=extraData.date && a.clientName===extraData.clientName))
    
    return (
        <>

            <article class="records-dashboard">
                <div class="records-header">
                    <h2>CLIENT SALE Records </h2>
                </div>
                <section class="records-area">
                    <button className='btn-secondary gobackbtn'><Link to="/admin/client"> Go Back</Link></button>
                    <h3 className='font-small info'>Worker Name : {extraData.clientName}</h3>
                    <h3 className='font-small info datetag'>Records after : {extraData.date}</h3>

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
                            {filtered_arr.map((filtered_arr,index)=>{ return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{filtered_arr.clientName}</td>
                                    <td>{filtered_arr.productIDs}</td>
                                    <td>{filtered_arr.weight}</td>
                                    <td>{filtered_arr.brassProvided}</td>
                                    <td>{filtered_arr.rate}</td>
                                    <td>{filtered_arr.paidAmount}</td>
                                    <td>{filtered_arr.payableAmount}</td>
                                    <td>{filtered_arr.date}</td>
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