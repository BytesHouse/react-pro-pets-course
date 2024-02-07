import React from 'react';
import SpyglassIcon from "../../uikit/icons/SpyglassIcon/SpyglassIcon";

const SearchInput = () => {
    return (
        <div className='max-w-max relative'>
            <input className='outline-none h-[35px] rounded-full pl-[45px] w-[350px]' placeholder="Global Search..." />
            <div className="absolute left-3 top-[50%] -translate-y-[50%]">
                <SpyglassIcon/>
            </div>
        </div>);
};

export default SearchInput;