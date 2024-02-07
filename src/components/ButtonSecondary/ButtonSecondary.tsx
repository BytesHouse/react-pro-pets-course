import React from 'react';

interface ButtonSecondaryProps {
    icon: any
    text: string
    classes?: string
}
const ButtonSecondary = ({text, icon, classes}: ButtonSecondaryProps) => {
    return (
        <button className={classes + " flex items-center gap-[8px] text-white rounded-[10px] bg-[#FF855F]"}>
            {icon}
            {text}
        </button>
    );
};

export default ButtonSecondary;