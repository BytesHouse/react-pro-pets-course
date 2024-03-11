import React from 'react';
import HeaderSecondary from "../components/HeaderSecondary/HeaderSecondary";
import FormRegistration from "../components/FormRegistration/FormRegistration";
import Footer from "../components/Footer/Footer";

const Registration = () => {
    return (
        <div className="flex flex-col h-screen">
            <HeaderSecondary/>
            <main className="bg-image h-full">
                <FormRegistration/>
            </main>
            <Footer/>
        </div>
    );
};

export default Registration;