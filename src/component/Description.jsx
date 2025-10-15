import React from 'react'

export default function Description() {
    return (
        <div dir='rtl' className='w-full flex mx-5 font-iran-sans mt-24'>
            <div className='w-full lg:w-1/2 bg-[#21aa58] text-white flex justify-center  '>
                <div className='flex flex-col  items-dcenter px-5 py-6 w-full md:w-3/4 lg:w-5/6 xl:w-4/5'>
                    <div >
                        <p className=' text-4xl font-bold  text-start leading-[1.75] '>
                            تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن اسنپ!
                        </p>
                    </div>

                    <div className='my-8'>
                        <p className='text-xl  text-start leading-10 '>
                            از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر، رزرو هتل و... را میتوانید با اسنپ انجام دهید.
                        </p>
                    </div>

                    <div dir='rtl' className='hidden md:flex w-full'>
                        <input type="text" className='bg-[#21aa58] border-b w-2/5 outline-none  placeholder:text-white ' placeholder='09xxxxxxxxx' />

                        <button className='bg-white text-[#21aa58] px-5 py-2 mx-8 rounded-lg text-sm font-medium hover:bg-gray-100'> ارسال لینک </button>
                    </div>

                    <div>
                        <button className='hidden lg:inline-block w-full border border-[#eee] text-[#eee] rounded-lg my-7 py-3 font-black  hover:bg-[rgba(255,255,255,.15)]'>
                            ورود به وب اپلیکیشن اسنپ
                        </button>
                        <button className='inline-block lg:hidden w-full rounded-lg my-7 py-4 bg-white text-black'>
                             دانلود اپلیکیشن اسنپ
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-0 lg:w-1/2 -scale-x-100 '>
                <img className='object-cover h-full w-full' src="/intro.jpg" alt="" />
            </div>
        </div>
    )
}
