import React from "react";

const Step = () => {
  return (
    <div className="text-center bg-slate-700">
      <ul className="steps steps-vertical h-[500px]">
        <li className="step step-primary">Register</li>
        <li className="step step-primary">Choose plan</li>
        <li className="step">Purchase</li>
        <li className="step">Learn</li>
        <li className="step">And Earn</li>
      </ul>
    </div>
  );
};

export default Step;
