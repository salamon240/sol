import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">lamadmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="titel">MAIN</p>
          <li>
             <DashboardIcon className="icon"/>
            <span>Dashbord</span>
          </li>
          <p className="titel">LISTS</p>
          <li>
          <PersonOutlineOutlinedIcon  className="icon"/>
            <span>Users</span>
          </li>
          <li>
          <Inventory2OutlinedIcon  className="icon"/>
            <span>Products</span>
          </li>
          <li>
          <LocalShippingOutlinedIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="titel">USEFUL</p>
          <li>
          <SsidChartOutlinedIcon  className="icon"/>
            <span>Stats</span>
          </li>
          <li>
          <NotificationsOutlinedIcon  className="icon"/>
            <span>Notifcation</span>
          </li>
          <p className="titel">SERVICE</p>
          <li>
          <LocalHospitalOutlinedIcon  className="icon"/>
            <span>System Healt</span>
          </li>
          <li>
          <LoginOutlinedIcon  className="icon"/>
            <span>Logs</span>
          </li>
          <li>
          <SettingsOutlinedIcon  className="icon"/>
            <span>Setting</span>
          </li>
          <p className="titel">USER</p>
          <li>
          <AccountBoxOutlinedIcon  className="icon"/>
            <span>Profile</span>
          </li>
          <li>
          <LogoutOutlinedIcon  className="icon"/>
            <span>LogOut</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption">
          
        </div>
        <div className="colorOption">

        </div>
        <div className="colorOption">

        </div>

      </div>
    </div>
  );
}

export default Sidebar;
