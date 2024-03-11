import React from 'react';
import Logo from "../../uikit/Logo/Logo";

const Footer = () => {
    return (
        <footer className="py-[20px] bg-[#266F62]">
            <div className="container px-[10px] mx-auto flex items-center gap-[20px] text-white">
                <Logo/>
                <p>Copyright © 2024 ProPets Inc.</p>
            </div>
        </footer>
    );
};

export default Footer;