import React,{useContext} from 'react';
import {CustomContext} from "../../Utils/Context";
import Aside from "./Aside/Aside";
import {Navigate} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import HomeContent from "./HomeContent/HomeContent";
import './home.scss'

const Home = () => {
    const {user} = useContext(CustomContext)

    if (user.email.length === 0){
        return <Navigate to={'/login'}/>
    }
    return (
        <section className='home'>
            <Aside/>
            <HomeContent/>
            <ToastContainer/>
        </section>
    );
};

export default Home;