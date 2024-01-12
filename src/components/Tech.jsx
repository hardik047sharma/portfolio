import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 my-5' key={technology.name}>
          <BallCanvas icon={technology.icon} name={technology.name} />
          <h3 className='text-white text-[25px] py-5 font-medium text-center'>
          {technology.name}
        </h3>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
