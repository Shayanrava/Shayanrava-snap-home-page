import React, { useEffect, useState } from 'react'

export default function Slider() {
    const [indexSlide, setindexSlide] = useState(0)
    const [resetTimer, setResetTimer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setindexSlide((prev) => (prev + 1) % 4);
        }, 5000);

        return () => clearInterval(interval);
    }, [resetTimer]);


    function handleClick (i) {
        setindexSlide(i);
        setResetTimer((prev) => prev + 1); 
    };

    return (
        <div className='my-24 w-full' >
            <div className='w-full flex justify-center relative '>
                <a dir='rtl' href=' ' className='w-11/12 h-[200px] flex shadow-xl shadow-gray-400 rounded-xl sm:h-[270px] lg:h-[360px] xl:w-3/4 '>
                    <img className={`transition-all duration-1000 ${indexSlide === 0 ? "w-full" : "w-0"}  rounded-xl object-cover  h-full`} src='slide/Club.jpg' alt="" />
                    <img className={`transition-all duration-1000 ${indexSlide === 1 ? "w-full" : "w-0"}  rounded-xl object-cover  h-full`} src='slide/Food.jpg' alt="" />
                    <img className={`transition-all duration-1000 ${indexSlide === 2 ? "w-full" : "w-0"}  rounded-xl object-cover  h-full`} src='slide/taxidiscountclub.webp' alt="" />
                    <img className={`transition-all duration-1000 ${indexSlide === 3 ? "w-full" : "w-0"}  rounded-xl object-cover  h-full`} src='slide/Market.jpg' alt="" />
                </a>
                <div className='md:bg-[rgba(255,255,255,0.2)] md:backdrop-blur-sm rounded-full absolute left-1/2 bottom-[7%] -translate-x-1/2 '>
                    <div dir='rtl' className='flex gap-4 md:gap-4 md:px-3 md:py-2  lg:gap-2 lg:px-2 lg:py-1'>
                        <buttton className={`${indexSlide === 0 ? "bg-white" : "bg-[rgba(0,0,0,0.5)]"} rounded-full cursor-pointer size-7 md:size-6 lg:size-4`} onClick={() => handleClick(0)} >  </buttton>
                        <buttton className={`${indexSlide === 1 ? "bg-white" : "bg-[rgba(0,0,0,0.5)]"} rounded-full cursor-pointer size-7 md:size-6 lg:size-4`} onClick={() => handleClick(1)} >  </buttton>
                        <buttton className={`${indexSlide === 2 ? "bg-white" : "bg-[rgba(0,0,0,0.5)]"} rounded-full cursor-pointer size-7 md:size-6 lg:size-4`} onClick={() => handleClick(2)} >  </buttton>
                        <buttton className={`${indexSlide === 3 ? "bg-white" : "bg-[rgba(0,0,0,0.5)]"} rounded-full cursor-pointer size-7 md:size-6 lg:size-4`} onClick={() => handleClick(3)} >  </buttton>
                    </div>
                </div>
            </div>
        </div>
    )
}
