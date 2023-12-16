import React from 'react';

const Conact = () => {
    return (
        <div className='w-[443px]  h-[401px] border mx-auto mt-20 bg-[#3c4596]'>
            <div className="text-center ">
                <h1 className='text-5xl  capitalize text-white py-7 '>contact me</h1>
            </div>
            <div className="text-center  ">
            <input type="text" placeholder="Your name" className="input my-3 input-bordered input-warning w-full max-w-xs" />
            <input type="text" placeholder="Your email" className="input my-3 input-bordered input-warning w-full max-w-xs" />
            <input type="text" placeholder="Your Message" className="input my-3 input-bordered input-warning w-full max-w-xs" />
            </div>
        </div>
    );
};

export default Conact; 