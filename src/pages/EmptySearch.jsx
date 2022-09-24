import React from 'react';

import { searchSvg } from '../assets';

const EmptySearchTerm = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-5'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Search Songs & Artists
      </h2>
      <img src={searchSvg} alt='search' height={450} width={450} />
    </div>
  );
};

export default EmptySearchTerm;
