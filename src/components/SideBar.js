import React, {useState} from "react";
import { Link } from "react-router-dom";
import * as MdIcons from 'react-icons/md';
import { IconContext } from "react-icons/lib";
import '../style/SideBar.css';
import { tSideBarData } from "../test-data/tSideBarData";
import AccordionMenu from "./AccordionMenu";

export default function SideBar(){
    const [sidebar,setSidebar] = useState(false);
    const showSidebar = () => (setSidebar(true));
    const hideSidebar = () => (setSidebar(false));

    return(
        <>
            <IconContext.Provider value={{color: '#d0cbcb'}}>
                <div>
                    <Link to="#" className="menu-bars">
                        <MdIcons.MdMenu onClick={showSidebar}></MdIcons.MdMenu>
                    </Link>
                </div>
                <nav className={sidebar ? 'side-menu.active': 'side-menu'}>
                    <ul className="side-menu-items">
                        <li className="sidebar-toggle">
                            <Link to='#' className="side-bars">
                                <MdIcons.MdOutlineClose onClick={hideSidebar}></MdIcons.MdOutlineClose>
                            </Link>
                        </li>
                        {tSideBarData.map((item, index) => {
                            return(
                                <AccordionMenu key={index} item={{ ...item, type: item.type || [] }} id={index} className={item.cName}>
                                </AccordionMenu>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}