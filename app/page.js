import Hero from "@/components/Hero";
import AllCourses from "@/components/Courses/AllCourses";
import ExpertsCarousel from "@/components/ExpertsCarousel";
import HNavbar from "@/components/Header/HNavbar";

export default function Home() {
  return (   
      <>
        <Hero />
        <AllCourses />
        <ExpertsCarousel />
      </>
  );
}
