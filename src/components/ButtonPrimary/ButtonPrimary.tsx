import React from 'react';

interface ButtonPrimaryProps {
    icon: any
    text: string
    classes?: string
}

const ButtonPrimary = ({text, icon, classes}: ButtonPrimaryProps) => {
    return (
        <button className={" flex items-center gap-[5px] border border-white py-[15px] px-[25px] rounded-[10px] " + classes}>
            {icon}
            {text}
        </button>
    );
};

export default ButtonPrimary;