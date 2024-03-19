
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
    <div className="App bg-zinc-500">
      <div className='dashboardContainer'>
        <div className={`sidebar ${isSidebarOpen ? 'w-[170px]':null } `} onMouseOver={showSidebarText} onMouseLeave={hideSidebarText}>
          <ul>
            <li className='sidebarBtns'>
              <FaHouse className='mr-1 text-white' />
              <p className='hidden lg:block'>Dashboard</p>
              {isSidebarOpen ? <p className='lg:hidden'>Dashboard</p> : null}

            </li>
            <li className='sidebarBtns'>
              <IoIosWallet className='mr-1'/>
              <p className='hidden lg:block'>My Wallet</p>
              {isSidebarOpen ? <p className='lg:hidden'>My Wallet</p> : null}

            </li>
            <li className='sidebarBtns'>
              <TbArrowsExchange className='mr-1'/>
              <p className='hidden lg:block'>Transactions</p>
              {isSidebarOpen ? <p className='lg:hidden'>Transactions</p> : null}

            </li>
            <li className='sidebarBtns'>
              <MdQueryStats className='mr-1'/>
              <p className='hidden lg:block'>Statistics</p>
              {isSidebarOpen ? <p className='lg:hidden'>Statistics</p> : null}

            </li>
            <li className='sidebarBtns'>
              <FaChartBar className='mr-1'/>
              <p className='hidden lg:block'>Analytics</p>
              {isSidebarOpen ? <p className='lg:hidden'>Analytics</p> : null}

            </li>
            <li className='sidebarBtns'>
              <BsFillPeopleFill className='mr-1'/>
              <p className='hidden lg:block'>Support</p>
              {isSidebarOpen ? <p className='lg:hidden'>Support</p> : null}

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
