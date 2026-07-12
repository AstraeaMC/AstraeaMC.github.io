import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav = useNavigate();
  function navigatePage(page: string) {
    nav(page);
  }

  return (
    <nav className={`sticky top-0 z-50 w-full bg-[#050505] shadow-md`}>
      <div className={`p-2 flex justify-between font-DMSANS`}>
        <div className="flex justify-between ">
          <button
            onClick={() => navigatePage("/")}
            className="m-3 text-gray-400 transition duration-400 ease-in-out hover:text-white"
          >
            Home
          </button>

          <button
            onClick={() => navigatePage("/downloads")}
            className="m-3 text-gray-400 transition duration-400 ease-in-out hover:text-white"
          >
            Downloads
          </button>
          <button
            onClick={() => navigatePage("/docs")}
            className="m-3 text-gray-400 transition duration-400 ease-in-out hover:text-white"
          >
            Docs
          </button>
          <button
            onClick={() => navigatePage("/about")}
            className="m-3 text-gray-400 transition duration-400 ease-in-out hover:text-white"
          >
            About
          </button>
        </div>
        <div className="flex">
          <p className="m-3 text-gray-400 ">v0.0.1</p>
        </div>
      </div>
    </nav>
  );
}
