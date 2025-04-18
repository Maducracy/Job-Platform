import React from "react";
import { useApistore } from "../Zustand";

function Hero() {
  const data = useApistore();
  const { output, fetchData } = data;
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
           Welcome to{" "}
          <span className="text-indigo-600">Your Next Opportunity</span>
        </h2>

        <p className="text-gray-600 mt-2">
          Your journey to finding the perfect job starts here.
        </p>
      </div>

      <button
        onClick={fetchData}
        className="bg-blue-600 text-white px-4 py-1 rounded-[5px] hover:bg-blue-700 transition cursor-pointer"
      >
        Find Jobs
      </button>
    </div>
  );
}

export default Hero;
