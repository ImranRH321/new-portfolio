import React from 'react';

const Project = () => {
    return (
        <div>
            <h1>Project all </h1>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="card w-[350px] bg-base-100 shadow-xl mx-auto">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" className='relative' alt="Shoes" /></figure>
                    <div className="card-body">
                        {/* <h2 className="card-title">Shoes!</h2> */}
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p>  */}
                        <div className="flex flex-col gap-2 absolute  right-0 top-10 ">
                            <button className="btn btn-primary">life link</button>
                            <button className="btn btn-primary">Client sidde</button>
                            <button className="btn btn-primary">server side</button>
                        </div>
                    </div>
                </div>
                <div className="card w-[350px] bg-base-100 shadow-xl mx-auto">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button> 
                        </div>
                    </div>
                </div>
                <div className="card w-[350px] bg-base-100 shadow-xl mx-auto">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-[350px] bg-base-100 shadow-xl mx-auto">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-[350px] bg-base-100 shadow-xl mx-auto">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;

