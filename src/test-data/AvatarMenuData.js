import React from "react";
import * as CgFIcons from "react-icons/cg";

import * as MdIcons from 'react-icons/md';
export const AvatarMenuData =[
{
    title: 'Profile',
    path: '/userProfile',
    icon: <CgFIcons.CgProfile/>,
    cName: 'bnav-text'
},
{
    title: 'Logout',
    path: '/logout',
    icon: <MdIcons.MdLogout/>,
    cName: 'bnav-text'
},
]