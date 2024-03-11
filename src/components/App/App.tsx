import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {store} from "../../store/redux-store";
import { Provider } from 'react-redux'
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/Login";
import News from "../../pages/News";
import Maps from "../../pages/Maps";
import Wanted from "../../pages/Wanted";
import Wiki from "../../pages/Wiki";
import Messenger from "../../pages/Messenger";
import Friends from "../../pages/Friends";
import Groups from "../../pages/Groups";
import AsideBar from "../AsideBar/AsideBar";
import Display from "../Display/Display";
import MapAndAds from "../MapAndAds/Map";
import Header from "../Header/Header";
import Profile from "../../pages/Profile";
import Help from "../../pages/Help";
import Store from "../../pages/Store";
import Shelters from "../../pages/Shelters";
import Teams from "../../pages/Teams";
import Services from "../../pages/Services";
import Registration from "../../pages/Registration";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard/>,
    children: [
      {
        path: "profile",
        element: <Profile/>,
      },
      {
        path: "news",
        element: <News/>,
      },
      {
        path: "maps",
        element: <Maps/>,
      },
      {
        path: "wanted",
        element: <Wanted/>,
      },
      {
        path: "wiki",
        element: <Wiki/>,
      },
      {
        path: "messenger",
        element: <Messenger/>,
      },
      {
        path: "friends",
        element: <Friends/>,
      },
      {
        path: "groups",
        element: <Groups/>,
      },
      {
        path: "help",
        element: <Help/>,
      },
      {
        path: "store",
        element: <Store/>,
      },
      {
        path: "shelters",
        element: <Shelters/>,
      },
      {
        path: "teams",
        element: <Teams/>,
      },
      {
        path: "services",
        element: <Services/>,
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/registration",
    element: <Registration/>,
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
