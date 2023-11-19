import React from "react";

const ProjectCard = () => {
  return (
    <div className="flex flex-col gap-13 justify-center rounded-20">
      <div className="flex gap-9">
        <div className="flex items-center justify-center w-100 h-100 rounded-20 bg-white overflow-hidden">
          
        </div>
        <div className="flex flex-col items-start w-348 gap-6">
          <div className="text-1d2235 text-26 font-Manrope font-extrabold leading-normal">2019</div>
          <div className="flex flex-col text-45517d text-20 font-Manrope font-medium leading-130%">
            Developed a product of scan to BIM in ML
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
