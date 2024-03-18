import React from 'react'
import { FaHouse } from "react-icons/fa6";
import { IoIosWallet } from "react-icons/io";
import { FaChartBar } from "react-icons/fa";
import { TbArrowsExchange } from "react-icons/tb";
import { MdQueryStats } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";

const Sidebar = () => {
    return (
        <div>
            <ul>
                <li className='sidebarBtns'>
                    <FaHouse className='flex justify-center items-center' />
                    {/* <p>Dashboard</p> */}
                </li>
                <li className='sidebarBtns'>
                    <IoIosWallet />
                    {/* <p>My Wallet</p> */}
                </li>
                <li className='sidebarBtns'>
                    <TbArrowsExchange />
                    {/* <p>Transactions</p> */}
                </li>
                <li className='sidebarBtns'>
                    <MdQueryStats />
                    {/* <p>Statistics</p> */}
                </li>
                <li className='sidebarBtns'>
                    <FaChartBar />
                    {/* <p>Analytics</p> */}
                </li>
                <li className='sidebarBtns'>
                    <BsFillPeopleFill />
                    {/* <p>Support</p> */}
                </li>
            </ul>
        </div>
    )
}

export default Sidebar