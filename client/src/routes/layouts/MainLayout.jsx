import React from 'react'
import "./mainLayout.css"
import LeftBar from '../../components/leftBar/leftBar'
import Topbar from '../../components/topBar/Topbar'
import Gallery from '../../components/gallery/Gallery'
import { Outlet } from 'react-router'

const MainLayout = () => {
    return (
        <div className='app'>
            <LeftBar />
            <div className='content'>
                <Topbar />
                <Outlet  />
            </div>
        </div>
    )
}

export default MainLayout