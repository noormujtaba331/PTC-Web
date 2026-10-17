/* eslint-disable no-unused-vars */
import React from "react";
import ActiveNav from "../components/ActiveNav";

const Assignments = () => {
  return (
    <div className="min-h-screen bg-[#F8FBFF]">
      <ActiveNav />
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl font-bold">Assignments</h1>
        <p className="text-sm text-gray-500 mt-1">View your daily tasks and assignments</p>

        <div className="mt-6 bg-white border border-gray-100 rounded-2xl p-12 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-2xl">📝</div>
          <h3 className="font-bold text-gray-900">You don't have any assignment</h3>
          <p className="text-sm text-gray-500 mt-2 max-w-sm">Assignments will appear here once admin assigns them to you.</p>
        </div>
      </div>
    </div>
  );
};
export default Assignments;