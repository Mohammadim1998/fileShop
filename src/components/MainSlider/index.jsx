"use client";
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { GrFormNext } from "react-icons/gr";

// Import Swiper styles
import './styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Controller } from 'swiper/modules';

const MainSlider = () => {

    return (
        <div className="w-full mb-[200px]">
            <div className="relative pt-6 md:pt-0 w-full mainSlider flex flex-col justify-center items-center">
                <div className="hidden sm:flex mb-24"><img src="/images/mainSlider/pic/title.png" alt="title" /></div>
                <div className="flex sm:hidden mb-10"><img src="/images/mainSlider/pic/titleMobile.png" alt="titleMobile" /></div>

                <div className="absolute top-[59%] right-0 w-[18%]"><img src="/images/mainSlider/pic/Vector.png" alt="Vector" /></div>
                <div className="absolute top-[59%] left-0 w-[18%]"><img src="/images/mainSlider/pic/Vector.png" alt="Vector" /></div>

                <div className="absolute block sm:hidden top-[335px] right-0"><img src="/images/newCourses/pic/Vector.png" alt="Vector" className="" /></div>
                <div className="absolute block sm:hidden top-[335px] left-0 rotate-180"><img src="/images/newCourses/pic/Vector.png" alt="Vector" className="" /></div>


                <div className="main-slider relative w-[63%] h-[262px] md:h-[349px] mx-auto">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            el: '.main-slider.swiper-pagination',
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: '.main-slider.swiper-button-next',
                            prevEl: '.main-slider.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        className="main-slider"
                    >
                        <SwiperSlide>
                            <div className="relative w-full h-full rounded-[26px]">

                                <img src="/images/mainSlider/pic/img-1.jpg" alt="" className='w-full h-full rounded-[26px]' />

                                <div className="absolute bottom-0 left-0 right-0 bg-[#222121b6] flex flex-col sm:flex-row sm:justify-start justify-center gap-y-2 sm:gap-y-0 items-center gap-x-4 px-[21px] sm:px-[35px] py-8">
                                    <span className="text-white font-bold text-sm">رویداد نقش مبلغین در فرهنگ عاشورا</span>
                                    <div className='w-[1px] h-[20px] hidden sm:block leading-6 bg-[#CCC7C7]'></div>
                                    <span className="text-white text-xs font-light">سومین نشست مبلغین  حوزه هنری در خصوص ترویج سبک زندگی عاشورایی</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-full h-full rounded-[26px]">

                                <img src="/images/mainSlider/pic/img-2.jpg" alt="" className='w-full h-full rounded-[26px]' />

                                <div className="absolute bottom-0 left-0 right-0 bg-[#222121b6] flex flex-col sm:flex-row sm:justify-start justify-center gap-y-2 sm:gap-y-0 items-center gap-x-4 h-[92px] sm:h-[57px] px-[21px] sm:px-[35px]">
                                    <span className="text-white font-bold text-sm">رویداد نقش مبلغین در فرهنگ عاشورا</span>
                                    <div className='w-[1px] h-[30%] hidden sm:block leading-6 bg-[#CCC7C7]'></div>
                                    <span className="text-white text-xs font-light">سومین نشست مبلغین  حوزه هنری در خصوص ترویج سبک زندگی عاشورایی</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-full h-full rounded-[26px]">

                                <img src="/images/mainSlider/pic/img-3.jpg" alt="" className='w-full h-full rounded-[26px]' />

                                <div className="absolute bottom-0 left-0 right-0 bg-[#222121b6] flex flex-col sm:flex-row sm:justify-start justify-center gap-y-2 sm:gap-y-0 items-center gap-x-4 h-[92px] sm:h-[57px] px-[21px] sm:px-[35px]">
                                    <span className="text-white font-bold text-sm">رویداد نقش مبلغین در فرهنگ عاشورا</span>
                                    <div className='w-[1px] h-[30%] hidden sm:block leading-6 bg-[#CCC7C7]'></div>
                                    <span className="text-white text-xs font-light">سومین نشست مبلغین  حوزه هنری در خصوص ترویج سبک زندگی عاشورایی</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-full h-full rounded-[26px]">

                                <img src="/images/mainSlider/pic/img-4.jpg" alt="" className='w-full h-full rounded-[26px]' />

                                <div className="absolute bottom-0 left-0 right-0 bg-[#222121b6] flex flex-col sm:flex-row sm:justify-start justify-center gap-y-2 sm:gap-y-0 items-center gap-x-4 h-[92px] sm:h-[57px] px-[21px] sm:px-[35px]">
                                    <span className="text-white font-bold text-sm">رویداد نقش مبلغین در فرهنگ عاشورا</span>
                                    <div className='w-[1px] h-[30%] hidden sm:block leading-6 bg-[#CCC7C7]'></div>
                                    <span className="text-white text-xs font-light">سومین نشست مبلغین  حوزه هنری در خصوص ترویج سبک زندگی عاشورایی</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-full h-full rounded-[26px]">

                                <img src="/images/mainSlider/pic/img-5.jpg" alt="" className='w-full h-full rounded-[26px]' />

                                <div className="absolute bottom-0 left-0 right-0 bg-[#222121b6] flex flex-col sm:flex-row sm:justify-start justify-center gap-y-2 sm:gap-y-0 items-center gap-x-4 h-[92px] sm:h-[57px] px-[21px] sm:px-[35px]">
                                    <span className="text-white font-bold text-sm">رویداد نقش مبلغین در فرهنگ عاشورا</span>
                                    <div className='w-[1px] h-[30%] hidden sm:block leading-6 bg-[#CCC7C7]'></div>
                                    <span className="text-white text-xs font-light">سومین نشست مبلغین  حوزه هنری در خصوص ترویج سبک زندگی عاشورایی</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-full h-full rounded-[26px]">

                                <img src="/images/mainSlider/pic/img-6.jpg" alt="" className='w-full h-full rounded-[26px]' />

                                <div className="absolute bottom-0 left-0 right-0 bg-[#222121b6] flex flex-col sm:flex-row sm:justify-start justify-center gap-y-2 sm:gap-y-0 items-center gap-x-4 h-[92px] sm:h-[57px] px-[21px] sm:px-[35px]">
                                    <span className="text-white font-bold text-sm">رویداد نقش مبلغین در فرهنگ عاشورا</span>
                                    <div className='w-[1px] h-[30%] hidden sm:block leading-6 bg-[#CCC7C7]'></div>
                                    <span className="text-white text-xs font-light">سومین نشست مبلغین  حوزه هنری در خصوص ترویج سبک زندگی عاشورایی</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-full h-full rounded-[26px]">

                                <img src="/images/mainSlider/pic/img-7.jpg" alt="" className='w-full h-full rounded-[26px]' />

                                <div className="absolute bottom-0 left-0 right-0 bg-[#222121b6] flex flex-col sm:flex-row sm:justify-start justify-center gap-y-2 sm:gap-y-0 items-center gap-x-4 h-[92px] sm:h-[57px] px-[21px] sm:px-[35px]">
                                    <span className="text-white font-bold text-sm">رویداد نقش مبلغین در فرهنگ عاشورا</span>
                                    <div className='w-[1px] h-[30%] hidden sm:block leading-6 bg-[#CCC7C7]'></div>
                                    <span className="text-white text-xs font-light">سومین نشست مبلغین  حوزه هنری در خصوص ترویج سبک زندگی عاشورایی</span>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                    <div className="absolute top-[120%] left-[50%] translate-x-[-50%]">
                        <div className="main-slider swiper-button-next bg-[#2C3370] rotate-180"><GrFormNext className='text-white ' /></div>
                        <div className="main-slider swiper-button-prev bg-gray-400"><GrFormNext /></div>
                    </div>

                <div class="main-slider hidden md:block swiper-pagination bg-[#171B58]"></div>
                </div>
            </div>
        </div>
    );
}

export default MainSlider;