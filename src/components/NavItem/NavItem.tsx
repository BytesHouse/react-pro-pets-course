import React from 'react';
import {Link} from "react-router-dom";

interface NavItemProps {
    item : Record<any, any>
    title?: string
}
const NavItem = ({item, title}: NavItemProps) => {
    const isActive = title === item.href
    return (
        <Link to={item.href}>
        <li
            className={`${isActive ? 'text-green-900 shadow-[0_4px_12px_rgba(0,0,0,0.08)]' : '' } rounded-3xl cursor-pointer transition hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] text-[14px] font-[400] flex gap-[10px] px-[15px] py-[10px]`}
            key={item.id}
        >
            {item.icon}
            {item.title}
        </li>
        </Link>
    );
};

export default NavItem;