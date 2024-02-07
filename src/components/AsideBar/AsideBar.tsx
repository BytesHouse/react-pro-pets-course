import React from 'react';
import HeaderAside from "../HeaderAside/HeaderAside";
import BodyAside from "../BodyAside/BodyAside";
import GearModal from "../GearModal/GearModal";

export const user = {
    photo: 'https://www.shutterstock.com/image-vector/vector-design-avatar-dummy-sign-600nw-1290556063.jpg',
    first_name: 'Andrew',
    last_name: 'Lihtgolt',
    role: 'SuperAdmin',
    isActive: true
}
const AsideBar = () => {

    return (
        <aside className="h-max flex flex-col gap-[10px] bg-white p-[10px] rounded-[15px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <p className="text-[12px] font-[400] text-[#8A8A8A]">My Account</p>
            <HeaderAside user={user}/>
            <hr/>
            <BodyAside/>
            <GearModal/>
        </aside>
    );
};

export default AsideBar;