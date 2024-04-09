import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdOutlinePeople } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";

export const SideBarData =  [
      {
        title: 'Users Management',
        icon: <MdOutlinePeople size={25}/>,
        link: "UserManagement"
      },
      {
        title: 'Posts Management',
        icon: <FaRegMessage size={25}/>,
        link: "PostManagement"
      }
    ];
  



