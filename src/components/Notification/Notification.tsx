import React from 'react';
import BellIcon from "../../uikit/icons/BellIcon";

const Notification = () => {
    return (
        <div className="bg-white p-[5px] rounded-full relative">
            <BellIcon/>
            <div className="w-[10px] h-[10px] rounded-full bg-[#FF855F] absolute top-0 right-0"></div>
        </div>
    );
};

export default Notification;