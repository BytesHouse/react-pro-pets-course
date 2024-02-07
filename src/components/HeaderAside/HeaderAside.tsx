import React from 'react';

interface HeaderAsideProps {
    user: Record<string, any>
}

const HeaderAside = (props: HeaderAsideProps) => {
    return (
        <div className="flex items-center gap-[10px]">
            <div className="relative">
                <img className="w-[40px] h-[40px] rounded-full" src={props.user.photo} alt="user"/>
                <div className="w-[15px] h-[15px] rounded-full absolute bottom-0 right-0 bg-[#FF855F]"></div>
            </div>
            <div>
                <p className="text-[14px] font-[400]">{props.user.first_name} {props.user.last_name}</p>
                <p className="text-[12px] font-[400] text-[#8A8A8A]">{props.user.role}</p>
            </div>
        </div>
    );
};

export default HeaderAside;