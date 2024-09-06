import React from 'react';

function Section({ title, description, imageSrc, reverse }) {
  return (
    <div className={`max-w-7xl mx-auto flex flex-col ${reverse ? 'lg:flex-row-reverse ' : 'lg:flex-row '} justify-between items-center gap-10 `}>
      <div className="lg:w-2/3">
        <div className="text-[#C49E5F] lg:text-7xl text-4xl cinzel-font mb-10 mt-8">
          {title}
        </div>
        <div className="text-black text-xl lg:w-2/3 mt-0 tracking-normal font-medium">
          {description}
        </div>
      </div>

      <div className="mt-8">
        <img src={imageSrc} alt={title} className="h-auto w-[100%] object-cover" />
      </div>
    </div>
  );
}

export default Section;
