import { Outlet } from "react-router-dom";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeMain from "./HomeMain/HomeMain";
import Footer from "../Footer/Footer";

const HomeLayout = () => {
    return (
        <>
            <HomeHeader/>
            <HomeMain/>
            <Footer/>
        </>
    )
}

export default HomeLayout;