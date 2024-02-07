import React from 'react';
import {Logo} from "../../uikit";
import SearchInput from "../SearchInput/SearchInput";
import Notification from "../Notification/Notification";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import CatInBox from "../../uikit/icons/CatInBox/CatInBox";
import PawIcon from "../../uikit/icons/PawIcon/PawIcon";

const Header = () => {
    return (
        <div className="header -mb-[115px]">
            <div className='h-[80px] flex items-center justify-between container mx-auto'>
                <Logo/>
                <div className="flex items-center gap-[15px]">
                    <Notification/>
                    <SearchInput/>
                </div>
                <div className="flex gap-[10px]">
                    <ButtonPrimary classes="text-white" icon={<CatInBox/>} text="I found a Pet"/>
                    <ButtonSecondary classes="py-[15px] px-[25px]" icon={<PawIcon/>} text="I lost a Pet"/>
                </div>
            </div>
        </div>
    );
};

export default Header;