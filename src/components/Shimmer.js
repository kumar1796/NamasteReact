import React from "react";

const Shimmer = () => {
  return (
    // <h1>Shimmer UI Loading........</h1>
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((e) => (
          <div key={index} className='shimmer-card' ></div>
        ))}
    </div>
  );
};

export default Shimmer;
