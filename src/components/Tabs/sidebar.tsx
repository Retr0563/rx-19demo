import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
const Sidebar = () => {
  return (
    <div>
      <aside className="sidebar fixed top-0 h-screen w-60 bg-[#1a1c1e] text-white">
        <ul className="p-4 flex flex-col justify-between items-center h-full ">
          <div className="top">
            <li className="mb-2">
              <div className="flex items-center">
                <FaHome className="mr-2 mb-3" size={24} />
              </div>
            </li>
            <li className="mb-2">
              <div className="flex items-center">
                <FaUser className="mr-2 mb-3" size={24} />
              </div>
            </li>
            <li className="mb-2">
              <div className="flex items-center">
                <FaSearch className="mr-2 mb-3" size={24} />
              </div>
            </li>
          </div>
          <div className="bottom">
            <li>
              <IoMdSettings size={24} />
              <FaUser className="mt-5" size={24} />
            </li>
          </div>
        </ul>
      </aside>
    </div>
  );
};
export default Sidebar;
