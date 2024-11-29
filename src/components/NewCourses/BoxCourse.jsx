const BoxCourse = () => {
    return (
        <div className="bg-white px-[19px] rounded-[18px]">
            <div className=""><img src={"/images/newCourses/pic/edu1.png"} alt="edu1" /></div>

            <div className="w-full">
                <div className="w-full flex flex-col justify-center items-center">
                    <span className="text-[#2C3370] font-bold text-[15px] leading-6">دوره آموزشی تاریخچه پیدایش مذاهب</span>
                    <span className="text-[#9D9E9E] font-normal text-sm leading-5">مدرس  :حجت الاسلام حسینی</span>
                </div>
            </div>

            <div className="w-full flex justify-between items-center py-[14px]">
                <div className="bg-[#F8F8F8] px-2 rounded-[5px] flex justify-center items-center gap-x-1">
                    <span className="text-[#242525] font-normal text-[10px] leading-5 block">گواهینامه</span>
                </div>

                <div className="flex justify-center items-center gap-x-1">
                    <div className="w-6 h-6 flex justify-center items-center"><img src="/images/newCourses/svg/time.svg" alt="" className="" /></div>
                    <span className="text-[#242525] font-normal text-[10px] leading-5 block">۸۰ ساعت</span>
                </div>

                <div className="flex justify-center items-center gap-x-1">
                    <div className="w-6 h-6 flex justify-center items-center"><img src="/images/newCourses/svg/meet.svg" alt="" className="" /></div>
                    <span className="text-[#242525] font-normal text-[10px] leading-5 block">۳۰ جلسه</span>
                </div>
            </div>

            <div className="w-full py-2 flex justify-between items-center border-t-[1px] border-t-[#EDEDED]">
                <div className="w-11 h-5 bg-[#F2094F] rounded-[5px] flex justify-center items-center text-white font-medium text-xs leading-5">٪۴۰</div>
                <div className="flex justify-center items-center gap-x-4">
                    <del className="text-[#9D9E9E] font-medium text-[11px] leading-5">۳۵۰۰۰۰ تومان</del>
                    <div className="text-[#242525] font-medium text-base  leading-6">۱۵۰/۰۰۰ تومان</div>
                </div>
            </div>
        </div>
    );
}

export default BoxCourse;