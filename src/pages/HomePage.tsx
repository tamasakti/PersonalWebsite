import Layout from "components/Layout";
import imgAvatar from "assets/avatar.webp";
import iconInstagram from "assets/Instragram.webp";
import iconBehance from "assets/Behance.webp";
import iconDribble from "assets/Dribbble.webp";
import iconLinkedIn from "assets/LinkedIn.webp";
import musiclab from "/Musiclab.webp";
import imdb from "/imdb.webp";
import poke from "/poke.webp";

import react from "../assets/1631110818-logo-react-js.webp";
import tailwind from "../assets/tailwindcss-templates.webp";
import typescript from "../assets/typescript.webp";
import daisy from "../assets/logo-4.webp";
import hook from "../assets/react-hook-form-og.webp";

import programming from "../assets/Programming.webp";
import laptop from "../assets/Using Laptop.webp";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Header />
        <Skills />
        <RecentWork />
        <Footer />
      </Layout>
    </>
  );
};

const Hero = () => {
  return (
    <>
      <div className="w-full h-[20rem] flex flex-col items-center justify-center">
        <h1 className="lg:text-4xl text-center text-2xl font-bold font-poppins text-black">
          Frontend Developer & UI / UX Enthusiast
        </h1>
        <p className="lg:text-xl text-lg text-center w-8/12 lg:w-full  text-gray-600 mt-5">
          I design, code and focused on minimal and clean design
        </p>
      </div>
      <div className="flex flex-row">
        <div className="lg:flex flex-col hidden w-[5%]  items-center">
          <a href="https://www.instagram.com/gumilangtama/" target="_blank">
            <img
              src={iconInstagram}
              className="w-8/12 mx-auto cursor-pointer"
            />
          </a>
          <a href="https://dribbble.com/gumilangtama" target="_blank">
            <img src={iconDribble} className="w-8/12 mx-auto mt-5" />
          </a>
          <a href="https://www.behance.net/Tawcodesign" target="_blank">
            <img src={iconBehance} className="w-8/12 mx-auto mt-5" />
          </a>
          <a href="https://www.linkedin.com/in/tamasakti/" target="_blank">
            <img src={iconLinkedIn} className="w-8/12 mx-auto mt-5" />
          </a>
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
        <p className="text-center  w-10/12 lg:w-[70rem] lg:text-xl text-sm mt-10 text-white font-normal">
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
          <p className="lg:text-2xl text-lg text-black font-normal mt-5 w-6/12 lg:w-[32rem] ml-20">
            I design simple content structure, minimal, clean design style, to
            achieve better UI / UX experience
          </p>
          <p className="text-2xl text-black font-semibold mt-5 w-[32rem] ml-20">
            I’d love to design{" "}
          </p>
          <div className="flex flex-row mt-5 ">
            <p className="py-2 px-4 bg-gray-300 text-black font-semibold font-poppins lg:w-[5rem] rounded-lg ml-20 lg:text-center">
              UI/UX
            </p>
            <p className="py-2 px-4 bg-gray-300 text-black font-semibold font-poppins lg:w-[5rem] rounded-lg ml-5 lg:text-center">
              Web
            </p>
            <p className="py-2 px-4 bg-gray-300 text-black font-semibold font-poppins lg:w-[5rem] rounded-lg ml-5 lg:text-center">
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
          <p className="lg:text-2xl text-lg text-black font-normal mt-5 w-9/12 lg:w-[32rem] lg:ml-20">
            I like to code things from scratch, do responsive and enjoy bringing
            ideas to life
          </p>
          <p className="text-2xl text-black font-semibold mt-5 w-[32rem] lg:ml-20">
            language I Speak
          </p>
          <div className="flex flex-row mt-5 ">
            <p className="py-2 px-4 bg-gray-300 text-black font-semibold font-poppins lg:w-[5rem] rounded-lg lg:ml-20 text-center">
              HTML
            </p>
            <p className="py-2 px-4 bg-gray-300 text-black font-semibold font-poppins lg:w-[5rem] rounded-lg ml-5 text-center">
              CSS
            </p>
            <p className="py-2 px-4 text-center bg-gray-300 text-black font-semibold  font-poppins lg:w-[8rem] rounded-lg ml-5">
              Javascript
            </p>
          </div>

          <div className="flex flex-row mt-5 ">
            <p className="py-2 px-4 bg-gray-300 text-black font-semibold font-poppins lg:w-2/12 rounded-lg lg:first-letter lg:ml-20 text-center">
              React
            </p>
            <p className="py-2 px-4 bg-gray-300 text-black font-semibold font-poppins lg:w-[10rem] rounded-lg ml-5 text-center">
              TypeScript
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const RecentWork = () => {
  return (
    <>
      <div className="w-full min-h-screen mt-20">
        <div className="flex flex-col">
          <h1 className="text-black text-2xl text-center lg:text-4xl font-bold">
            My Recent Works
          </h1>
          <p className="text-slate-400 text-lg lg:text-xl text-center mt-5">
            Here are my projects I've worked on. Want to see more?{" "}
            <span className="text-black font-semibold">
              <a
                href="https://github.com/tamasakti"
                className="cursor-pointer hover:underline"
                target="_blank"
              >
                {" "}
                See My Github Repository
              </a>{" "}
            </span>
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 w-8/12 mx-auto mt-10 lg:mt-20">
            <div>
              <CardProjects
                image={musiclab}
                link={"https://musiclab-id.vercel.app/"}
                target={"_blank"}
              />
            </div>
            <div className="-mt-72 lg:m-0">
              <CardProjects
                image={imdb}
                link={"https://film-ku-imdb-clone.vercel.app/"}
                target={"_blank"}
              />
            </div>
            <div className="-mt-72">
              <CardProjects
                image={poke}
                link={"https://pokemon-app-pokeapi.vercel.app/"}
                target={"_blank"}
              />
            </div>
            <div className="-mt-72">
              <CardProjects />
            </div>
            <div className="-mt-72">
              <CardProjects />
            </div>
            <div className="-mt-72">
              <CardProjects />
            </div>
            <div className="-mt-72">
              <CardProjects />
            </div>
            <div className="-mt-72">
              <CardProjects />
            </div>
          </div>
          <div className="-mt-72 mx-auto"></div>
        </div>
      </div>
    </>
  );
};

const CardProjects = ({ image, link, target, project_name }: any) => {
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="w-full h-[20rem] bg-slate-500 rounded-xl group">
          <a href={link} target={target} className="cursor-pointer">
            <img src={image} className="w-full h-full group-hover:opacity-80" />
            <p className="text-2xl text-black text-center font-poppins font-semibold mt-5">
              {project_name}
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="flex flex-row w-10/12  bg-slate-900 lg:h-[10rem] h-[7rem] mt-20 mx-auto rounded-2xl items-center justify-center">
          <h1
            className="w-[30%] font-bold lg:text-4xl text-2xl text-white items text-center"
            style={{ fontFamily: "Poppins" }}
          >
            Hire Me
          </h1>
          <p className="w-[40%] text-sm lg:text-xl text-white items text-center">
            Interested in working together? We should queue up a time to chat.
          </p>
          <h1 className="w-[30%] font-semibold lg:text-2xl text-lg text-white items text-center">
            <button
              className="px-7 py-1 border-white border-2 rounded-xl"
              style={{ fontFamily: "Poppins" }}
            >
              Hire Me
            </button>
          </h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl text-black font-bold text-center mt-20">
            Powered By
          </h1>
          <div className="flex flex-row w-full justify-center mt-20 gap-6">
            <img
              src={react}
              className="w-2/12 h-2/6 lg:w-[12rem] lg:h-[8rem]"
            />
            <img src={tailwind} className="w-3/12 h-3/6 lg:w-3/12 lg:h-3/6" />
            <img
              src={typescript}
              className="w-2/12 h-2/6 lg:w-[10rem] lg:h-[8rem]"
            />
            <img src={daisy} className="w-2/12 h-2/6 lg:w-2/12 lg:h-2/6" />
          </div>
          <h1
            className="text-slate-600 text-xl text-center font-semibold mt-20"
            style={{ fontFamily: "Poppins" }}
          >
            All Right Reserved @2023 Tamasakti
          </h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
