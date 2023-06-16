import React, { useState } from 'react'
import './style.css';
import Navbar from './Navbar';
import MenuCards from './MenuCards';
import MenuApi from './menuApi.js'

const uniqueList = [...new Set(MenuApi.map((navList) => navList.category)), "All"];

const Resturent = () => {
    const [menuData, setMenuData] = useState(MenuApi);
    const [navList, setNavlist] = useState(uniqueList);

    const filterList = (category) => {
        if (category === "All"){
            setMenuData(MenuApi);
            return;
        }
        const updateList = MenuApi.filter((currentList) => {
            return currentList.category === category;
        })
        setMenuData(updateList);
    }

    return (
        <>
            <Navbar navList={navList} filterList={filterList} />
            <MenuCards menuData={menuData} />
        </>
    )
}


export default Resturent;
