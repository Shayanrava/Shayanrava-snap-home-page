import React from 'react'

export default function WhySnap() {
    const descriptions = [
        { url: "210x190-easy.png", title: "آسان", description: "برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است وارد اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید." },
        { url: "210x190-fast.png", title: "سریع", description: "قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست." },
        { url: "210x190-eco.png", title: "به صرفه", description: "سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند تا بهترین خدمات را با قیمتی منطقی دریافت کنید." }
    ]
    return (
        <div className=' w-full font-iran-sans'>
            <div dir='rtl' className='flex flex-wrap gap-8 w-full'>
                <div className='w-full lg:w-[55%]'>
                    <img src="super-app.jpg" className='h-auto object-cover lg:h-[500px] xl:h-auto w-full' alt="" />
                </div>
                <div className='w-full px-2 py-1 md:px-9 md:py-6  lg:w-[40%] '>
                    <h1 className=' font-iran-sans-b text-2xl'>
                        سوپر اپ اسنپ؛ پاسخی به تمام نیازها
                    </h1>
                    <p className='my-7 text-sm leading-6 text-justify text-[#252A3C] font-medium'>
                        اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت
                        در حوزه‌ی تردد شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ اسنپ راه‌حلی جدید و ساده است که با استفاده از آن تنها با یک
                        اپلیکیشن می‌توانید علاوه بر درخواست خودرو، موتور و وانت از خدمات متعددی از جمله سفارش غذا، پزشک و مشاور
                        آنلاین، خرید از سوپرمارکت‌ها و فروشگاه‌ها، اسباب‌کشی، خرید بلیط (هواپیما، اتوبوس، قطار)، رزرو هتل، پرداخت قبض و خرید
                        شارژ استفاده کنید.
                    </p>
                </div>
            </div>

            <div dir="rtl" className='w-full flex justify-center '>
                <div className='w-full flex flex-wrap justify-center gap-10 md:gap-7 lg:gap-14'>

                    {
                        descriptions.map((des) => {
                            return (
                                <div className='w-full px-3 -translate-y-0  sm:p-0 sm:px-0 sm:w-[40%] md:w-1/4  lg:px-5 lg:-translate-y-28 lg:p-8 xl:-translate-y-32'>
                                    <div className='flex justify-center shadow-lg shadow-gray-400 bg-gray-100 rounded-2xl'>
                                        <img src={des.url} width={210} height={190} alt="" />
                                    </div>
                                    <div className='py-3 xl:py-4'>
                                        <h4 className=' font-iran-sans-b '> {des.title}</h4>
                                        <p className='py-3  text-sm font-medium text-[#252A3C] xl:py-4'> {des.description} </p>
                                    </div>
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </div>
    )
}
