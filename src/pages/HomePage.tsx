import Layout from "components/Layout";
import imgAvatar from "assets/avatar.webp";
import iconInstagram from "assets/Instragram.webp";
import iconBehance from "assets/Behance.webp";
import iconDribble from "assets/Dribbble.webp";
import iconLinkedIn from "assets/LinkedIn.webp";

import programming from "../assets/Programming.webp";
import laptop from "../assets/Using Laptop.webp";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Header />
        <Skills />
      </Layout>
    </>
  );
};

const Hero = () => {
  return (
    <>
      <div className="w-full h-[20rem] flex flex-col items-center justify-center">
        <h1 className="lg:text-4xl text-2xl font-bold font-poppins text-black">
          Frontend Developer & UI / UX Enthusiast
        </h1>
        <p className="lg:text-xl text-lg  text-gray-600 mt-5">
          I design, code and focused on minimal and clean design
        </p>
      </div>
      <div className="flex flex-row">
        <div className="lg:flex flex-col hidden w-[5%]  items-center">
          <img src={iconInstagram} className="w-8/12 mx-auto" />
          <img src={iconDribble} className="w-8/12 mx-auto mt-5" />
          <img src={iconBehance} className="w-8/12 mx-auto mt-5" />
          <img src={iconLinkedIn} className="w-8/12 mx-auto mt-5" />
        </div>
        <div className="flex  lg:w-[90%] ">
          <img src={imgAvatar} className="lg:w-3/12 w-6/12 mx-auto -mt-20 " />
        </div>
      </div>
      <div className="flex flex-row lg:hidden w-full justify-center mt-5">
        <img src={iconInstagram} className="w-[4rem]" />
        <img src={iconDribble} className="w-[4rem] ml-5" />
        <img src={iconBehance} className="w-[4rem] ml-5" />
        <img src={iconLinkedIn} className="w-[4rem] ml-5" />
      </div>
    </>
  );
};

const Header = () => {
  return (
    <>
      <div className="w-full h-[25rem] mt-32 bg-black flex flex-col items-center justify-center">
        <h1 className="text-white font-bold lg:text-4xl text-2xl text-center">
          Hi, i’m Tamasakti, nice to meet u
        </h1>
        <p className="text-center w-[30rem] lg:w-[70rem] lg:text-xl text-lg mt-10 text-white font-normal">
          Since beginning my journey as a Graphic Designer more than 3 years in
          college, involved in various events and organization agenda. I’m also
          learning programming last 6 months, focused on front-end developing
          and UI/UX fields Eventually graduated from coding bootcamp and had
          experienced of building couple of projects using HTML, CSS,
          Javascript, React, and Typescript programming language
        </p>
      </div>
    </>
  );
};

const Skills = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:mt-20">
        <div className="flex-1  w-full ">
          <img src={laptop} className="w-5/12 mx-auto items-center mt-20" />
        </div>
        <div className="flex-1 ">
          <h1 className="text-4xl lg:text-5xl text-black underline font-bold items-center ml-20 mt-20">
            Designer
          </h1>
          <p className="text-2xl text-black font-normal mt-5 w-[32rem] ml-20">
            I design simple content structure, minimal, clean design style, to
            achieve better UI / UX experience
          </p>
          <p className="text-2xl text-black font-semibold mt-5 w-[32rem] ml-20">
            I’d love to design{" "}
          </p>
          <div className="flex flex-row mt-5 ">
            <p className="py-2 px-4 bg-gray-300 text-black font-semibold font-poppins lg:w-1/12 rounded-lg ml-20">
              UI/UX
            </p>
            <p className="py-2 px-4 bg-gray-300 text-black font-semibold font-poppins lg:w-1/12 rounded-lg ml-5">
              Web
            </p>
            <p className="py-2 px-4 bg-gray-300 text-black font-semibold font-poppins lg:w-1/12 rounded-lg ml-5">
              Apps
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse mt-32">
        <div className="flex-1  w-full ">
          <img src={programming} className="lg:float-left mx-auto w-5/12 " />
        </div>
        <div className="flex-1 ml-20 lg:ml-36">
          <h1 className="text-4xl lg:text-5xl text-black underline font-bold items-center lg:ml-20 mt-20">
            Front-End
          </h1>
          <p className="text-2xl text-black font-normal mt-5 w-[26rem] lg:w-[32rem] lg:ml-20">
            I like to code things from scratch, do responsive and enjoy bringing
            ideas to life
          </p>
          <p className="text-2xl text-black font-semibold mt-5 w-[32rem] lg:ml-20">
            language I Speak
          </p>
          <div className="flex flex-row mt-5 ">
            <p className="py-2 px-4 bg-gray-300 text-black font-semibold font-poppins lg:w-1/12 rounded-lg lg:ml-20 text-center">
              HTML
            </p>
            <p className="py-2 px-4 bg-gray-300 text-black font-semibold font-poppins lg:w-1/12 rounded-lg ml-5 text-center">
              CSS
            </p>
            <p className="py-2 px-4 text-center bg-gray-300 text-black font-semibold font-poppins lg:w-2/12 rounded-lg ml-5">
              Javascript
            </p>
          </div>

          <div className="flex flex-row mt-5 ">
            <p className="py-2 px-4 bg-gray-300 text-black font-semibold font-poppins lg:w-2/12 rounded-lg lg:first-letter lg:ml-20 text-center">
              React
            </p>
            <p className="py-2 px-4 bg-gray-300 text-black font-semibold font-poppins lg:w-2/12 rounded-lg ml-5 text-center">
              TypeScript
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
