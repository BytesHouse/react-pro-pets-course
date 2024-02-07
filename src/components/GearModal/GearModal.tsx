import React from 'react';
import GearIcon from "../../uikit/icons/GearIcon/GearIcon";

interface GearModalProps {
    params?: Record<any, any>[]
    isLeft?: boolean
}
const GearModal = ({params, isLeft}: GearModalProps) => {
    return (
        <div className={`absolute ${ isLeft ? '' : 'right-2' }`}>
            <GearIcon/>
        </div>
    );
};

export default GearModal;