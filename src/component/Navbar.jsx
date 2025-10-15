import React, { useState } from 'react'
import Drawer from './Drawer'

export default function Navbar() {
    const [drawer, setDrawer] = useState(false)
    return (
        <div className='w-full flex justify-center fixed top-0 left-0 bg-white z-10'>
            <div className='md:hidden flex justify-between flex-nowrap w-full py-5 px-10 '>
                <a href="www.snap.ir">
                    <img src="/snappTextLogo.svg" alt="" />
                </a>
                <button className='text-green-600 ' onClick={() => setDrawer(!drawer)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </button >
            </div>
            <Drawer isHidden={drawer} setIsHidden={setDrawer}></Drawer>

            {/* w >= md */}
            <div dir='rtl' className=' my-10 hidden  px-14  md:font-medium md:text-[.8rem] md:flex md:w-full md:gap-x-5 lg:px-0 lg:gap-x-8 lg:text-[.9rem] lg:w-4/5 xl:text-[1rem] xl:w-3/4 xl:font-normal  font-iran-sans'>
                <div >
                    <a href="www.snap.ir">
                        <img src="/snappTextLogo.svg" alt="" />
                    </a>
                </div>
                <div className='group/item transition duration-500 hover:text-green-500 relative flex  cursor-pointer '>
                    سوپراپ اسنپ
                    <i className='flex items-center mr-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </i>
                    <ul className='hidden group-hover/item:flex flex-col bg-white border border-gray-400 rounded-lg text-black   absolute top-6 list-none w-[180px] py-4 px-3 gap-2 z-50'>
                        <li className='transition duration-500 hover:text-green-500'> درخواست تاکسی </li>
                        <li className='transition duration-500 hover:text-green-500'> پیک موتوری </li>
                        <li className='transition duration-500 hover:text-green-500'> سفارش آنلاین غذا </li>
                        <li className='transition duration-500 hover:text-green-500'> سوپرمارکت آنلاین </li>
                        <li className='transition duration-500 hover:text-green-500'> اسنپ </li>
                        <li className='transition duration-500 hover:text-green-500'> رزرو بلیط هواپیما </li>
                        <li className='transition duration-500 hover:text-green-500'> رزرو هتل </li>
                        <li className='transition duration-500 hover:text-green-500'> رزرو بلیط قطار </li>
                        <li className='transition duration-500 hover:text-green-500'> رزرو بلیط اتوبوس </li>
                        <li className='transition duration-500 hover:text-green-500'> درخواست وانت بار </li>
                        <li className='transition duration-500 hover:text-green-500'> خدمات اسباب کشی </li>
                        <li className='transition duration-500 hover:text-green-500'> فروشگاه اسنپ </li>
                        <li className='transition duration-500 hover:text-green-500'> سرویس اعتباری </li>
                        <li className='transition duration-500 hover:text-green-500'> اسنپ بیمه </li>
                        <li className='transition duration-500 hover:text-green-500'> پزشک و مشاور </li>
                        <li className='transition duration-500 hover:text-green-500'> اسنپ پرو </li>
                        <li className='transition duration-500 hover:text-green-500'> سرمایه گذاری </li>
                        <li className='transition duration-500 hover:text-green-500'> خرید شارژ و اینترنت </li>
                    </ul>
                </div>
                <div className='transition duration-500 hover:text-green-500'>
                    <a href=' '> ثبت نام راننده اسنپ </a>
                </div>
                <div className='transition duration-500 hover:text-green-500'>
                    <a href=' '> باشگاه رانندگان </a>
                </div>
                <div className='transition duration-500 hover:text-green-500'>
                    <a href=' '>  پنل سازمانی </a>
                </div>
                <div className='transition duration-500 hover:text-green-500'>
                    <a href=' '> بلاگ  </a>
                </div>
                <div className='group/item transition duration-500 hover:text-green-500 relative flex  cursor-pointer '>
                    درباره اسنپ
                    <i className='flex items-center mx-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </i>
                    <ul className='hidden group-hover/item:flex flex-col bg-white border border-gray-400 rounded-lg text-black absolute top-6 list-none w-[180px] py-4 px-3 gap-2 z-50'>
                        <li className='transition duration-500 hover:text-green-500'> فرصت های شغلی </li>
                        <li className='transition duration-500 hover:text-green-500'> درباره ما </li>
                        <li className='transition duration-500 hover:text-green-500'> تماس با ما </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}