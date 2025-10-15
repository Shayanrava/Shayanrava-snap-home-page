import React from 'react'

export default function Services() {
    const serviceArr = [
        { url: 'service-photo/taxi.svg', title: 'تاکسی اینترنتی', description: 'درخواست آنلاین خودرو' },
        { url: 'service-photo/food.svg', title: 'سفارش آنلاین غذا', description: 'سفارش غذا، نان و شیرینی با اسنپ' },
        { url: 'service-photo/Market-Orange-Final.png', title: 'سوپرمارکت آنلاین', description: 'تهیه اقلام روزانه با اسنپ' },
        { url: 'service-photo/bike.svg', title: 'پیک موتوری', description: 'حمل و نقل انواع بسته' },
        { url: 'service-photo/pickup.svg', title: 'درخواست وانت', description: 'حمل و نقل انواع بار' },
        { url: 'service-photo/Credit.svg', title: 'سرویس اعتباری', description: 'خرید قسطی با اسنپ' },
        { url: 'service-photo/fdom-t.png', title: 'خرید بلیط هواپیما', description: 'خرید بلیط پرواز داخلی' },
        { url: 'service-photo/intflight.svg', title: 'بلیط هواپیما خارجی', description: 'خرید بلیط پرواز خارجی' },
        { url: 'service-photo/hotel.svg', title: 'رزرو هتل', description: 'رزرو آنلاین هتل' },
        { url: 'service-photo/bus.svg', title: 'بلیط اتوبوس', description: 'گردشگری با اسنپ' },
        { url: 'service-photo/train.svg', title: 'بلیط قطار', description: 'گردشگری با اسنپ' },
        { url: 'service-photo/shop.svg', title: 'فروشگاه اسنپ', description: 'فروشگاه اینترنتی اسنپ' },
        { url: 'service-photo/doctor.svg', title: 'پزشک و مشاور', description: 'درمان با اسنپ' },
        { url: 'service-photo/pharmacy.svg', title: 'داروخانه', description: 'داروخانه آنلاین اسنپ' },
        { url: 'service-photo/Insurance.png', title: 'بیمه', description: 'خرید آنلاین بیمه با اسنپ' },
        { url: 'service-photo/moving.svg', title: 'اسباب‌کشی منزل', description: 'خدمات اسباب کشی' },
        { url: 'service-photo/driver.svg', title: 'ثبت نام راننده', description: 'ثبت نام تاکسی اینترنتی اسنپ' },
        { url: 'service-photo/club.svg', title: 'اسنپ! ‌کلاب', description: 'باشگاه مشتریان اسنپ!' },
        { url: 'service-photo/Investemnt-New Color.png', title: 'سرمایه‌گذاری', description: 'سرمایه‌گذاری پرسود و کم‌ریسک با اسنپ' },
        { url: 'service-photo/wallet.png', title: 'خرید شارژ', description: 'خرید آنلاین شارژ' },
        { url: 'service-photo/wallet.png', title: 'خرید بسته اینترنت', description: 'خرید بسته اینترنت' },
        { url: 'service-photo/Pro.png', title: 'اسنپ پرو', description: 'اشتراک حرفه‌ای اسنپ' },
        { url: 'service-photo/foodroicon.svg', title: 'فودرو', description: 'بدون تخفیف رستوران نرو' }
    ]
    return (
        <div className='w-full '>
            <div className='w-full flex flex-col item-center  font-iran-sans '>
                <div className='flex justify-center text-xl  my-16 md:text-3xl font-iran-sans-b'>
                    <p className='text-[#414141]'>
                        یک اپلیکیشن، برای تمام نیازها
                    </p>
                </div>

                <div dir='rtl' className='flex  justify-center w-full '>
                    <div className='flex flex-wrap justify-center gap-6 w-full lg:gap-10 xl:w-5/6 '>
                        {
                            serviceArr.map((service, index) => {
                                return (
                                    <a key={index} href=' ' className='w-1/4 flex flex-col  transition-all duration-300 bg-white shadow-xl shadow-green-50/50  border-gray-200 rounded-lg p-1 md:hover:shadow-green-600 md:border lg:flex-row md:hover:bg-[rgba(158,156,156,0.15)] md:hover:-translate-y-2'>
                                        <div className='flex justify-center lg:justify-end '>
                                            <img className='h-[48px] w-[48px] lg:h-[62px] lg:w-[62px] ' src={service.url} alt="" />
                                        </div>
                                        <div className='flex flex-col justify-center items-center lg:items-start w-full  lg:w-4/5 lg:mx-2'>
                                            <p className='font-iran-sans-b text-xs text-center my-1'>{service.title}</p>
                                            <p className='text-gray-500 hidden text-sm text-center md:block lg:text-start'>{service.description}</p>
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
