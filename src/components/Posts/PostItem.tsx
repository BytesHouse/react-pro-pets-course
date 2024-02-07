import React from 'react';
import Dots from "../../uikit/icons/Dots/Dots";
import {user} from "../AsideBar/AsideBar";
import pet1 from '../../utils/assets/pet1.png'
import pet2 from '../../utils/assets/pet2.png'

interface PostItemProps {
    item: {
        userId?: number
        id: number
        title?: string
        body?: string
    }
}

const PostItem = ({item}: PostItemProps) => {
    return (
        <li className="flex flex-col gap-[15px]">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-[10px]">
                    <img className="w-[40px] h-[40px] rounded-full" src={user.photo} alt="ava"/>
                    <div>
                        <p>{user.first_name} {user.last_name}</p>
                        <p className="text-[14px] font-[400] text-[#8A8A8A]">16.11.2023 , 19:28</p>
                    </div>
                </div>
                <Dots/>
            </div>
            <p className="text-[14px] font-[400]">{item.body}</p>
            <div className="flex gap-[10px]">
                <img className="rounded-[10px] flex-1" src={pet1} alt="img"/>
                <img className="rounded-[10px] flex-1" src={pet2} alt="img"/>
            </div>
        </li>
    );
};

export default PostItem;