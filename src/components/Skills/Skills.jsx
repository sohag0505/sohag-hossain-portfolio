const Skills = () => {
  return (
    <div id="skills">
      <div className="md:mt-40 mt-20">
        <h2 className="md:text-5xl text-3xl text-center text-rose-500 font-mono font-semibold">
          Take a look at my Skills
        </h2>
        <p className="text-center text-xl  m-4">
          These are my skills and this contains all the technologies and
          programming languages <br /> that I have learnt until now. I am
          constantly learning, therefore I may update this section more often.
        </p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-2 md:mt-20 m-4 mt-10">
        <div className="border border-spacing-2 shadow-2xl rounded-lg bg-stone-200 hover:bg-stone-300 flex justify-center items-center p-8 ">
          <div className="space-y-2">
            <img
              width={50}
              height={50}
              src="https://aiman.tech/wp-content/uploads/2021/05/html-5.png"
              alt=""
            />
            <h2 className="text-lg font-bold">HTML5</h2>
          </div>
        </div>
        <div className="border border-spacing-2 shadow-2xl rounded-lg bg-stone-200 hover:bg-stone-300 flex justify-center items-center p-8">
          <div className="space-y-2">
            <img
              width={50}
              height={50}
              src="https://aiman.tech/wp-content/uploads/2021/05/css-3.png"
              alt=""
            />
            <h2 className="text-lg font-bold">CSS3</h2>
          </div>
        </div>
        <div className="border border-spacing-2 shadow-2xl rounded-lg bg-stone-200 hover:bg-stone-300 flex justify-center items-center p-8">
          <div className="space-y-2">
            <img
              width={50}
              height={50}
              src="https://aiman.tech/wp-content/uploads/2021/05/wordpress-1.png"
              alt=""
            />
            <h2 className="text-lg font-bold">Wordpress</h2>
          </div>
        </div>
        <div className="border border-spacing-2 shadow-2xl rounded-lg bg-stone-200 hover:bg-stone-300 flex justify-center items-center p-8">
          <div className="space-y-2">
            <img
              width={50}
              height={50}
              src="https://aiman.tech/wp-content/uploads/2021/05/figma.jpg"
              alt=""
            />
            <h2 className="text-lg font-bold">Figma</h2>
          </div>
        </div>
        <div className="border border-spacing-2 shadow-2xl rounded-lg bg-stone-200 hover:bg-stone-300 flex justify-center items-center p-8">
          <div className="space-y-2">
            <img
              width={50}
              height={50}
              src="https://aiman.tech/wp-content/uploads/2021/05/js.png"
              alt=""
            />
            <h2 className="text-lg font-bold">JavaScript</h2>
          </div>
        </div>
        <div className="border border-spacing-2 shadow-2xl rounded-lg bg-stone-200 hover:bg-stone-300 flex justify-center items-center p-8">
          <div className="space-y-2">
            <img
              width={50}
              height={50}
              src="https://aiman.tech/wp-content/uploads/2022/08/React-icon.svg-2048x1781.png"
              alt=""
            />
            <h2 className="text-lg font-bold">React </h2>
          </div>
        </div>
        <div className="border border-spacing-2 shadow-2xl rounded-lg bg-stone-200 hover:bg-stone-300 flex justify-center items-center p-8">
          <div className="space-y-2">
            <img
              width={50}
              height={50}
              src="https://aiman.tech/wp-content/uploads/2022/08/touchicon-180.png"
              alt=""
            />
            <h2 className="text-lg font-bold">Firebase</h2>
          </div>
        </div>
        <div className="border border-spacing-2 shadow-2xl rounded-lg bg-stone-200 hover:bg-stone-300 flex justify-center items-center p-8">
          <div className="space-y-2">
            <img
              width={50}
              height={50}
              src="https://aiman.tech/wp-content/uploads/2022/08/1200px-Nextjs-logo.svg.png"
              alt=""
            />
            <h2 className="text-lg font-bold">Next Js</h2>
          </div>
        </div>
        <div className="border border-spacing-2 shadow-2xl rounded-lg bg-stone-200 hover:bg-stone-300 flex justify-center items-center p-8">
          <div className="space-y-2">
            <img
              width={50}
              height={50}
              src="https://aiman.tech/wp-content/uploads/2022/08/social-square.b622e290e82093c36cca57092ffe494f.jpg"
              alt=""
            />
            <h2 className="text-lg font-bold">Tailwind CSS</h2>
          </div>
        </div>
        <div className="border border-spacing-2 shadow-2xl rounded-lg bg-stone-200 hover:bg-stone-300 flex justify-center items-center p-8">
          <div className="space-y-2">
            <img
              width={50}
              height={50}
              src="https://aiman.tech/wp-content/uploads/2022/08/Bootstrap_logo.svg.png"
              alt=""
            />
            <h2 className="text-lg font-bold ">Bootstrap</h2>
          </div>
        </div>
        <div className="border border-spacing-2 shadow-2xl rounded-lg bg-stone-200 hover:bg-stone-300 flex justify-center items-center p-8">
          <div className="space-y-2">
            <img
              width={50}
              height={50}
              src="https://nodejs.org/static/images/logo-hexagon-card.png"
              alt=""
            />
            <h2 className="text-lg font-bold ">Node JS</h2>
          </div>
        </div>
        <div className="border border-spacing-2 shadow-2xl rounded-lg bg-stone-200 hover:bg-stone-300 flex justify-center items-center p-8">
          <div className="space-y-2">
            <img
              width={50}
              height={50}
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt=""
            />
            <h2 className="text-lg font-bold ">Github</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
