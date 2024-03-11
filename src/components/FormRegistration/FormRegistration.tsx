import React from 'react';
import LogoSecondary from "../../uikit/Logo/LogoSecondary";

const FormRegistration = () => {
    return (
        <div className="w-full h-full relative">
            <div className="rounded-[15px] p-[15px] bg-white max-w-[820px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <form>
                    <LogoSecondary/>
                    <p className="text-[27px] font-[700]">Getting Started Now</p>
                    <p>Enter your credentials to access your account</p>
                    <div>
                        Social buttons
                    </div>
                    <div className="py-[11px] relative">
                        <hr/>
                        <p className="bg-white px-[10px] absolute top-0 left-[50%] -translate-x-[50%]">Or</p>
                    </div>
                    <div className="flex flex-col">
                        <label className="mt-[10px]" htmlFor="email">E-mail</label>
                        <input className="mt-[5px] py-[8px] px-[10px] border rounded-[10px]" name="email" type="email" placeholder="Enter your email or number"/>
                        <label className="mt-[10px]" htmlFor="name">Name</label>
                        <input className="mt-[5px] py-[8px] px-[10px] border rounded-[10px]" name="name" type="text" placeholder="Enter your name"/>
                        <label className="mt-[10px]" htmlFor="">Password</label>
                        <input className="mt-[5px] py-[8px] px-[10px] border rounded-[10px]" type="password" placeholder="Enter your password"/>
                        <p className="text-[#FF7171]">Слишком короткий пароль</p>
                        <label htmlFor="country">Select your Country</label>
                        <select name="country">
                            <option>Moldova</option>
                        </select>
                        <div className="flex items-center gap-[5px]">
                            <input type="checkbox"/>
                            <p>I agree with <span>Terms & Privacy</span></p>
                        </div>
                        <input className="rounded-[10px] py-[8px] bg-[#266F62] text-white" type="submit" value="Login"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormRegistration;