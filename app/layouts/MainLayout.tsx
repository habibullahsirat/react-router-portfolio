import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

function NavBar() {
  return (
    <div className="flex justify-between bg-white text-xl m-2 p-3 sticky top-0 shadow-md shadow-gray-300">
      <h1 className="text-2xl text-[#0F172A] font-bold font-serif">
        Habibullah Sirat
      </h1>
      <div className="flex justify-between gap-4">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="CV_of_Habibullah_Sirat.pdf" download>
          Download CV
        </a>
        <a href="#skills">Skills</a>
        <a href="#featured_projects">Projects</a>
        <a href="#contact">Conatct</a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-cyan-950 m-2 px-8 pt-4 pb-4 text-center text-white"
    >
      <p className="mb-2">Let's build something great together.</p>
      <p className="mb-2">
        <a href="#">habibullah.sirat.001@gmail.com</a>
      </p>
      <p>&copy;2026 Habibullah Sirat. All rights reserved.</p>
    </footer>
  );
}
