import { Link } from "react-router-dom";
import { HomeIcon, LibrariesIcon, SearchIcon } from "../icons";

export const Sidebar = () => {

  return (
    <>
      <div className="grid grid-rows-6 row-span-6">
      <aside className="col-span-2 row-span-1 bg-[#121212] rounded-md text-[#ffffffaf] mt-2 ms-2 p-5">
          <ul>
              <li>
                <Link to={"/"} className="flex cursor-pointer font-bold items-center hover:text-white">
                  <HomeIcon className="me-5 icon" width="27px" height="27px" />
                  Home
                </Link>
              </li>
              <li className="mt-5">
                <Link to={"/search"} className="flex cursor-pointer font-bold items-center hover:text-white">
                  <SearchIcon className="me-5 icon" width="27px" height="27px" />
                  Search
                </Link>
              </li>
          </ul>
      </aside>
      <aside className="col-span-2 row-span-5 bg-[#121212] rounded-md text-[#ffffffaf] my-2 ms-2 p-5">
          <ul>
              <li>
                <a href="" className="flex cursor-pointer font-bold items-center hover:text-white">
                  <LibrariesIcon className="me-5 icon" width="27px" height="27px" />
                  Your Libraries
                </a>
              </li>
          </ul>
      </aside>
      </div>
     </>
  )
}
