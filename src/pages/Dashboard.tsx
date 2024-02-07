import React from 'react';
import Display from "../components/Display/Display";
import Header from "../components/Header/Header";
import AsideBar from "../components/AsideBar/AsideBar";
import {Outlet, RouterProvider} from "react-router-dom";
import MapAndAds from "../components/MapAndAds/Map";

const Dashboard = () => {
    return (
        <div>
            <Header/>
            <div className="container mx-auto grid lg:grid-cols-[1fr_2fr_1.5fr] lg:gap-[20px]">
                <AsideBar/>
                <Outlet/>
                <MapAndAds/>
            </div>
        </div>
    );
};

export default Dashboard;