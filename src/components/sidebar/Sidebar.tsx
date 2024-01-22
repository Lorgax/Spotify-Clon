import { HomeIcon, SearchIcon } from "../icons";


export const Sidebar = () => {
  return (
    <>
        <aside className="col-span-1 row-span-5 bg-[#121212] rounded-md text-white my-2 ms-2 p-3">
            <ul>
                <li>
                  <a href="" className="flex font-bold items-center">
                    <HomeIcon className="me-4" width="30px" height="30px" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="flex font-bold items-center">
                    <SearchIcon className="me-4" width="30px" height="30px" />
                    Search
                  </a>
                </li>
                <li>List</li>
            </ul>
        </aside>
    </>
  )
}
