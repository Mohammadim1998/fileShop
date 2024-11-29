const EducationBox = () => {
    return (
        <div className="relative hidden md:block  w-[75.5%] mx-auto bg-[#2C3370] rounded-3xl">
            <div className="absolute left-0 top-[50%] translate-y-[-50%] rotate-180"><img src="/images/newCourses/pic/Vector.png" alt="" className="" /></div>
            <div className="absolute right-0 top-[50%] translate-y-[-50%]"><img src="/images/newCourses/pic/Vector.png" alt="" className="" /></div>
            <div className="absolute left-[50%] top-0 translate-x-[-50%]"><img src="/images/newCourses/pic/Vector3.png" alt="" className="" /></div>
            <div className="absolute left-[50%] bottom-0 translate-x-[-50%]"><img src="/images/newCourses/pic/Vector2.png" alt="" className="" /></div>

            <div className="w-full h-full flex justify-between items-center gap-x-8 px-24">
                <div className="flex lg:flex-row md:flex-col justify-between items-center lg:gap-x-20 gap-y-4">
                    <div className="flex flex-col justify-center items-center gap-y-4">
                        <span className="text-white font-bold md:text-[24px] lg:text-[32px] leading-10">به سیر مطالعاتی علاقه داری؟‌</span>
                        <span className="text-white font-bold text-base leading-10">همین الان سیر مطالعاتی تخصصی خودت را انتخاب کن</span>
                    </div>

                    <div className="relative shrink-0 mt-4 md:w-[150px] md:h-[50px] lg:w-[181px] lg:h-[50px] flex justify-center items-center">
                        <button className="bg-white md:w-[126px] lg:w-[158px] h-full rounded-lg text-[#2C3370] font-bold text-xl leading-9 flex justify-center items-center">ثبت نام</button>
                        <div className="absolute right-0 top-[50%] translate-y-[-50%] rotate-180"><img src="/images/newCourses/pic/Vector4.png" alt="" className="" /></div>
                        <div className="absolute left-[-1px] top-[50%] translate-y-[-50%]"><img src="/images/newCourses/pic/Vector4.png" alt="" className="" /></div>
                    </div>
                </div>

                <div className="relative">
                    <div className="w-[100%]"><img src="/images/newCourses/pic/person1.png" alt="" /></div>
                </div>

            </div>

        </div>
    );
}

export default EducationBox;


/**
 * 
 * const EducationBox = () => {
    return (
        <div className="relative hidden sm:block  w-[75.5%] mx-auto h-[214px] bg-[#2C3370] rounded-3xl">
            <div className="absolute left-0 top-[50%] translate-y-[-50%]"><img src="/images/newCourses/pic/VectorSectionEducation.png" alt="" className="" /></div>
            <div className="absolute right-0 top-[50%] rotate-180 translate-y-[-50%]"><img src="/images/newCourses/pic/VectorSectionEducation.png" alt="" className="" /></div>
            <div className="absolute left-[50%] top-0 translate-x-[-50%]"><img src="/images/newCourses/pic/vector3.png" alt="" className="" /></div>
            <div className="absolute left-[50%] bottom-0 translate-x-[-50%]"><img src="/images/newCourses/pic/vector2.png" alt="" className="" /></div>
            <div className="absolute left-11 -top-20"><img src="/images/newCourses/pic/person1.png" alt="" /></div>

            <div className="absolute top-[50%] right-20 translate-y-[-50%] flex justify-center items-center gap-x-[108px]">
                <div className="flex flex-col">
                    <span className="text-white font-bold text-[32px] leading-10">به سیر مطالعاتی علاقه داری؟‌</span>
                    <span className="text-white font-bold text-base leading-10">همین الان سیر مطالعاتی تخصصی خودت را انتخاب کن</span>

                    <div className="relative shrink-0 mt-4 w-[181px] h-[50px] flex justify-center items-center">
                        <button className="bg-white w-[158px] h-full rounded-lg text-[#2C3370] font-bold text-xl leading-9 flex justify-center items-center">ثبت نام</button>
                        <div className="absolute right-0 top-[50%] translate-y-[-50%] rotate-180"><img src="/images/newCourses/pic/vector4.png" alt="" className="" /></div>
                        <div className="absolute left-[-1px] top-[50%] translate-y-[-50%] "><img src="/images/newCourses/pic/vector4.png" alt="" className="" /></div>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default EducationBox;
 * 
 */