import React, {useState} from "react";
import { FaBars, FaPlus } from "react-icons/fa";
import SideBar from "./SideBar";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <React.Fragment>
      <main>
        <div className="h-20  text-white flex justify-between items-center px-10 border-b ">
          <div>
          <FaBars className="w-6 h-6" onClick={handleToggle} />
          </div>
          <div>
          <p className="text-2xl">New Charts</p>
          </div>
          <div>
          <FaPlus className="w-6 h-6" onClick={handleToggle}/>
          </div>
        </div>

        {/*sidebar section */}
        <div>
          {
            toggle && <SideBar/>
          }
            
        </div>

      
      </main>
    </React.Fragment>
  );
};

export default Navbar;
