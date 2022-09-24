import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CardsSkeleton = ({ artist }) => {
  return (
    <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
      {[1, 2, 3, 4, 5, 6].map((song, i) => (
        <div className='flex flex-col w-[200px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
          <div className='relative w-full h-56 group'>
            <div
              className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex `}
            ></div>
            <Skeleton style={{ width: '100%', height: '100%' }} />
          </div>

          <div className='mt-4 flex flex-col'>
            <Skeleton />
            {artist || <Skeleton style={{ width: '50%', marginTop: '10px' }} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsSkeleton;
