"use client";

const Footer = () => {
    const goTopCtrl = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative w-full flex flex-col bg-[#242525]">
            <div className="absolute top-[-65px] md:top-[-83px] left-[50%] translate-x-[-50%]"><img src="/images/footer/svg/vector.svg" alt="" className="" /></div>
            <div className="absolute top-[-40px] left-[50%] translate-x-[-50%]"><img src="/images/footer/svg/logo.svg" alt="" className="" /></div>
            <div onClick={() => goTopCtrl()} className="absolute top-[-18px] right-[46px] shadow-[5px_22px_56.5px_0px_#D1A5684F] w-[44px] h-[44px] bg-[#C09C6A] flex justify-center items-center rounded-full cursor-pointer
            md:right-[86px] md:w-[66px] md:h-[66px] md:top-[-33px]
            "><img src="/images/footer/svg/arrowTop.svg" alt="" className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" /></div>

            <div className="w-full h-full flex flex-col justify-center items-center p-[53px_20px_20px_20px]
            md:flex-row md:justify-between md:p-[53px_88px_20px_60px]
             xl:p-[53px_200px_20px_148px]
            ">
                <div className="w-[350px]">
                    <div className="mb-5 flex justify-center items-center"><img src="/images/footer/svg/logoNetwork.svg" alt="" className="" /></div>

                    <p className="text-[#A5C9E9] text-justify font-medium text-sm leading-5">
                        <span className="text-[#C09C6A] font-bold text-sm leading-6 ml-1">«شمع»</span>
                        سامانه ای است برای پاسخ دهی به مهمترین نیازهای تبلیغی کشور. سامانه ای که علاوه بر تسهیل گیری و کمک به جریان دعوت از سخنرانان مجالس مذهبی کشور، تحلیل و رصد عرصه های تبلیغی را نیز عهده دار است. سامانه شمع تنها سامانه رسمی و دولتی است که در سازمان تبلیغات اسلامی، ساماندهی امور تبلیغی کشور را دنبال می کند.
                    </p>

                </div>

                <div className="w-full flex flex-col gap-x-[40px] justify-center items-center
                lg:gap-x-[54px] md:flex-row
                ">
                    <div className="relative w-full flex justify-center items-center flex-col md:hidden mt-12">

                        <div className="flex justify-center items-center gap-x-4 mb-[26px]">
                            <div className=""><img src="/images/footer/svg/arr.svg" alt="" className="" /></div>
                            <span className="text-[#f1ad4d] font-bold text-base block leading-7">اطلاعات تماس</span>
                            <div className="rotate-180"><img src="/images/footer/svg/arr.svg" alt="" className="" /></div>
                        </div>

                        <ul className="w-full flex flex-col justify-center items-center gap-y-[10px]">
                            <li className="w-[217px] flex gap-x-[10px] text-white font-normal text-[13px] leading-5">
                                <div className="shrink-0 w-6 h-6 flex justify-center items-center"><img src="/images/footer/svg/phoneR.svg" alt="" className="" /></div>
                                ۰۲۱۹۱۰۸۸۲۰۵
                            </li>

                            <li className="w-[217px] flex gap-x-[10px] text-white font-normal text-[13px] leading-5">
                                <div className="shrink-0 w-6 h-6 flex justify-center items-center"><img src="/images/footer/svg/postR.svg" alt="" className="" /></div>
                                info@Shamschools.ir
                            </li>

                            <li className="w-[217px] flex justify-start items-center gap-x-[10px] text-white font-normal text-[13px] leading-5">
                                <div className="shrink-0 w-6 h-6 flex justify-center items-center"><img src="/images/footer/svg/locationR.svg" alt="" className="" /></div>
                                تهران، خ شهید اندرزگو، نرسیده به بلوار شهید نامجو ، مدرسه مبلغین دینی  طلاب
                            </li>
                        </ul>
                    </div>
                    {/*****************************************************************/}
                    {/*****************************************************************/}
                    {/*****************************************************************/}
                    {/*****************************************************************/}
                    {/*****************************************************************/}
                    {/*****************************************************************/}

                    <div className="relative flex-col hidden md:flex">
                        <div className="absolute top-8 right-[3.2px] w-[0.5px] h-[85%] bg-white"></div>
                        <span className="text-white font-bold text-base block leading-7 mb-[14px]">لینک‌های مفید</span>
                        <ul className="flex flex-col items-start gap-y-2">
                            <li className="text-white flex justify-center items-center gap-x-1 font-normal text-[13px] leading-5">
                                <div className="w-[7px] h-[6px] bg-[#C09C6A] rounded-full"></div>
                                سازمان تبلیغات اسلامی
                            </li>
                            <li className="text-white flex justify-center items-center gap-x-1 font-normal text-[13px] leading-5">
                                <div className="w-[7px] h-[6px] bg-[#C09C6A] rounded-full"></div>
                                حوزه علمیه قم
                            </li>
                            <li className="text-white flex justify-center items-center gap-x-1 font-normal text-[13px] leading-5">
                                <div className="w-[7px] h-[6px] bg-[#C09C6A] rounded-full"></div>
                                مرکز طلاب استان تهران
                            </li>
                            <li className="text-white flex justify-center items-center gap-x-1 font-normal text-[13px] leading-5">
                                <div className="w-[7px] h-[7px] bg-[#C09C6A] rounded-full"></div>
                                دانشکده علوم حدیث و قرآن
                            </li>
                        </ul>
                    </div>
                    {/*****************************************************************/}
                    {/*****************************************************************/}
                    {/*****************************************************************/}
                    {/*****************************************************************/}
                    {/*****************************************************************/}
                    {/*****************************************************************/}
                    <div className="w-full  flex justify-center items-center relative flex-col md:hidden mt-8 mb-8">

                        <div className="flex justify-center items-center gap-x-4 mb-[26px]">
                            <div className=""><img src="/images/footer/svg/arr.svg" alt="" className="" /></div>
                            <span className="text-[#f1ad4d] font-bold text-base block leading-7">لینک‌های مفید</span>
                            <div className="rotate-180"><img src="/images/footer/svg/arr.svg" alt="" className="" /></div>
                        </div>


                        <ul className="flex flex-col items-start gap-y-2">
                            <li className="text-white flex justify-center items-center gap-x-1 font-normal text-[13px] leading-5">
                                <div className="w-[6px] h-[6px] bg-[#C09C6A] rounded-full"></div>
                                سازمان تبلیغات اسلامی
                            </li>
                            <li className="text-white flex justify-center items-center gap-x-1 font-normal text-[13px] leading-5">
                                <div className="w-[6px] h-[6px] bg-[#C09C6A] rounded-full"></div>
                                حوزه علمیه قم
                            </li>
                            <li className="text-white flex justify-center items-center gap-x-1 font-normal text-[13px] leading-5">
                                <div className="w-[6px] h-[6px] bg-[#C09C6A] rounded-full"></div>
                                مرکز طلاب استان تهران
                            </li>
                            <li className="text-white flex justify-center items-center gap-x-1 font-normal text-[13px] leading-5">
                                <div className="w-[6px] h-[6px] bg-[#C09C6A] rounded-full"></div>
                                دانشکده علوم حدیث و قرآن
                            </li>
                        </ul>
                    </div>

                    {/***************************************************************************************************/}

                    <div className="relative flex-col hidden md:flex">
                        <span className="text-white font-bold text-base block leading-7 mb-[14px]">اطلاعات تماس</span>
                        <ul className="flex flex-col gap-y-[10px]">
                            <li className="w-[217px] flex gap-x-[10px] text-white font-normal text-[13px] leading-5">
                                <div className="shrink-0 w-6 h-6 flex justify-center items-center"><img src="/images/footer/svg/phone.svg" alt="" className="" /></div>
                                ۰۲۱۹۱۰۸۸۲۰۵
                            </li>

                            <li className="w-[217px] flex gap-x-[10px] text-white font-normal text-[13px] leading-5">
                                <div className="shrink-0 w-6 h-6 flex justify-center items-center"><img src="/images/footer/svg/post.svg" alt="" className="" /></div>
                                info@Shamschools.ir
                            </li>

                            <li className="w-[217px] flex justify-start items-center gap-x-[10px] text-white font-normal text-[13px] leading-5">
                                <div className="shrink-0 w-6 h-6 flex justify-center items-center"><img src="/images/footer/svg/location.svg" alt="" className="" /></div>
                                تهران، خ شهید اندرزگو، نرسیده به بلوار شهید نامجو ، مدرسه مبلغین دینی  طلاب
                            </li>
                        </ul>
                    </div>

                    {/*****************************************************************/}
                    {/*****************************************************************/}
                    {/*****************************************************************/}
                    {/*****************************************************************/}
                    {/*****************************************************************/}

                </div>
            </div>

            <div className="relative w-full pt-12 md:pt-8">
                <div className="w-full h-full"><img src="/images/footer/svg/vectorMosque.svg" alt="" className="w-full h-full" /></div>

                <div className="absolute sm:left-[113px] sm:translate-x-0 top-0 flex justify-center items-center gap-x-[7px] child:rounded-full child:flex child:justify-center child:items-center
                left-[50%] translate-x-[-50%]
                ">
                    <div className="w-[30px] h-[30px] bg-[#17788E]"><img src="/images/footer/svg/tel.svg" alt="" className="" /></div>
                    <div className="w-[30px] h-[30px] bg-[#4F4F4F]"><img src="/images/footer/svg/insta.svg" alt="" className="" /></div>
                    <div className="w-[30px] h-[30px] bg-[#4F4F4F]"><img src="/images/footer/svg/linkdin.svg" alt="" className="" /></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;