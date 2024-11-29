"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrFormNext } from "react-icons/gr";

// Import Swiper styles
import './new-courses.css';
import './courses.css';
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Box from './Box';
import EducationBox from './EducationBox';
import EducationMobileBox from './EducationMobileBox';
import BoxCourse from './BoxCourse';

const NewCourses = () => {
    return (
        <div className="relative w-full pb-[150px] sm:pb-[200px]">
            <div className="absolute hidden sm:block top-[278px] right-0"><img src="/images/newCourses/pic/Vector.png" alt="Vector" className="" /></div>
            <div className="absolute hidden sm:block top-[278px] left-0 rotate-180"><img src="/images/newCourses/pic/Vector.png" alt="Vector" className="" /></div>

            <div className="w-1/2 hidden md:flex justify-between items-center translate-x-[-80%] lg:translate-x-[-85%] mb-8 sm:mb-[74px]">
                <div className="flex flex-col justify-center items-center gap-y-4">
                    <span className="text-[#2C3370] font-normal text-[15px]">مسیر های آموزشی</span>
                    <span className="text-[#2C3370] font-bold text-2xl">جدیدترین مسیر های آموزشی</span>
                </div>

                <div className="flex justify-center items-center gap-x-4">
                    <span className="text-[#2C3370] font-semibold text-xs">مشاهده بیشتر</span>
                    <div className=""><img src="/images/newCourses/svg/leftArrow.svg" alt="" /></div>
                </div>
            </div>

            <div className="w-full flex md:hidden flex-col justify-center items-center gap-y-4 mb-8 sm:mb-[74px]">
                <span className="text-[#2C3370] font-normal text-[15px]">مسیر های آموزشی</span>
                <span className="text-[#2C3370] font-bold text-2xl">جدیدترین مسیر های آموزشی</span>
            </div>

            {/***************************** SLIDER ONE ***************************************/}
            <div className="new-courses new-courses-custom relative new-courses w-[95%] sm:w-[75.5%] p-4 mx-auto mb-[188px]">
                <Swiper
                    spaceBetween={20}
                    loop={true}
                    navigation={{
                        nextEl: '.new-courses .swiper-button-next',
                        prevEl: '.new-courses .swiper-button-prev',
                    }}
                    modules={[Navigation]}
                    className="new-courses new-courses-custom"
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}
                >

                    <SwiperSlide><Box /></SwiperSlide>
                    <SwiperSlide><Box /></SwiperSlide>
                    <SwiperSlide><Box /></SwiperSlide>
                    <SwiperSlide><Box /></SwiperSlide>
                    <SwiperSlide><Box /></SwiperSlide>
                    <SwiperSlide><Box /></SwiperSlide>
                    <SwiperSlide><Box /></SwiperSlide>
                    <SwiperSlide><Box /></SwiperSlide>

                </Swiper>
                <div className='hidden md:block'>
                    <div className="new-courses hidden md:block swiper-button-next bg-[#2C3370]"><GrFormNext className='text-white ' /></div>
                    <div className="new-courses hidden md:block swiper-button-prev bg-gray-400 rotate-180"><GrFormNext /></div>
                </div>

                <div className="absolute -bottom-10 left-[50%] translate-x-[-50%] block md:hidden">
                    <div className="new-courses-custom swiper-button-next bg-[#2C3370] rotate-180"><GrFormNext className='text-white ' /></div>
                    <div className="new-courses-custom swiper-button-prev bg-gray-400"><GrFormNext /></div>
                </div>

            </div>
            {/***************************** END SLIDER ONE ***************************************/}

            {/************************************************************************************/}
            {/************************************************************************************/}
            {/************************************************************************************/}
            {/************************************************************************************/}
            {/************************************************************************************/}
            {/************************************************************************************/}

            <div className='mb-[88px]'>
                <EducationBox />
            </div>

            {/***************************** SLIDER TWO ***************************************/}

            <div className="courses coursesbg relative bg-[#2C3370] lg:bg-transparent w-full mx-auto rounded-t-[65px] md:rounded-t-none px-4 pb-8">
                <div className="absolute bottom-[-90px] left-[50%] translate-x-[-50%] -rotate-90"><img src="/images/newCourses/pic/Vector.png" alt="Vector" className="" /></div>

                <div className="-translate-y-16">
                    <EducationMobileBox />
                </div>

                <div className="w-1/2 hidden md:flex justify-between items-center translate-x-[-80%] lg:translate-x-[-85%] mb-8 sm:mb-[74px]">
                    <div className="flex flex-col justify-center items-center gap-y-4">
                        <span className="text-[#2C3370] font-normal text-[15px]">دوره ها</span>
                        <span className="text-[#2C3370] font-bold text-2xl">جدیدترین دوره های آموزشی</span>
                    </div>

                    <div className="flex justify-center items-center gap-x-4">
                        <span className="text-[#2C3370] font-semibold text-xs">مشاهده بیشتر</span>
                        <div className=""><img src="/images/newCourses/svg/leftArrow.svg" alt="" /></div>
                    </div>
                </div>

                <div className="w-full flex md:hidden flex-col justify-center items-center gap-y-4 mb-12">
                    <span className="text-white font-normal text-[15px]">دوره ها</span>
                    <span className="text-white font-bold text-2xl">جدیدترین دوره های آموزشی</span>
                </div>



                <div className="w-full">
                    <Swiper
                        spaceBetween={20}
                        loop={true}
                        navigation={{
                            nextEl: '.courses.swiper-button-next',
                            prevEl: '.courses.swiper-button-prev',
                        }}
                        modules={[Navigation]}
                        className="courses"
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            400: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            // 640: {
                            //     slidesPerView: 2,
                            //     spaceBetween: 10,
                            // },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                        }}
                    >

                        <SwiperSlide><BoxCourse /></SwiperSlide>
                        <SwiperSlide><BoxCourse /></SwiperSlide>
                        <SwiperSlide><BoxCourse /></SwiperSlide>
                        <SwiperSlide><BoxCourse /></SwiperSlide>
                        <SwiperSlide><BoxCourse /></SwiperSlide>
                        <SwiperSlide><BoxCourse /></SwiperSlide>
                        <SwiperSlide><BoxCourse /></SwiperSlide>
                        <SwiperSlide><BoxCourse /></SwiperSlide>
                        <SwiperSlide><BoxCourse /></SwiperSlide>

                    </Swiper>
                </div>
                <div className="absolute -bottom-24 left-[50%] translate-x-[-50%]">
                    <div className="courses swiper-button-next bg-[#2C3370]"><GrFormNext className='text-white' /></div>
                    <div className="courses swiper-button-prev bg-gray-400"><GrFormNext /></div>
                </div>

                <div className="w-full"><img src="/images/header/pic/patternTop.png" alt="" className="w-full h-10" /></div>

            </div>
            {/***************************** END SLIDER TWO ***************************************/}


        </div>
    );
}

export default NewCourses;