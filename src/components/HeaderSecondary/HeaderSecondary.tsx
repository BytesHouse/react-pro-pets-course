import React from 'react';
import Logo from "../../uikit/Logo/Logo";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import CatInBox from "../../uikit/icons/CatInBox/CatInBox";
import PawIcon from "../../uikit/icons/PawIcon/PawIcon";

const HeaderSecondary = () => {
    return (
        <header className="py-[20px] bg-[#266F62]">
            <div className="container px-[10px] mx-auto flex justify-between">
                <Logo/>
                <div className="hidden md:flex gap-[15px]">
                    <ButtonPrimary classes="text-white" icon={<CatInBox/>} text="I found a Pet"/>
                    <ButtonSecondary classes="px-[20px]" icon={<PawIcon/>} text="I lost a Pet"/>
                </div>
            </div>
        </header>
    );
};

export default HeaderSecondary;