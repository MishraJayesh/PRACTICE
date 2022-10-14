import React, { useState } from 'react';
import {
  ProSidebarProvider,
  Menu,
  MenuItem,
} from 'react-pro-sidebar';
import { RiContactsBook2Fill } from 'react-icons/ri';
import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiLogOut,
} from 'react-icons/fi';
import { FcHome, FcAbout } from 'react-icons/fc';
import { TbPhysotherapist } from 'react-icons/tb';
import './sidebar.css';

function Sidebar() {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div id="header">
      <ProSidebarProvider>
      <container collapsed={menuCollapse}>
        <header>
          <div className="logotext">
            <p>
              {/* <img src={logo} alt="Logo" /> */}
            </p>
          </div>
          <div className="closemenu" onClick={menuIconClick}>
            {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
          </div>
        </header>
        <content>
          <Menu iconShape="square">
            <MenuItem active icon={<FcHome />}>
              Home
            </MenuItem>
            <MenuItem icon={<RiContactsBook2Fill />}>Contact Us</MenuItem>
            <MenuItem icon={<TbPhysotherapist />}>
              Physiotherapy
            </MenuItem>
            <MenuItem icon={<FcAbout />}>About Us</MenuItem>
          </Menu>
        </content>
        <footer>
          <Menu iconShape="square">
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </Menu>
        </footer>
      </container>
      </ProSidebarProvider>
    </div>
  );
}

export default Sidebar;