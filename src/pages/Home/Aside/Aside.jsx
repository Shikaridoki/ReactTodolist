import React, {useContext, useState} from 'react';
import {CustomContext} from "../../../Utils/Context";

import './aside.scss'

import 'react-toastify/dist/ReactToastify.css';
import AsideAll from "./AsideAll/AsideAll";
import AsideMenu from "./AsideMenu/AsideMenu";
import CreateCategory from "./CreateCategory/CreateCategory";

const Aside = () => {




    const {logOutUser} = useContext(CustomContext)







    return (
        <aside className='aside'>
            <button className="aside__leave" onClick={logOutUser}>Выйти</button>
            <AsideAll/>
            <AsideMenu/>

            <CreateCategory/>




        </aside>
    );
};

export default Aside;