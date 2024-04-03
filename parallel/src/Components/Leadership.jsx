import React from "react";
import LeadershipInfo from "./LeadershipInfo";

const Leadership = ({ leadership }) => {
  return (
    <div>
      <div className="lg:text-center mt-6">
        <h2 className="text-3xl font-medium text-gray-800 flex justify-center">
          Leadership / Culture
        </h2>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-11/12">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16 mt-16">
            {leadership.map((feature) => (
              <LeadershipInfo {...feature} key={feature.heading} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
