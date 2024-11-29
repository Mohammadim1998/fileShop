"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrFormNext } from "react-icons/gr";

// Import Swiper styles
import './professorStyle.css';
import 'swiper/css';
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import Box from './Box';

const Professors = () => {
    return (
        <div className="w-full pb-[170px] md:pb-[100px] ">
            <div className="relative w-full professor professor-custom">

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
                    <span className="text-[#2C3370] font-normal text-[15px]">دوره ها</span>
                    <span className="text-[#2C3370] font-bold text-2xl">جدیدترین دوره های آموزشی</span>
                </div>

                <div className="w-[95%] sm:w-[80%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-12 sm:gap-x-8 mb-32">
                    <Box
                        image={"/images/professors/svg/certificate.svg"}
                        title={"گواهینامه پایان دوره"}
                        text={"در  پایان دوره ها و مسیر های آموزشی به جهت اعتبار بخشیدن به هویت دوره و تسهیل امر استخدام گواهینامه معتبر اعطا خواهد شد"}
                    />
                    <Box
                        image={"/images/professors/svg/online.svg"}
                        title={"برگزاری کلاس آنلاین"}
                        text={"امکان برگزاری کلاس های آنلاین با حضور زنده مدرس. با استفاده از این قابلیت سامانه از امکانات آموزشی فراتر از کلاس های حضوری برخوردار شوید"}
                    />
                    <Box
                        image={"/images/professors/svg/fast.svg"}
                        title={"آموزش سریع و آسان"}
                        text={"پیشرفته ترین سامانه آموزش الکترونیک با تمامی امکانات آموزشی دارای نمایشگر فایل های صوتی، تصویری، متنی، PDF، فایل های دانلودی و تمرین"}
                    />
                    <Box
                        image={"/images/professors/svg/quiz.svg"}
                        title={"آزمون الکترونیک"}
                        text={"امکان برگزاری آزمون های الکترونیک به صورت تستی و تشریحی با امکان قرارگیری فایل های تصویری و ویدئویی و صوتی در متن پرسش ها"}
                    />
                </div>

                {/******************************* SLIDER CIRCLE **************************************/}

                <div className="w-1/2 hidden md:flex justify-between items-center translate-x-[-95%] mb-8 sm:mb-[74px]">
                    <div className="flex flex-col justify-center items-center gap-y-4">
                        <span className="text-[#2C3370] font-normal text-[15px]">اساتید</span>
                        <span className="text-[#2C3370] font-bold text-2xl">برترین اساتید</span>
                    </div>

                    <div className="flex justify-center items-center gap-x-4 pl-20">
                        <span className="text-[#2C3370] font-semibold text-xs">مشاهده بیشتر</span>
                        <div className=""><img src="/images/newCourses/svg/leftArrow.svg" alt="" /></div>
                    </div>
                </div>

                <div className="w-full flex md:hidden flex-col justify-center items-center gap-y-4 mb-12">
                    <span className="text-[#2C3370] font-normal text-[15px]">اساتید</span>
                    <span className="text-[#2C3370] font-bold text-2xl">برترین اساتید</span>
                </div>

                <div className="professor relative w-full md:max-w-[80%] h-[502px] bg-[#2C3370] overflow-x-hidden mx-auto rounded-[41px] shadow-[0px_0px_113px_-21px_rgba(49,60,211,1)]">
                    <div className="absolute top-0  w-[100%] rotate-180"><img src="/images/professors/svg/pattern.svg" alt="" className="" /></div>
                    <div className="absolute bottom-0 w-[100%]"><img src="/images/professors/svg/pattern.svg" alt="" className="" /></div>

                    <Swiper
                        centeredSlides={true}
                        speed={500}
                        slidesPerView={5}
                        loop={true}
                        freeMode={true}
                        pagination={{
                            el: '.professor.swiper-pagination',
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: '.professor .swiper-button-next',
                            prevEl: '.professor .swiper-button-prev',
                        }}
                        modules={[Navigation, EffectCoverflow, Pagination]}
                        spaceBetween={0}
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 300,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        className="professor professor-custom"
                    >

                        <SwiperSlide>
                            <img src="/images/professors/pic/img-1.jpg" alt="" className="w-full h-full rounded-full" />
                            <div className="popup absolute -bottom-40 shrink-0 hidden flex-col justify-center items-center rounded-2xl w-[187px] h-24 bg-white">
                                <span className="text-[#2C3370] block font-bold text-sm leading-5 mb-1">حجت الاسلام  مسعود عالی</span>
                                <span className="text-[#9D9E9E] block font-bold text-xs leading-5">نماینده ولی فقیه در دانشگاه‌ها</span>

                                <div className="mt-[7px] w-full flex justify-center items-center gap-x-[7px]">
                                    <div className="w-6 h-6 p-1 bg-[#2C3370] flex justify-center items-center rounded-full"><img src="/images/professors/svg/insta.svg" alt="" className="" /></div>
                                    <div className="w-6 h-6 p-1 bg-[#DBDBDB] flex justify-center items-center rounded-full"><img src="/images/professors/svg/globe.svg" alt="" className="" /></div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/professors/pic/img-2.jpg" alt="" className="w-full h-full rounded-full" />

                            <div className="popup absolute -bottom-40 shrink-0 hidden flex-col justify-center items-center rounded-2xl w-[187px] h-24 bg-white">
                                <span className="text-[#2C3370] block font-bold text-sm leading-5 mb-1">حجت الاسلام ماندگاری</span>
                                <span className="text-[#9D9E9E] block font-bold text-xs leading-5">نماینده ولی فقیه در دانشگاه‌ها</span>

                                <div className="mt-[7px] w-full flex justify-center items-center gap-x-[7px]">
                                    <div className="w-6 h-p-1 6 bg-[#2C3370] flex justify-center items-center rounded-full"><img src="/images/professors/svg/insta.svg" alt="" className="" /></div>
                                    <div className="w-6 h-6 bg-[#DBDBDB] flex justify-center items-center rounded-full"><img src="/images/professors/svg/globe.svg" alt="" className="" /></div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/professors/pic/img-3.jpg" alt="" className="w-full h-full rounded-full" />

                            <div className="popup absolute -bottom-40 shrink-0 hidden flex-col justify-center items-center rounded-2xl w-[187px] h-24 bg-white">
                                <span className="text-[#2C3370] block font-bold text-sm leading-5 mb-1">حجت الاسلام رفیعی</span>
                                <span className="text-[#9D9E9E] block font-bold text-xs leading-5">نماینده ولی فقیه در دانشگاه‌ها</span>

                                <div className="mt-[7px] w-full flex justify-center items-center gap-x-[7px]">
                                    <div className="w-6 h-p-1 6 bg-[#2C3370] flex justify-center items-center rounded-full"><img src="/images/professors/svg/insta.svg" alt="" className="" /></div>
                                    <div className="w-6 h-6 bg-[#DBDBDB] flex justify-center items-center rounded-full"><img src="/images/professors/svg/globe.svg" alt="" className="" /></div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/professors/pic/img-4.jpg" alt="" className="w-full h-full rounded-full" />

                            <div className="popup absolute -bottom-40 shrink-0 hidden flex-col justify-center items-center rounded-2xl w-[187px] h-24 bg-white">
                                <span className="text-[#2C3370] block font-bold text-sm leading-5 mb-1">حجت الاسلام جنتی</span>
                                <span className="text-[#9D9E9E] block font-bold text-xs leading-5">نماینده ولی فقیه در دانشگاه‌ها</span>

                                <div className="mt-[7px] w-full flex justify-center items-center gap-x-[7px]">
                                    <div className="w-6 h-p-1 6 bg-[#2C3370] flex justify-center items-center rounded-full"><img src="/images/professors/svg/insta.svg" alt="" className="" /></div>
                                    <div className="w-6 h-6 bg-[#DBDBDB] flex justify-center items-center rounded-full"><img src="/images/professors/svg/globe.svg" alt="" className="" /></div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/professors/pic/img-5.jpg" alt="" className="w-full h-full rounded-full" />

                            <div className="popup absolute -bottom-40 shrink-0 hidden flex-col justify-center items-center rounded-2xl w-[187px] h-24 bg-white">
                                <span className="text-[#2C3370] block font-bold text-sm leading-5 mb-1">حجت الاسلام طالبی</span>
                                <span className="text-[#9D9E9E] block font-bold text-xs leading-5">نماینده ولی فقیه در دانشگاه‌ها</span>

                                <div className="mt-[7px] w-full flex justify-center items-center gap-x-[7px]">
                                    <div className="w-6 h-p-1 6 bg-[#2C3370] flex justify-center items-center rounded-full"><img src="/images/professors/svg/insta.svg" alt="" className="" /></div>
                                    <div className="w-6 h-6 bg-[#DBDBDB] flex justify-center items-center rounded-full"><img src="/images/professors/svg/globe.svg" alt="" className="" /></div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                    <div class="professor swiper-pagination bg-[#171B58]"></div>
                </div>
                <div className='hidden md:block'>
                    <div className="professor swiper-button-next bg-[#2C3370]"><GrFormNext className='text-white ' /></div>
                    <div className="professor swiper-button-prev bg-gray-400 rotate-180"><GrFormNext /></div>
                </div>

                <div className="absolute -bottom-20 left-[50%] translate-x-[-50%] block md:hidden">
                    <div className="professor-custom swiper-button-next bg-[#2C3370] rotate-180"><GrFormNext className='text-white ' /></div>
                    <div className="professor-custom swiper-button-prev bg-gray-400"><GrFormNext /></div>
                </div>

                {/******************************* END SLIDER CIRCLE **************************************/}

            </div>
        </div>
    );
}

export default Professors;