import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Compunents/Home/Home/Home/Home";
// import AddmissonCart from "../Compunents/Addmisson/AddmissonCart";
import Addmisson from "../Compunents/Addmisson/Addmisson";
import College from "../Compunents/College/College";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/college",
          element: <College></College>
        },
        
        {
          path: "/admission",
          element: <Addmisson></Addmisson>
        }
      ]
      
    },
  ]);