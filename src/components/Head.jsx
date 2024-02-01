import React from 'react';
import Logo from '../assets/Logo.svg';
import Edit from '../assets/Edit_duotone.svg';

const Head = () => {
  return (
    <div>
      <div className="flex flex-row gap-2">
        <div className="w-8 h-8">
          <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">My Task Board</h1>
          <span className="text-sm font-semibold">Tasks to keep organized</span>
        </div>
        <div className="w-4 h-4">
          <img src={Edit} alt="Edit" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Head;
