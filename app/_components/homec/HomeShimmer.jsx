'use client'
import React from "react";

const HomeShimmer = () => {
  return (
    <div className="animate-pulse">
      {/* Banner shimmer */}
      <div className="h-[200px] bg-gray-200 rounded-lg mb-8"></div>
      
      {/* Consultation section shimmer */}
      <div className="mb-8">
        <div className="h-8 bg-gray-200 w-1/4 mb-4 rounded"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
      
      {/* Other sections shimmer */}
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-64 bg-gray-200 rounded-lg mb-8"></div>
      ))}
    </div>
  );
};

export default HomeShimmer; 