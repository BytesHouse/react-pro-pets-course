import React from 'react';
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import EditIcon from "../../uikit/icons/EditIcon/EditIcon";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import AddIcon from "../../uikit/icons/AddIcon/AddIcon";
import {user} from "../AsideBar/AsideBar";
import CamIcon from "../../uikit/icons/CamIcon/CamIcon";
import ImageIcon from "../../uikit/icons/ImageIcon/ImageIcon";
import PhotoIcon from "../../uikit/icons/PhotoIcon/PhotoIcon";
import LinkIcon from "../../uikit/icons/LinkIcon/LinkIcon";

const NewPostArticle = () => {
    return (
        <div className="bg-white p-[15px] rounded-[15px] flex flex-col gap-[16px] drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <div className="flex gap-[16px]">
                <ButtonSecondary classes="text-[14px] font-[400] px-[16px] py-[8px]" icon={<EditIcon/>} text="New Post" />
                <ButtonPrimary classes="text-[#8A8A8A] text-[14px] font-[400]" icon={<AddIcon/>} text="New Article"/>
            </div>
            <div className="relative">
                <textarea placeholder="What’s on your mind?" className="px-[60px] py-[20px] outline-none w-full border rounded-[10px] resize-none" cols={30} rows={3}></textarea>
                <img className="absolute top-2 left-2 w-[40px] h-[40px] rounded-full" src={user.photo} alt="user"/>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-[16px]">
                    <button><CamIcon/></button>
                    <button><ImageIcon/></button>
                    <button><PhotoIcon/></button>
                    <button><LinkIcon/></button>
                </div>
                <ButtonSecondary classes="font-[400] text-[14px] px-[16px] py-[8px]" icon={<></>} text="Publish"/>
            </div>
        </div>
    );
};

export default NewPostArticle;