export default function Projects() {
  return (
    <div
      id="projects"
      className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-4 mt-5 p-4"
    >
      <div className="shadow-lg shadow-gray-300 rounded-[5px] border-blue-100 bg-gray-100 tarnsition ease-in-out hover:-transition-y-1 hover:scale-101 hover:shadow-gray-400">
        <h2 className="text-2xl m-2">Snake Game</h2>
        <p className="mt-2 mx-2">Python</p>
        <p className="mt-2 mx-2">Console based retro game.</p>
        <div className="flex mt-2 gap-2 p-2">
          <a
            href="https://student-dashboard-sirat.netlify.app/"
            className="bg-cyan-950 text-white rounded-[5px] border-2 border-cyan-950 p-2"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/habibullahsirat/snake-gane.git"
            className="rounded-[5px] border-2 border-cyan-950 p-2"
          >
            Github link
          </a>
        </div>
      </div>

      <div className="shadow-lg shadow-gray-300 rounded-[5px] border-blue-100 bg-gray-100 tarnsition ease-in-out hover:-transition-y-1 hover:scale-101 hover:shadow-gray-400">
        <h2 className="text-2xl m-2">Guess My Number Game</h2>
        <p className="mt-2 mx-2">HTML, CSS, Javascript</p>
        <p className="mt-2 mx-2">Web browser game.</p>
        <div className="flex mt-2 gap-2 p-2">
          <a
            href="https://habibullahsirat.github.io/Guess-My-Number-Game/"
            className="bg-cyan-950 text-white rounded-[5px] border-2 border-cyan-950 p-2"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/habibullahsirat/Guess-My-Number-Game.git"
            className="rounded-[5px] border-2 border-cyan-950 p-2"
          >
            Github link
          </a>
        </div>
      </div>

      <div className="shadow-lg shadow-gray-300 rounded-[5px] border-blue-100 bg-gray-100 tarnsition ease-in-out hover:-transition-y-1 hover:scale-101 hover:shadow-gray-400">
        <h2 className="text-2xl m-2">Pizza Menu</h2>
        <p className="mt-2 mx-2">HTML, CSS, React</p>
        <p className="mt-2 mx-2">React based landing page.</p>
        <div className="flex mt-2 gap-2 p-2">
          <a
            href="https://pizza-menu-sirat.netlify.app/"
            className="bg-cyan-950 text-white rounded-[5px] border-2 border-cyan-950 p-2"
          >
            Live Demo
          </a>
          <a href="#" className="rounded-[5px] border-2 border-cyan-950 p-2">
            Github link
          </a>
        </div>
      </div>

      <div className="shadow-lg shadow-gray-300 rounded-[5px] border-blue-100 bg-gray-100 tarnsition ease-in-out hover:-transition-y-1 hover:scale-101 hover:shadow-gray-400">
        <h2 className="text-2xl m-2">Travel List</h2>
        <p className="mt-2 mx-2">HTML, CSS, React</p>
        <p className="mt-2 mx-2">Listing app for making list with react</p>
        <div className="flex mt-2 gap-2 p-2">
          <a
            href="https://travel-list-ten-rouge.vercel.app/"
            className="bg-cyan-950 text-white rounded-[5px] border-2 border-cyan-950 p-2"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/habibullahsirat/travel-list.git"
            className="rounded-[5px] border-2 border-cyan-950 p-2"
          >
            Github link
          </a>
        </div>
      </div>

      <div className="shadow-lg shadow-gray-300 rounded-[5px] border-blue-100 bg-gray-100 tarnsition ease-in-out hover:-transition-y-1 hover:scale-101 hover:shadow-gray-400">
        <h2 className="text-2xl m-2">Dice Game</h2>
        <p className="mt-2 mx-2">HTML, CSS, Javascript</p>
        <p className="mt-2 mx-2">Web based 2 player game.</p>
        <div className="flex mt-2 gap-2 p-2">
          <a
            href="https://habibullahsirat.github.io/Dice-Game/"
            className="bg-cyan-950 text-white rounded-[5px] border-2 border-cyan-950 p-2"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/habibullahsirat/Dice-Game.git"
            className="rounded-[5px] border-2 border-cyan-950 p-2"
          >
            Github link
          </a>
        </div>
      </div>
    </div>
  );
}
