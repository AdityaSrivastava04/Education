import React from 'react'
import Nav from '../../components/educator/Nav'
import SideBar from '../../components/educator/SideBar'
import { Outlet } from 'react-router-dom'
import FooterEdu from '../../components/educator/FooterEdu'

const Educator = () => {
    return (
    <div className='text-default min-h-screen bg-white'>
        <Nav/>
        <div className='flex'>
            <SideBar/>
            <div className='flex-1'>
                {<Outlet/>}
            </div>
        </div>
        <FooterEdu/>
    </div>
    )
}

export default Educator
