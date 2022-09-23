import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const TopSkeleton = ({ divRef }) => {
  return (
    <div
      ref={divRef}
      className='xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[450px] max-w-full flex flex-col'
    >
      <div className='w-full flex flex-col mt-7'>
        <div className='flex flex-row justify-between items-center'>
          <h2 className='text-white font-bold text-2xl'>Top Charts</h2>

          <p className='text-gray-300 text-base cursor-pointer'>See more</p>
        </div>

        <div className='mt-4 flex flex-col gap-1'>
          {[1, 2, 3, 4, 5].map((item, i) => (
            <div
              className={`w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2`}
              key={i}
            >
              <h3 className='font-bold text-base text-white mr-3'>{i + 1}.</h3>
              <div className='flex-1 flex flex-row justify-between items-center'>
                <Skeleton circle style={{ width: '80px', height: '80px' }} />
                <div className='flex-1 flex flex-col justify-center mx-3'>
                  <Skeleton style={{ width: '200px', height: '25px' }} />
                  <Skeleton className='mt-3' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSkeleton;
