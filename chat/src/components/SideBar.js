import React from "react";
import { FaPlus } from "react-icons/fa";
import { SideBarSettingsData } from "../data/SideBarSettingsData";

const SideBar = () => {
  return (
    <React.Fragment>
      <main>
        <div className="w-96 h-screen bg-black text-white absolute top-0 left-0 flex flex-col justify-between">
          {/* button area */}
          <div className="h-24 centered">
            <button
              type="button"
              className=" h-14 w-11/12 text-white border rounded-lg flex items-center pl-5 gap-4"
            >
              <FaPlus />
              New Chat
            </button>
          </div>

          {/* history area */}
          <div className="w-full centered flex-col">
            <p className="text-xl italic">Unable to load history</p>
            <button
              type="button"
              className=" h-10 px-5 text-white bg-gray-500 rounded-lg capitalize mt-2"
            >
              retry
            </button>
          </div>

          {/* settings area */}
          <div className="border-t pt-5 space-y-5 mb-10">
            {SideBarSettingsData.map((item, index) => {
              return (
                <div key={index}>
                  <div className="flex items-center gap-3 text-xl ml-5 capitalize">
                    <span>{item.icon}</span>
                    <p>{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default SideBar;
