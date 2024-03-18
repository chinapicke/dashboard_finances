
import './App.css';
import MainDashboard from './Components/MainDashboard';
// import Sidebar from './Components/Sidebar';
import { useState } from 'react';
import { FaHouse } from "react-icons/fa6";
import { IoIosWallet } from "react-icons/io";
import { FaChartBar } from "react-icons/fa";
import { TbArrowsExchange } from "react-icons/tb";
import { MdQueryStats } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";



function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const showSidebarText = () => {
    setIsSidebarOpen(true)
  }

  const hideSidebarText = () =>{
    setIsSidebarOpen(false)
  }

  return (
    <div className="App bg-gray-200">
      <div className='dashboardContainer'>
        <div className='bg-red-500 sidebar' onMouseOver={showSidebarText} onMouseLeave={hideSidebarText}>
          <ul>
            <li className='sidebarBtns'>
              <FaHouse className='flex justify-center items-center' />
              {isSidebarOpen ? <p>Dashboard</p> : null}

            </li>
            <li className='sidebarBtns'>
              <IoIosWallet />
              {isSidebarOpen ? <p>My Wallet</p> : null}

            </li>
            <li className='sidebarBtns'>
              <TbArrowsExchange />
              {isSidebarOpen ? <p>Transactions</p> : null}

            </li>
            <li className='sidebarBtns'>
              <MdQueryStats />
              {isSidebarOpen ? <p>Statistics</p> : null}

            </li>
            <li className='sidebarBtns'>
              <FaChartBar />

              {isSidebarOpen ? <p>Analytics</p> : null}

            </li>
            <li className='sidebarBtns'>
              <BsFillPeopleFill />
              {isSidebarOpen ? <p>Support</p> : null}

            </li>
          </ul>

        </div>
        <div className='dashboardContent'>
          <MainDashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
