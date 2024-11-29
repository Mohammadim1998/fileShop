const EducationMobileBox = () => {
    return (
        <div className="relative w-[80%] block md:hidden mx-auto h-[214px] bg-[#2b36a1] rounded-3xl">

            <div className="absolute w-10 top-[-17px] left-[50%] translate-x-[-50%] -rotate-90"><img src="/images/newCourses/pic/Vector.png" alt="" className="" /></div>
            <div className="absolute w-10 bottom-[-19px] left-[50%] translate-x-[-50%] rotate-90"><img src="/images/newCourses/pic/Vector.png" alt="" className="" /></div>

            <div className="w-full h-full flex justify-between items-center px-8">
                <div className="flex flex-col justify-center items-start w-full">
                    <span className="text-white font-extrabold text-[14px] text-center leading-4 mb-4">به سیر مطالعاتی علاقه داری؟‌</span>
                    <span className="text-white font-bold text-[10px] leading-4 mb-8">همین الان سیر مطالعاتی تخصصی خودت را انتخاب کن</span>
                    <button className="bg-white w-[120px] h-full rounded-3xl text-[#2C3370] font-bold text-xl leading-9 flex justify-center items-center">ثبت نام</button>
                </div>

                <div className="min-w-[40%] h-fullflex justify-center items-center"><img src="/images/newCourses/pic/person1.png" alt="" /></div>
            </div>
        </div>
    );
}

export default EducationMobileBox;