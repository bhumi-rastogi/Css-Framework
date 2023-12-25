import React from 'react';

const Cardpage = () => {
  return (
    <div className="p-10 pb-16 mx-auto bg-white rounded-xl shadow-xl flex items-center space-x-5 mt-0">
      <div>
        <img className="h-10 w-15" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt=""/>
      </div>
      <div>
        <div className="text-l font-bold text-black">Kalvium</div>
        <p className="text-s font-normal text-gray-500">We have new Course!!</p>
      </div>
    </div>
  );
};

export default Cardpage;