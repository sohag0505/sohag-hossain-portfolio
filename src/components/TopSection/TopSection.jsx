import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import img1 from "../../assets/images/picture-sohag.png";
import "./TopSection.css";

const TopSection = () => {
  return (
    <div className="grid grid-cols-2 gap-10 mt-20">
      <div className="my-10">
        <div className="flex items-center mb-2">
          <FaBeer className="md:text-4xl text-3xl text-sky-700" />
          <h2 className="text-sm md:NormalCharacterStyle text-white bg-sky-500 rounded-md p-1">
            About Me
          </h2>
        </div>
        <div className="text-5xl">
          <span className="font-serif text-sky-500 ">Hey,</span> <br /> I am{" "}
          <span className="text-sky-500 animate-pulse">Sohag hossain</span>
        </div>
        <h4 className="text-3xl font-semibold text-rose-400 mt-5">
          Frontend || React Developer
        </h4>
        <p className="text-lg mt-4">
          I love to visualize ideas and make them come alive on a website.I like
          to use various technologies to build exciting projects.I also like
          designing, so I work on Mock designs and release it online, and also
          was able to work on some freelance design projects.
        </p>
        <button className="btn btn-outline text-white bg-sky-500 hover:bg-sky-800 mt-4">
          Hire Me
        </button>
      </div>
      <div className="avatar ml-48 ">
        <div className=" rounded-xl bg-custom ">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
