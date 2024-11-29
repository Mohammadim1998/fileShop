"use client";
import { useState } from "react";

const HeaderMobile = () => {
    const [openMenu, setOpneMenu] = useState(false);

    return (
        <header className="z-50 relative w-full h-[93px] bg-[#23295C] flex md:hidden justify-between items-center py-4 px-6">
            {/** Right Side **/}
            <div className="w-full flex justify-between items-center">
                <div onClick={() => setOpneMenu(true)} className="w-6 h-6"><img src="/images/header/svg/hamburger.svg" className="text-white w-6 h-6" /></div>

                <div className=" -ml-4"><img src="/images/header/pic/logo.png" alt="" className="" /></div>
            </div>
            {/** End Right Side **/}

            {/** Left Side **/}
            <div className="w-full flex justify-end items-center">
                <div className="flex justify-center items-center gap-x-[10px]">
                    <div className="text-white font-bold text-[13px] leading-4">ورود / ثبت نام</div>
                    <div className="w-[18px] h-[18px]"><img src="/images/header/svg/login.svg" alt="" className="" /></div>
                </div>
            </div>
            {/** End Left Side **/}

            {/************** NAVBAR **************/}
            <div onClick={() => setOpneMenu(false)} className={`${openMenu ? "right-0" : "right-[-100%]"} w-full h-full backdrop-blur-sm fixed top-0 bottom-0 transition-all duration-500`}>
                <div onClick={(event) => event.stopPropagation()} className={`relative z-50 bg-menufixed w-[70%] h-full bg-[#111329f3] p-[34px_39px_40px_24px]`}>
                    <div className="absolute top-0 left-[50%] translate-x-[-50%]"><img src="/images/header/svg/vector.svg" alt="" className="" /></div>

                    <div className="w-full flex justify-between items-center mb-10">
                        <div className=""><img src="/images/header/pic/logo.png" alt="" className="" /></div>
                        <div onClick={() => setOpneMenu(false)} className="w-7 h-7"><img src="/images/header/svg/close.svg" alt="" className="" /></div>
                    </div>

                    <ul className="flex flex-col gap-y-[17px]">
                        <li className="flex justify-start items-center gap-x-[13px]">
                            <div className="w-[7px] h-[7px] bg-[#C09C6A] rounded-full"></div>
                            <span className="text-white text-[13px] font-bold block">صفحه اصلی</span>
                        </li>
                        <li className="flex justify-start items-center gap-x-[13px]">
                            <div className="w-[7px] h-[7px] bg-[#C09C6A] rounded-full"></div>
                            <span className="text-white text-[13px] font-bold block">مسیر های آموزشی</span>
                        </li>
                        <li className="flex justify-start items-center gap-x-[13px]">
                            <div className="w-[7px] h-[7px] bg-[#C09C6A] rounded-full"></div>
                            <span className="text-white text-[13px] font-bold block">دوره ها</span>
                        </li>
                        <li className="flex justify-start items-center gap-x-[13px]">
                            <div className="w-[7px] h-[7px] bg-[#C09C6A] rounded-full"></div>
                            <span className="text-white text-[13px] font-bold block">اساتید</span>
                        </li>
                        <li className="flex justify-start items-center gap-x-[13px]">
                            <div className="w-[7px] h-[7px] bg-[#C09C6A] rounded-full"></div>
                            <span className="text-white text-[13px] font-bold block">اخبار</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/************** END NAVBAR **************/}

        </header>
    );
}

export default HeaderMobile;