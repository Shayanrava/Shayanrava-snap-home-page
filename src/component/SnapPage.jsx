import React from 'react'
import Navbar from './Navbar'
import Description from './Description'
import SourceDownload from './SourceDownload'
import Services from './Services'
import Slider from './Slider'
import WhySnap from './WhySnap'
import DriversClub from './DriversClub'


export default function SnapPage() {
    return (
        <div className=''>
            <div dir='rtl ' className='flex flex-col justify-center items-center'>
                <Navbar></Navbar>
                <Description></Description>
                <SourceDownload></SourceDownload>
                <Services></Services>
                <Slider></Slider>
                <WhySnap></WhySnap>
                <DriversClub></DriversClub>
            </div>
        </div>
    )
}
