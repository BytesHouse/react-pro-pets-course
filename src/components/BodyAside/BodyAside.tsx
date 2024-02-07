import React from 'react';
import {navItemsMain, navItemsServices} from "../../config/nav.config";
import {Link, useLocation} from "react-router-dom";
import NavItem from "../NavItem/NavItem";

const BodyAside = () => {
    const {pathname} = useLocation();
    const route = pathname.replace('/dashboard/', '')
    return (
        <div>
            <p className="text-[12px] font-[400] text-[#8A8A8A]">Main</p>
            <ul className="flex flex-col gap-[5px]">
                {navItemsMain
                    .map(item => <NavItem title={route} item={item}/>)}
            </ul>
            <p className="text-[12px] font-[400] text-[#8A8A8A]">Animal Services</p>
            <ul>
                {navItemsServices.map(item => <NavItem title={route} item={item}/>)}
            </ul>
        </div>
    );
};

export default BodyAside;