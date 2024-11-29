const Header = () => {
    return (
        <header className="relative w-full max-w-[1640px] mx-auto hidden md:flex bg-[#1B2262] justify-between items-center pt-14 pb-4 px-8">
            <div className="absolute top-0 left-0 right-0 z-20 w-full h-16 hidden md:block"><img src="/images/header/pic/patternTop.png" alt="" /></div>

            {/** Right Side **/}
            <div className="flex justify-center items-center md:gap-x-[22px] lg:gap-x-[52px] mt-4">
                <div className=""><img src="/images/header/pic/logo.png" alt="" className="" /></div>

                <ul className="flex justify-center items-center md:gap-x-4 lg:gap-x-7 child:hover:text-yellow-300">
                    <li className="text-[#FFFFFF] font-normal text-[13px] leading-5 cursor-pointer">رویدادها</li>
                    <li className="text-[#FFFFFF] font-normal text-[13px] leading-5 cursor-pointer">مسیرهای آموزشی</li>
                    <li className="text-[#FFFFFF] font-normal text-[13px] leading-5 cursor-pointer">دوره ها</li>
                    <li className="text-[#FFFFFF] font-normal text-[13px] leading-5 cursor-pointer">اساتید</li>
                    <li className="text-[#FFFFFF] font-normal text-[13px] leading-5 cursor-pointer">اخبار</li>
                </ul>
            </div>
            {/** End Right Side **/}

            {/** Left Side **/}
            <div className="flex gap-x-[17px]">
                <div className="flex justify-center items-center gap-x-[10px]">
                    <div className="text-white font-bold text-[13px] leading-4">ورود / ثبت نام</div>
                    <div className="w-[18px] h-[18px]"><img src="/images/header/svg/login.svg" alt="" className="" /></div>
                </div>

                <div className="w-[180px] lg:w-[242px] h-[39px] flex justify-center items-center">
                    <div className="relative w-full h-full flex rounded-3xl bg-[#FFFFFF0A]">
                        <input type="text" className="w-full h-full rounded-3xl outline-none bg-inherit pr-4 pl-10 text-white" />
                        <div className="shrink-0 absolute left-[10px] top-[50%] translate-y-[-50%] w-6 h-6 flex justify-center items-center"><img src="/images/header/svg/search.svg" alt="" /></div>
                    </div>
                </div>

            </div>
            {/** End Left Side **/}
        </header>
    );
}

export default Header;