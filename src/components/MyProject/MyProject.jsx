import pic2 from "../..//assets/images/Screenshot (224).png";
import pic1 from "../../assets/images/Screenshot (221).png";
import pic4 from "../../assets/images/sports.png";
import pic3 from "../../assets/images/travel.png";
import "./MyProject.css";

const MyProject = () => {
  return (
    <div className="mt-20 m-4 p-2" id="my-projects">
      <h2 className="md:text-5xl text-3xl text-center text-rose-500 font-mono font-semibold md:mb-20 mb-10">
        Project Showcase
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:m-0 m-4">
        <div>
          <div className="rounded-xl border border-stone-200 p-2 shadow-2xl animate-slowBounce ">
            <img src={pic1} alt="" />
          </div>
          <div>
            <h2 className="md:text-2xl text-xl font-semibold mt-2">
              An ecommerce website using react with tailwind css.
            </h2>
            <button className="btn btn-outline text-white bg-sky-500 hover:bg-sky-800 md:mt-4 mt-2">
              <a href="https://animal-toys.web.app/">View website</a>
            </button>
          </div>
        </div>
        <div>
          <div className="rounded-xl border border-stone-200 p-2 shadow-2xl animate-slowBounce ">
            <img src={pic2} alt="" />
          </div>
          <div>
            <h2 className="md:text-2xl text-xl font-semibold mt-2">
              Chef Recipe of Diganto website using React JS.
            </h2>
            <button className="btn btn-outline text-white bg-sky-500 hover:bg-sky-800 mt-2 md:mt-4">
              <a href="https://chef-recipe-of-diganto.web.app/">View website</a>
            </button>
          </div>
        </div>
        <div>
          <div className="rounded-xl border border-stone-200 p-2 shadow-2xl animate-slowBounce ">
            <img src={pic3} alt="" />
          </div>
          <div>
            <h2 className="md:text-2xl text-xl font-semibold mt-2">
              World wide explorers travelling website using React JS.
            </h2>
            <button className="btn btn-outline text-white bg-sky-500 hover:bg-sky-800 mt-2 md:mt-4">
              <a href="https://world-wide-explorers-sohag0505.vercel.app/">
                View website
              </a>
            </button>
          </div>
        </div>
        <div>
          <div className="rounded-xl border border-stone-200 p-2 shadow-2xl animate-slowBounce ">
            <img src={pic4} alt="" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-2">
              Sports academy educational website using React JS.
            </h2>
            <button className="btn btn-outline text-white bg-sky-500 hover:bg-sky-800 mt-4">
              <a href="https://sports-academies-b7c00.web.app/">View website</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
