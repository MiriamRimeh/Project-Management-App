import React, {useState} from 'react';
import Avatar from 'react-avatar';
import '../style/UserAvatar.css'
import { Link } from 'react-router-dom';

function UserAvatar({userName, AvatarMenuData}){
    const [avMenu, setAvMenu] = useState(false);
    const showMenu = () =>(setAvMenu(!avMenu))

    return(
        <>
            <Avatar size="32px"
                    name={userName}
                    round={true}
                    onClick={showMenu}
                    textSizeRatio='1'
                    className='bnav-avatar-icon'
            />
            <ul className={avMenu ? 'bnav-submenu active' : 'bnav-submenu'} onClick={showMenu}>
                {AvatarMenuData.map((item,index)=>{
                    return (
                        <li key={index} className='bnav-text'>
                            <Link to={item.path}>
                                {item.icon}
                                <div>{item.title}</div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default UserAvatar