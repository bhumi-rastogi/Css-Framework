import React from "react";

const AlertWindow = () => {
  return (
  
    <div className="p-7 px-16">
      <button className="text-white p-4 bg-blue-900 hover:bg-blue-800 color wheather border border-blue-900 text-s font-extrabold">BUTTON ONE</button>

      <div className="text-red bg-pink-100 hover:bg-pink-200 color wheather border border-red-500 rounded text-red-900 px-10 py-6 my-10">
        <h3 className="text-3xl font-bold mb-5 hover:text-red-700">Alert</h3>
        
        <span className="text-xl font-normal font-bold mb-5 hover:text-red-700">Contributer Bhumi is awesome!!!</span>
      </div>
    </div>
  );
};

export default AlertWindow;