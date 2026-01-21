import { NavbarDemo } from "@/components/Universal/NavbarDemo";
import Footer  from "@/components/Universal/Footer";
import Foundation from "@/app/about/Foundation";
import Third from "@/app/about/Third";
import PersonalStory from "./PersonalStory";
import Standby from "./Standby";
import Name from "./Name";
import Team from "./Team";
const page = () => {
  return (
    <div className="bg-gradient-to-r from-[#52b5eb] to-[#026967] ">
      <div className="absolute text-white reltive w-full ">
        <NavbarDemo />
      </div>

      <div className="relative h-[95vh]  overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <img
          src="nature.jpg"
          alt="Nature"
          className="w-full h-screen object-cover absolute"
        />

        {/* Centered Overlay Text */}
        <div className="relative rounded-3xl h-80 w-150   flex items-center justify-center font-bold text-white bg-black/50">
          <div className="absolute font-bold text-6xl ">
            About XXXXXX <br />
            Learn More
            <div className="absolute m-5 p-3  hover:bg-[#175986] hover:text-white transition-all duration-300 bg-white  text-black text-xl rounded-full">
              <button className="grid grid-cols-1">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <Foundation/>
      <Third/>
      <PersonalStory/>
      <Standby/>
      <Name/>
      <Team/>
      <div   className="bg-gradient-to-r from-[#52b5eb] to-[#026967] ">
        <Footer/>
      </div>
    </div>
  );
};

export default page;
