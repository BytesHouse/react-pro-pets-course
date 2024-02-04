import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {store} from "../../store/redux-store";
import { Provider } from 'react-redux'
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/login",
    element: <Login/>,
  }
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
