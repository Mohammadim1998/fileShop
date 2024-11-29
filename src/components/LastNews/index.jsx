"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrFormNext } from "react-icons/gr";

// Import Swiper styles
import './style.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const LastNews = () => {
    return (
        <div className='w-full mb-72'>
            <div className="last-news last-news-custom relative w-[249px] sm:w-[63%] mx-auto">

                <div className="w-1/2 hidden md:flex justify-between items-center translate-x-[-80%] lg:translate-x-[-85%] mb-8 sm:mb-[74px]">
                    <div className="flex flex-col justify-center items-center gap-y-4">
                        <span className="text-[#2C3370] font-normal text-[15px]">اخبار</span>
                        <span className="text-[#2C3370] font-bold text-2xl">آخرین اخبار مدرسه شمع</span>
                    </div>

                    <div className="flex justify-center items-center gap-x-4">
                        <span className="text-[#2C3370] font-semibold text-xs">مشاهده بیشتر</span>
                        <div className=""><img src="/images/newCourses/svg/leftArrow.svg" alt="" /></div>
                    </div>
                </div>

                <div className="w-full flex md:hidden flex-col justify-center items-center gap-y-4 mb-12">
                    <span className="text-[#2C3370] font-normal text-[15px]">اخبار</span>
                    <span className="text-[#2C3370] font-bold text-2xl">آخرین اخبار مدرسه شمع</span>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    freeMode={true}
                    pagination={{
                        el: '.last-news.swiper-pagination',
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: '.last-news .swiper-button-next',
                        prevEl: '.last-news .swiper-button-prev',
                    }}
                    modules={[Pagination, Navigation]}
                    className="last-news last-news-custom"
                >
                    <SwiperSlide className='shadow-[0px_0px_10px_1px_rgba(0,0,0,1)]'>
                        <div className="relative w-full h-full rounded-[20px] pt-9 sm:pt-5 border-[1px]">
                            <div className="w-full h-[165px] sm:h-[250px] md:h-[250px] px-5 rounded-[20px]"><img src="/images/mainSlider/pic/img-1.jpg" alt="" className="w-full h-full rounded-[20px]" /></div>
                            <div className="block sm:hidden absolute top-0 left-[50%] translate-x-[-50%]"><img src="/images/lastNews/svg/vector.svg" alt="" /></div>

                            <div className="shrink-0 w-full">
                                <div className="w-full flex flex-col items-start gap-y-[6px] p-4 md:py-4 md:px-12">
                                    <span className="text-[#2C3370] block font-semibold md:font-bold md:text-2xl text-xl leading-8">شعرخوانی شاعران پیشکسوت و جوان در محضر رهبر انقلاب</span>
                                    <span className="text-[#242525] block font-normal text-xs leading-5">در شب ولادت کریم اهل‌بیت حضرت امام حسن مجتبی (علیه‌السلام)، جمعی از اهالی شعر و فرهنگ و اساتید…</span>
                                </div>

                                <div className="flex sm:hidden justify-center items-center pt-4 pb-8 gap-x-[10px]">
                                    <span className="text-[#2C3370] font-bold text-xs leading-5">مشاهده بیشتر</span>
                                    <div className="w-[10px] h-[10px]"><img src="/images/lastNews/svg/leftArrow.svg" alt="" className="" /></div>
                                </div>

                                <div className="w-full h-[1px] bg-[#E8E8E8]"></div>

                                <div className="w-full flex justify-between md:justify-center items-center py-7 px-4">
                                    <div className="w-full flex justify-start md:justify-start items-center gap-x-[5px] sm:gap-x-[40px] md:px-10">
                                        <div className="flex gap-x-2 justify-center items-center">
                                            <span className="text-[#808585] font-normal text-[13px] leading-5">سه شنبه، ۱۴۰۲/۱۱/۲۵</span>
                                            <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] flex justify-center items-center"><img src="/images/lastNews/svg/time.svg" alt="" className="" /></div>
                                        </div>
                                        <div className="flex gap-x-2 justify-center items-center">
                                            <span className="text-[#808585] font-normal text-[13px] leading-5">۲۵</span>
                                            <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] flex justify-center items-center"><img src="/images/lastNews/svg/like.svg" alt="" className="" /></div>
                                        </div>
                                        <div className="flex gap-x-2 justify-center items-center">
                                            <span className="text-[#808585] font-normal text-[13px] leading-5">۴۰۲</span>
                                            <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] flex justify-center items-center"><img src="/images/lastNews/svg/view.svg" alt="" className="" /></div>
                                        </div>
                                    </div>

                                    <div className="hidden shrink-0 sm:flex justify-center items-center gap-x-[10px]">
                                        <span className="text-[#2C3370] font-bold text-xs leading-5">مشاهده بیشتر</span>
                                        <div className="w-[10px] h-[10px]"><img src="/images/lastNews/svg/leftArrow.svg" alt="" className="" /></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='shadow-[0px_0px_10px_1px_rgba(0,0,0,1)]'>
                        <div className="relative w-full h-full rounded-[20px] pt-9 sm:pt-5 border-[1px]">
                            <div className="w-full h-[165px] sm:h-[250px] md:h-[250px] px-5 rounded-[20px]"><img src="/images/mainSlider/pic/img-2.jpg" alt="" className="w-full h-full rounded-[20px]" /></div>
                            <div className="block sm:hidden absolute top-0 left-[50%] translate-x-[-50%]"><img src="/images/lastNews/svg/vector.svg" alt="" /></div>

                            <div className="shrink-0 w-full">
                                <div className="w-full flex flex-col items-start gap-y-[6px] p-4 md:py-4 md:px-12">
                                    <span className="text-[#2C3370] block font-semibold md:font-bold md:text-2xl text-xl leading-8">شعرخوانی شاعران پیشکسوت و جوان در محضر رهبر انقلاب</span>
                                    <span className="text-[#242525] block font-normal text-xs leading-5">در شب ولادت کریم اهل‌بیت حضرت امام حسن مجتبی (علیه‌السلام)، جمعی از اهالی شعر و فرهنگ و اساتید…</span>
                                </div>

                                <div className="flex sm:hidden justify-center items-center pt-4 pb-8 gap-x-[10px]">
                                    <span className="text-[#2C3370] font-bold text-xs leading-5">مشاهده بیشتر</span>
                                    <div className="w-[10px] h-[10px]"><img src="/images/lastNews/svg/leftArrow.svg" alt="" className="" /></div>
                                </div>

                                <div className="w-full h-[1px] bg-[#E8E8E8]"></div>

                                <div className="w-full flex justify-between md:justify-center items-center py-7 px-4">
                                    <div className="w-full flex justify-start md:justify-start items-center gap-x-[5px] sm:gap-x-[40px] md:px-10">
                                        <div className="flex gap-x-2 justify-center items-center">
                                            <span className="text-[#808585] font-normal text-[13px] leading-5">سه شنبه، ۱۴۰۲/۱۱/۲۵</span>
                                            <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] flex justify-center items-center"><img src="/images/lastNews/svg/time.svg" alt="" className="" /></div>
                                        </div>
                                        <div className="flex gap-x-2 justify-center items-center">
                                            <span className="text-[#808585] font-normal text-[13px] leading-5">۲۵</span>
                                            <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] flex justify-center items-center"><img src="/images/lastNews/svg/like.svg" alt="" className="" /></div>
                                        </div>
                                        <div className="flex gap-x-2 justify-center items-center">
                                            <span className="text-[#808585] font-normal text-[13px] leading-5">۴۰۲</span>
                                            <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] flex justify-center items-center"><img src="/images/lastNews/svg/view.svg" alt="" className="" /></div>
                                        </div>
                                    </div>

                                    <div className="hidden shrink-0 sm:flex justify-center items-center gap-x-[10px]">
                                        <span className="text-[#2C3370] font-bold text-xs leading-5">مشاهده بیشتر</span>
                                        <div className="w-[10px] h-[10px]"><img src="/images/lastNews/svg/leftArrow.svg" alt="" className="" /></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='shadow-[0px_0px_10px_1px_rgba(0,0,0,1)]'>
                        <div className="relative w-full h-full rounded-[20px] pt-9 sm:pt-5 border-[1px]">
                            <div className="w-full h-[165px] sm:h-[250px] md:h-[250px] px-5 rounded-[20px]"><img src="/images/mainSlider/pic/img-3.jpg" alt="" className="w-full h-full rounded-[20px]" /></div>
                            <div className="block sm:hidden absolute top-0 left-[50%] translate-x-[-50%]"><img src="/images/lastNews/svg/vector.svg" alt="" /></div>

                            <div className="shrink-0 w-full">
                                <div className="w-full flex flex-col items-start gap-y-[6px] p-4 md:py-4 md:px-12">
                                    <span className="text-[#2C3370] block font-semibold md:font-bold md:text-2xl text-xl leading-8">شعرخوانی شاعران پیشکسوت و جوان در محضر رهبر انقلاب</span>
                                    <span className="text-[#242525] block font-normal text-xs leading-5">در شب ولادت کریم اهل‌بیت حضرت امام حسن مجتبی (علیه‌السلام)، جمعی از اهالی شعر و فرهنگ و اساتید…</span>
                                </div>

                                <div className="flex sm:hidden justify-center items-center pt-4 pb-8 gap-x-[10px]">
                                    <span className="text-[#2C3370] font-bold text-xs leading-5">مشاهده بیشتر</span>
                                    <div className="w-[10px] h-[10px]"><img src="/images/lastNews/svg/leftArrow.svg" alt="" className="" /></div>
                                </div>

                                <div className="w-full h-[1px] bg-[#E8E8E8]"></div>

                                <div className="w-full flex justify-between md:justify-center items-center py-7 px-4">
                                    <div className="w-full flex justify-start md:justify-start items-center gap-x-[5px] sm:gap-x-[40px] md:px-10">
                                        <div className="flex gap-x-2 justify-center items-center">
                                            <span className="text-[#808585] font-normal text-[13px] leading-5">سه شنبه، ۱۴۰۲/۱۱/۲۵</span>
                                            <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] flex justify-center items-center"><img src="/images/lastNews/svg/time.svg" alt="" className="" /></div>
                                        </div>
                                        <div className="flex gap-x-2 justify-center items-center">
                                            <span className="text-[#808585] font-normal text-[13px] leading-5">۲۵</span>
                                            <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] flex justify-center items-center"><img src="/images/lastNews/svg/like.svg" alt="" className="" /></div>
                                        </div>
                                        <div className="flex gap-x-2 justify-center items-center">
                                            <span className="text-[#808585] font-normal text-[13px] leading-5">۴۰۲</span>
                                            <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] flex justify-center items-center"><img src="/images/lastNews/svg/view.svg" alt="" className="" /></div>
                                        </div>
                                    </div>

                                    <div className="hidden shrink-0 sm:flex justify-center items-center gap-x-[10px]">
                                        <span className="text-[#2C3370] font-bold text-xs leading-5">مشاهده بیشتر</span>
                                        <div className="w-[10px] h-[10px]"><img src="/images/lastNews/svg/leftArrow.svg" alt="" className="" /></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='shadow-[0px_0px_10px_1px_rgba(0,0,0,1)]'>
                        <div className="relative w-full h-full rounded-[20px] pt-9 sm:pt-5 border-[1px]">
                            <div className="w-full h-[165px] sm:h-[250px] md:h-[250px] px-5 rounded-[20px]"><img src="/images/mainSlider/pic/img-4.jpg" alt="" className="w-full h-full rounded-[20px]" /></div>
                            <div className="block sm:hidden absolute top-0 left-[50%] translate-x-[-50%]"><img src="/images/lastNews/svg/vector.svg" alt="" /></div>

                            <div className="shrink-0 w-full">
                                <div className="w-full flex flex-col items-start gap-y-[6px] p-4 md:py-4 md:px-12">
                                    <span className="text-[#2C3370] block font-semibold md:font-bold md:text-2xl text-xl leading-8">شعرخوانی شاعران پیشکسوت و جوان در محضر رهبر انقلاب</span>
                                    <span className="text-[#242525] block font-normal text-xs leading-5">در شب ولادت کریم اهل‌بیت حضرت امام حسن مجتبی (علیه‌السلام)، جمعی از اهالی شعر و فرهنگ و اساتید…</span>
                                </div>

                                <div className="flex sm:hidden justify-center items-center pt-4 pb-8 gap-x-[10px]">
                                    <span className="text-[#2C3370] font-bold text-xs leading-5">مشاهده بیشتر</span>
                                    <div className="w-[10px] h-[10px]"><img src="/images/lastNews/svg/leftArrow.svg" alt="" className="" /></div>
                                </div>

                                <div className="w-full h-[1px] bg-[#E8E8E8]"></div>

                                <div className="w-full flex justify-between md:justify-center items-center py-7 px-4">
                                    <div className="w-full flex justify-start md:justify-start items-center gap-x-[5px] sm:gap-x-[40px] md:px-10">
                                        <div className="flex gap-x-2 justify-center items-center">
                                            <span className="text-[#808585] font-normal text-[13px] leading-5">سه شنبه، ۱۴۰۲/۱۱/۲۵</span>
                                            <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] flex justify-center items-center"><img src="/images/lastNews/svg/time.svg" alt="" className="" /></div>
                                        </div>
                                        <div className="flex gap-x-2 justify-center items-center">
                                            <span className="text-[#808585] font-normal text-[13px] leading-5">۲۵</span>
                                            <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] flex justify-center items-center"><img src="/images/lastNews/svg/like.svg" alt="" className="" /></div>
                                        </div>
                                        <div className="flex gap-x-2 justify-center items-center">
                                            <span className="text-[#808585] font-normal text-[13px] leading-5">۴۰۲</span>
                                            <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] flex justify-center items-center"><img src="/images/lastNews/svg/view.svg" alt="" className="" /></div>
                                        </div>
                                    </div>

                                    <div className="hidden shrink-0 sm:flex justify-center items-center gap-x-[10px]">
                                        <span className="text-[#2C3370] font-bold text-xs leading-5">مشاهده بیشتر</span>
                                        <div className="w-[10px] h-[10px]"><img src="/images/lastNews/svg/leftArrow.svg" alt="" className="" /></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='shadow-[0px_0px_10px_1px_rgba(0,0,0,1)]'>
                        <div className="relative w-full h-full rounded-[20px] pt-9 sm:pt-5 border-[1px]">
                            <div className="w-full h-[165px] sm:h-[250px] md:h-[250px] px-5 rounded-[20px]"><img src="/images/mainSlider/pic/img-5.jpg" alt="" className="w-full h-full rounded-[20px]" /></div>
                            <div className="block sm:hidden absolute top-0 left-[50%] translate-x-[-50%]"><img src="/images/lastNews/svg/vector.svg" alt="" /></div>

                            <div className="shrink-0 w-full">
                                <div className="w-full flex flex-col items-start gap-y-[6px] p-4 md:py-4 md:px-12">
                                    <span className="text-[#2C3370] block font-semibold md:font-bold md:text-2xl text-xl leading-8">شعرخوانی شاعران پیشکسوت و جوان در محضر رهبر انقلاب</span>
                                    <span className="text-[#242525] block font-normal text-xs leading-5">در شب ولادت کریم اهل‌بیت حضرت امام حسن مجتبی (علیه‌السلام)، جمعی از اهالی شعر و فرهنگ و اساتید…</span>
                                </div>

                                <div className="flex sm:hidden justify-center items-center pt-4 pb-8 gap-x-[10px]">
                                    <span className="text-[#2C3370] font-bold text-xs leading-5">مشاهده بیشتر</span>
                                    <div className="w-[10px] h-[10px]"><img src="/images/lastNews/svg/leftArrow.svg" alt="" className="" /></div>
                                </div>

                                <div className="w-full h-[1px] bg-[#E8E8E8]"></div>

                                <div className="w-full flex justify-between md:justify-center items-center py-7 px-4">
                                    <div className="w-full flex justify-start md:justify-start items-center gap-x-[5px] sm:gap-x-[40px] md:px-10">
                                        <div className="flex gap-x-2 justify-center items-center">
                                            <span className="text-[#808585] font-normal text-[13px] leading-5">سه شنبه، ۱۴۰۲/۱۱/۲۵</span>
                                            <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] flex justify-center items-center"><img src="/images/lastNews/svg/time.svg" alt="" className="" /></div>
                                        </div>
                                        <div className="flex gap-x-2 justify-center items-center">
                                            <span className="text-[#808585] font-normal text-[13px] leading-5">۲۵</span>
                                            <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] flex justify-center items-center"><img src="/images/lastNews/svg/like.svg" alt="" className="" /></div>
                                        </div>
                                        <div className="flex gap-x-2 justify-center items-center">
                                            <span className="text-[#808585] font-normal text-[13px] leading-5">۴۰۲</span>
                                            <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] flex justify-center items-center"><img src="/images/lastNews/svg/view.svg" alt="" className="" /></div>
                                        </div>
                                    </div>

                                    <div className="hidden shrink-0 sm:flex justify-center items-center gap-x-[10px]">
                                        <span className="text-[#2C3370] font-bold text-xs leading-5">مشاهده بیشتر</span>
                                        <div className="w-[10px] h-[10px]"><img src="/images/lastNews/svg/leftArrow.svg" alt="" className="" /></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div className='hidden md:block'>
                    <div className="last-news hidden md:block swiper-button-next bg-[#2C3370]"><GrFormNext className='text-white ' /></div>
                    <div className="last-news hidden md:block swiper-button-prev bg-gray-400 rotate-180"><GrFormNext /></div>
                </div>

                <div className="absolute -bottom-14 left-[50%] translate-x-[-50%] block md:hidden">
                    <div className="last-news-custom swiper-button-next bg-[#2C3370] rotate-180"><GrFormNext className='text-white ' /></div>
                    <div className="last-news-custom swiper-button-prev bg-gray-400"><GrFormNext /></div>
                </div>
                <div class="last-news swiper-pagination bg-[#171B58]"></div>
            </div>
        </div>
    );
}

export default LastNews;