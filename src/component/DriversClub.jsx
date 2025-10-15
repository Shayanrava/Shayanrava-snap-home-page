import React from 'react'

export default function DriversClub() {
    const feature = [
        { url: "/feature/180x100-income.png", title: "درآمد تضمینی + پاداش‌های ماهانه و هفتگی", description: "با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را افزایش دهید." },
        { url: "/feature/180x100-hour.png", title: "ساعت کاری دلخواه", description: "فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می‌توانید فعالیت خود را در هر ساعت از شبانه‌روز و متناسب با برنامه‌ی زندگی‌تان شخصی‌سازی کنید." },
        { url: "/feature/180x100-benefits.png", title: "مزایا و خدمات باشگاه رانندگان", description: "در باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از جمله خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی بهره‌مند شوید." },
        { url: "/feature/180x100-carfix.png", title: "کار‌فیکس", description: "باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه‌اندازی کرده است." },
        { url: "/feature/safety.svg", title: "امنیت سفر کاربران راننده در اسنپ", description: "اسنپ با ارائه سرویس امنیت سفر در اپلیکیشن رانندگان و بهبود مستمر امکانات امنیتی این سرویس، تلاش می‌‌کند تجربه سفر با اسنپ برای کاربران راننده امن‌ و مطمئن باشد." },
        { url: "/feature/support.svg", title: "پشتیبانی ۲۴ ساعته و سریع", description: "تیم پشتیبانی اسنپ در تمامی ساعت‌های شبانه‌روز پاسخگوی سوال‌ها و مشکلات کاربران راننده است. بخش «پشتیبانی» در اپلیکیشن رانندگان، سریع‌ترین راه ارتباطی شما با تیم پشتیبانی اسنپ است" },

    ]
    return (
        <div className='w-full font-iran-sans'>
            <div className='w-full py-3 bg-[rgba(233,247,238,1)] flex-col items-center '>
                <div className=' flex justify-center text-[#252A3C] font-iran-sans-b text-3xl my-5'>
                    <p className='text-center'> در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به ناوگان اسنپ بپیوندید </p>
                </div>

                <div className=' flex justify-center text-[#252A3C] text-xl'>
                    <p className='text-center'> بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام را اینترنتی انجام دهید </p>
                </div>
                <div className=' flex justify-center my-10'>
                    <a href=" " className='text-white bg-[#21AA58] py-2 px-7 rounded-lg hover:bg-[rgba(51,177,101,1)] font-iran-sans-b'>
                        ثبت نام رانندگان
                    </a>
                </div>
                <div className='w-full flex justify-center px-6 my-10'>
                    <video className='w-full rounded-xl lg:w-3/4 ' src="jazbranandeh1.mp4" controls></video>
                </div>
                <div dir='rtl' className='w-full flex justify-center flex-wrap gap-4 px-4 my-14 lg:px-6 lg:gap-6 xl:w-full'>

                    {
                        feature.map((i) => {
                            return (
                                <div className='w-full px-8 py-16 lg:w-[45%] xl:w-[40%] shadow-xl shadow-green-200 bg-white rounded-2xl'>
                                    <div className='flex justify-center w-full '>
                                        <img className='w-[80px] lg:w-[120px]' src={i.url} alt="" />
                                    </div>
                                    <div className='font-iran-sans-b py-3'>{i.title}</div>
                                    <div>{i.description}</div>
                                </div>
                            )
                        })
                    }


                </div>






            </div>
        </div>
    )
}
