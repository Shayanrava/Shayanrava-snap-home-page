import React, { useState } from 'react'

export default function Drawer(props) {

    const [isDrawble, setIsDrawble] = useState(false)
    const [isDrawble2, setIsDrawble2] = useState(false)
    const [isDrawble3, setIsDrawble3] = useState(false)


    return (
        <div dir="rtl" className={`fixed top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-50 font-iran-sans transition-opacity duration-500 ${props.isHidden ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => props.setIsHidden(false)} >
            <div className={`transition-all duration-500 ${props.isHidden ? "w-4/5 sm:w-3/4" : "w-0"}   bg-white border-1 h-full sm:flex md:hidden text-black overflow-scroll`} onClick={(e) => e.stopPropagation()}>

                <ul className='w-full flex flex-col gap-10 '>
                    <button className='py-3 px-5' onClick={() => props.setIsHidden(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </button>
                    <button className=' border-b border-gray-100 ' onClick={() => setIsDrawble(!isDrawble)}>
                        <li className='flex justify-between items-center px-6 '>
                            <div>
                                سوپراپ اسنپ
                            </div>
                            <i className={`transition duration-700 ${isDrawble && "rotate-180"} `}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                </svg>
                            </i>
                        </li>
                        <ul className={` overflow-hidden transition-all duration-500 ${isDrawble ? "max-h-[1000px]" : "max-h-0 min"} flex flex-col justify-start items-start px-6 mt-8 text-black list-none w-full  gap-3`}>
                            <li className={`transition duration-700 ${isDrawble ? "opacity-100" : "opacity-0"} hover:text-green-500`}> درخواست تاکسی </li>
                            <li className={`transition duration-700 ${isDrawble ? "opacity-100" : "opacity-0"} hover:text-green-500`}> پیک موتوری </li>
                            <li className={`transition duration-700 ${isDrawble ? "opacity-100" : "opacity-0"} hover:text-green-500`}> سفارش آنلاین غذا </li>
                            <li className={`transition duration-700 ${isDrawble ? "opacity-100" : "opacity-0"} hover:text-green-500`}> سوپرمارکت آنلاین </li>
                            <li className={`transition duration-700 ${isDrawble ? "opacity-100" : "opacity-0"} hover:text-green-500`}> اسنپ </li>
                            <li className={`transition duration-700 ${isDrawble ? "opacity-100" : "opacity-0"} hover:text-green-500`}> رزرو بلیط هواپیما </li>
                            <li className={`transition duration-700 ${isDrawble ? "opacity-100" : "opacity-0"} hover:text-green-500`}> رزرو هتل </li>
                            <li className={`transition duration-700 ${isDrawble ? "opacity-100" : "opacity-0"} hover:text-green-500`}> رزرو بلیط قطار </li>
                            <li className={`transition duration-700 ${isDrawble ? "opacity-100" : "opacity-0"} hover:text-green-500`}> رزرو بلیط اتوبوس </li>
                            <li className={`transition duration-700 ${isDrawble ? "opacity-100" : "opacity-0"} hover:text-green-500`}> درخواست وانت بار </li>
                            <li className={`transition duration-700 ${isDrawble ? "opacity-100" : "opacity-0"} hover:text-green-500`}> خدمات اسباب کشی </li>
                            <li className={`transition duration-700 ${isDrawble ? "opacity-100" : "opacity-0"} hover:text-green-500`}> فروشگاه اسنپ </li>
                            <li className={`transition duration-700 ${isDrawble ? "opacity-100" : "opacity-0"} hover:text-green-500`}> سرویس اعتباری </li>
                            <li className={`transition duration-700 ${isDrawble ? "opacity-100" : "opacity-0"} hover:text-green-500`}> اسنپ بیمه </li>
                            <li className={`transition duration-700 ${isDrawble ? "opacity-100" : "opacity-0"} hover:text-green-500`}> پزشک و مشاور </li>
                            <li className={`transition duration-700 ${isDrawble ? "opacity-100" : "opacity-0"} hover:text-green-500`}> اسنپ پرو </li>
                            <li className={`transition duration-700 ${isDrawble ? "opacity-100" : "opacity-0"} hover:text-green-500`}> سرمایه گذاری </li>
                            <li className={`transition duration-700 ${isDrawble ? "opacity-100" : "opacity-0"} hover:text-green-500`}> خرید شارژ و اینترنت </li>
                        </ul>
                    </button>
                    <a href=" " >
                        <li className='px-6 flex'>
                            ثبت نام راننده اسنپ
                            <p className='text-green-500 mx-2'>
                                (سواری ،موتور و وانت)
                            </p>
                        </li>
                    </a>
                    <a href=" ">
                        <li className='px-6'>
                            باشگاه رانندگان
                        </li>
                    </a>
                    <a href=" ">
                        <li className='px-6'>
                            پنل سازمانی
                        </li>
                    </a>
                    <a href=" " >
                        <li className='px-6'>
                            بلاگ
                        </li>
                    </a>
                    <button onClick={() => setIsDrawble2(!isDrawble2)}>
                        <li className='flex justify-between items-center px-6'>
                            <div>
                                درباره اسنپ
                            </div>
                            <i className={`transition duration-700 ${isDrawble2 && "rotate-180"} `}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                </svg>
                            </i>
                        </li>
                        <ul className={` overflow-hidden transition-all duration-500 ${isDrawble2 ? "max-h-[1000px]" : "max-h-0"} flex flex-col justify-start items-start px-6 mt-8 text-black list-none w-full  gap-3`}>
                            <li className={`transition duration-700 ${isDrawble2 ? "opacity-100" : "opacity-0"} hover:text-green-500`}> فرصت های شغلی </li>
                            <li className={`transition duration-700 ${isDrawble2 ? "opacity-100" : "opacity-0"} hover:text-green-500`}> درباره ما </li>
                            <li className={`transition duration-700 ${isDrawble2 ? "opacity-100" : "opacity-0"} hover:text-green-500`}> تماس با ما </li>
                        </ul>
                    </button>
                    <button onClick={() => setIsDrawble3(!isDrawble3)}>
                        <li className='flex justify-between items-center border-t border-gray-100 px-6 py-7 text-green-500'>
                            <div>
                                اپلیکیشن اسنپ
                            </div>
                            <i className={`transition duration-700 ${isDrawble3 && "rotate-180"} `}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                </svg>
                            </i>
                        </li>
                        <ul className={` overflow-hidden transition-all duration-500 ${isDrawble3 ? "max-h-[1000px] pb-28" : "max-h-0"} flex flex-col justify-start items-start px-6  text-black list-none w-full  gap-5`}>
                            <li className={`transition duration-700 ${isDrawble3 ? "opacity-100" : "opacity-0"} text-gray-400 hover:text-green-500 flex gap-3`}>
                                <img src="/download-icon/directdownload-icon.png" alt="" />
                                <div> دانلود مستقیم </div>
                            </li>
                            <li className={`transition duration-700 ${isDrawble3 ? "opacity-100" : "opacity-0"} text-gray-400 hover:text-green-500 flex gap-3`}>
                                <img src="/download-icon/cafebazaar.png" alt="" />
                                <div> دانلود از کافه بازار </div>
                            </li>
                            <li className={`transition duration-700 ${isDrawble3 ? "opacity-100" : "opacity-0"} text-gray-400 hover:text-green-500 flex gap-3`}>
                                <img src="/download-icon/myketmarketicon.png" alt="" />
                                <div> دانلود از مایکت </div>
                            </li>
                            <li className={`transition duration-700 ${isDrawble3 ? "opacity-100" : "opacity-0"} text-gray-400 hover:text-green-500 flex gap-3`}>
                                <img src="/download-icon/snapp-pwa.png" alt="" />
                                <div> وب اپلیکیشن اسنپ (iOS)  </div>
                            </li>
                            <li className={`transition duration-700 ${isDrawble3 ? "opacity-100" : "opacity-0"} text-gray-400 hover:text-green-500 flex gap-3`}>
                                <img src="/download-icon/apple.png" alt="" />
                                <div> دانلود از اپ استور </div>
                            </li>
                        </ul>
                    </button>
                </ul>
            </div>
        </div>
    )
}
