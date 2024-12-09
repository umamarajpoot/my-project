import AboutUs from "@/app/Components/aboutus";
import FoodCategory from "@/app/Components/foodcategoury";
import HeroSection from "@/app/Components/herosection";
import MeetOurChef from "@/app/Components/meetourchef";
import Menu from "@/app/Components/menu";
import StatsSection from "@/app/Components/statesection";
import Testimonial from "@/app/Components/testimonial";
import WhyChooseUs from "@/app/Components/whychooseus";

export default function Home() {
   return(
    <div>
      
      <HeroSection/>
      <AboutUs/>
      <FoodCategory/>
      <WhyChooseUs/>
      <StatsSection/>
      <Menu/>
      <MeetOurChef/>
      <Testimonial/>
      </div>
   )
}
