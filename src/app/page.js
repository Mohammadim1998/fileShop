import LastNews from "@/components/LastNews";
import MainSlider from "@/components/MainSlider";
import NewCourses from "@/components/NewCourses";
import Professors from "@/components/Professors";

export default function Home() {
  return (
    <div className="w-full bg-[#f3f3f37e]">
      <MainSlider />
      <NewCourses />
      <Professors />
      <LastNews />
    </div>
  );
}
