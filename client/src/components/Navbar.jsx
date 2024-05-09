import { FaShoppingCart, FaBars, FaSearch } from "react-icons/fa";
import { SiFoodpanda } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow-lg h-20 px-8 overflow-x-hidden">

      <div className="flex space-x-40">
        <FaBars className="h-8 w-8 hover:text-teal-600 sm:hidden" />
        <h1 className="font-bold text-3xl flex gap-2">
          <SiFoodpanda className="mt-1" />
          foody
        </h1>
        <div className="sm:hidden ml-4">
          <FaSearch className="h-8 w-8 text-black hover:text-teal-600" />
        </div>
      </div>

      <div className="hidden lg:flex items-center rounded-lg border border-black p-2">
        <FaSearch className="text-black" />
        <input
          className="p-2 ml-2 text-black placeholder-white focus:outline-none"
          placeholder="Search..."
        />
      </div>

      <div className="flex items-center space-x-8">
        <button className="hover:bg-slate-200 text-black sm:block hidden font-semibold px-4 py-2 rounded-sm shadow-md text-xl border border-black flex-shrink-0">
          Sign up
        </button>
        <button className="hover:bg-slate-200 text-black sm:block hidden font-semibold px-4 py-2 rounded-sm shadow-md text-xl border border-black flex-shrink-0">
          Log in
        </button>
        <button className="sm:block mb-2 ">
          <FaShoppingCart className="h-8 w-8 hover:text-teal-600" />
        </button>
      </div>
      
    </div>
  );
};

export default Navbar;

