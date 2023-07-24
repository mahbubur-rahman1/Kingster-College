import { Outlet } from "react-router-dom";
import Navbar from "../Compunents/Navbar/Navbar";
import Footer from "../Compunents/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;