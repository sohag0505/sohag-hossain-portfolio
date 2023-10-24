import pic2 from "../..//assets/images/Screenshot (224).png";
import pic1 from "../../assets/images/Screenshot (221).png";
import pic4 from "../../assets/images/sports.png";
import pic3 from "../../assets/images/travel.png";
import "./MyProject.css";

const MyProject = () => {
  return (
    <div className="mt-20">
      <h2 className="text-5xl text-center text-rose-500 font-mono font-semibold mb-20">
        Project Showcase
      </h2>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <div className="rounded-xl border border-stone-200 p-2 shadow-2xl animate-slowBounce ">
            <img src={pic1} alt="" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-2">
              An ecommerce website using react with tailwind css.
            </h2>
            <button className="btn btn-outline text-white bg-sky-500 hover:bg-sky-800 mt-4">
              <a href="https://animal-toys.web.app/">View website</a>
            </button>
          </div>
        </div>
        <div>
          <div className="rounded-xl border border-stone-200 p-2 shadow-2xl animate-slowBounce ">
            <img src={pic2} alt="" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-2">
              Chef Recipe of Diganto website using React JS.
            </h2>
            <button className="btn btn-outline text-white bg-sky-500 hover:bg-sky-800 mt-4">
              <a href="https://chef-recipe-of-diganto.web.app/">View website</a>
            </button>
          </div>
        </div>
        <div>
          <div className="rounded-xl border border-stone-200 p-2 shadow-2xl animate-slowBounce ">
            <img src={pic3} alt="" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-2">
              World wide explorers travelling website using React JS.
            </h2>
            <button className="btn btn-outline text-white bg-sky-500 hover:bg-sky-800 mt-4">
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
