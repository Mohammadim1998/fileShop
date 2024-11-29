const Box = () => {
    return (
        <div className="relative bg-white pt-[21px] px-2">
            <div className="w-full h-[111px] px-[19px] rounded-[14px]">
                <img src={"/images/newCourses/pic/img-1.jpg"} alt="" className="shrink-0 w-full h-full rounded-[14px]" />
            </div>

            <div className="w-full flex flex-col justify-center items-center">
                <span className="text-[#000000] mt-4 mb-[5px] block font-normal text-[11px] leading-5">گواهینامه</span>

                <div className="flex flex-col justify-center items-center mb-8">
                    <span className="text-[#2C3370] font-bold text-[15px] leading-6">مسیر آموزشی اصول مشاوره</span>
                    <span className="text-[#9D9E9E] font-normal text-sm leading-5">مدرس: حجت الاسلام صادقی</span>
                </div>

                <div className="w-full h-[38px] bg-[#FAF8F8] rounded-[7px] flex justify-center items-center mb-4">
                    <span className="text-[#242525] font-medium block text-[16px] leading-4">۵۱۰/۰۰۰ تومان</span>
                </div>

            </div>

            <div className="w-full border-t-[1px] border-t-[#EDEDED] flex justify-between items-center px-5 py-[14px]">
                <div className="flex justify-center items-center gap-x-1">
                    <div className="w-6 h-6 flex justify-center items-center"><img src="/images/newCourses/svg/edu.svg" alt="" className="" /></div>
                    <span className="text-[#242525] font-normal text-[10px] leading-5 block">۵ دوره</span>
                </div>

                <div className="flex justify-center items-center gap-x-1">
                    <div className="w-6 h-6 flex justify-center items-center"><img src="/images/newCourses/svg/time.svg" alt="" className="" /></div>
                    <span className="text-[#242525] font-normal text-[10px] leading-5 block">۶۰ ساعت</span>
                </div>

                <div className="flex justify-center items-center gap-x-1">
                    <div className="w-6 h-6 flex justify-center items-center"><img src="/images/newCourses/svg/meet.svg" alt="" className="" /></div>
                    <span className="text-[#242525] font-normal text-[10px] leading-5 block">۹ جلسه</span>
                </div>
            </div>

        </div>
    );
}

export default Box;