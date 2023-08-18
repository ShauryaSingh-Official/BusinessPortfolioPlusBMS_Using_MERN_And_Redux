
// import './App.css';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';

import Home from './components/home/Home';
import MainMenu from './components/main-menu/MainMenu';
import Footer from './components/footer/Footer'
import Admin from './components/admin/Admin';
import PageNotFound from './components/Pagenotfound/PageNotFound';
import Client from './components/client/Client';
import Worker from './components/worker/Worker';
import ShowWorkerList from './components/worker/showWorkerList/ShowWorkerList';
import ShowWorkRecords from './components/worker/showWorkRecords/ShowWorkRecords';
import SalaryReceipt from './components/worker/salaryReceipt/SalaryReceipt';
import ShowSaleRecords from './components/client/showClientSaleRecords/ShowClientSaleRecords';
import ShowAllSaleRecords from './components/client/showAllSaleRecords/ShowAllSaleRecords';
import ClientBill from './components/client/clientBill/ClientBill';

function App() {


  return (
    <>
      <Router>
      <MainMenu></MainMenu>
      <Routes>
        <Route path="/"exact element={<Home />} />
        <Route path='/home' element={<Home/> } ></Route>
        <Route path='/admin' element= {<Admin></Admin>}  ></Route >
        <Route path='/admin/client' element= {<Client></Client>}  ></Route >
        <Route path='/admin/client/show_client_sales' element= {<ShowSaleRecords></ShowSaleRecords>}  ></Route >
        <Route path='/admin/client/all_sales' element= {<ShowAllSaleRecords></ShowAllSaleRecords>}  ></Route >
        <Route path='/admin/client/client_bill' element= {<ClientBill></ClientBill>}  ></Route >

        <Route path='/admin/worker' element= {<Worker></Worker>}  ></Route >
        <Route path='/admin/worker/show_workers' element= {<ShowWorkerList></ShowWorkerList>}  ></Route >
        <Route path='/admin/worker/work_records' element= {<ShowWorkRecords></ShowWorkRecords>} ></Route >
        <Route path='/admin/worker/salary_slip' element= {<SalaryReceipt></SalaryReceipt>} ></Route >
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer></Footer>
    </Router>
</>
    
  );
}

export default App;
