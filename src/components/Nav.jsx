import React from 'react';

const Navpage = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 h-20 text-white border-b-2 border-gray-700 w-full hover:bg-blue-100 border-gray-700 hover:cursor-pointer">
      <div className="flex items-center flex-shrink-0 text-white mr-6 xl:text-3xl font-bold hover:text-blue-600 hover:cursor-pointer hover:underline hover:decoration-solid hover:decoration-4 hover:underline-offset-8 hover:decoration-blue-600 ">
        <div className="text-3xl font-bold hover:text-blue-600 hover:cursor-pointer hover:underline hover:decoration-solid hover:decoration-4 hover:underline-offset-8 hover:decoration-blue-600">KALVIAN</div>
      </div>
      <div className="flex flex-1 items-center justify-between ">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hover:text-blue-600 hover:cursor-pointer hover:underline hover:decoration-solid hover:decoration-4 hover:underline-offset-8 hover:decoration-blue-600">
          <a href=" " className="mr-4 xl:text-lg font-semibold text-gray-600 hover:text-blue-600 hover:cursor-pointer hover:underline hover:decoration-solid hover:decoration-4 hover:underline-offset-8 hover:decoration-blue-600
          ">About us</a>
          <a href=" " className="mr-4 xl:text-lg font-semibold text-gray-600 hover:text-blue-600 hover:cursor-pointer hover:underline hover:decoration-solid hover:decoration-4 hover:underline-offset-8 hover:decoration-blue-600 ">Contacts</a>
          <a href=" " className="mr-4 xl:text-lg font-semibold text-gray-600 hover:text-blue-600 hover:cursor-pointer hover:underline hover:decoration-solid hover:decoration-4 hover:underline-offset-8 hover:decoration-blue-600">Courses</a>
          <a href=" " className="mr-4 xl:text-lg font-semibold text-gray-600 hover:text-blue-600 hover:cursor-pointer hover:underline hover:decoration-solid hover:decoration-4 hover:underline-offset-8 hover:decoration-blue-600">Placements</a>

        </div>
        <div>
          <button href=" " className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-600 hover:bg-white mt-4 lg:mt-0 hover:cursor-pointer hover:underline hover:decoration-solid hover:decoration-4 hover:underline-offset-8 hover:decoration-blue-600">Login</button>
          
        </div>
      </div>
    </nav>
  );
};

export default Navpage;