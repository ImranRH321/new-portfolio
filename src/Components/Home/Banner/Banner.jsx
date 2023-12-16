import React from 'react';
import Marquee from 'react-fast-marquee';
import bgImage from '../../../assets/boos/sdf.png'
const Banner = () => {
    return (
        <div >
            <div className=" left-0 right-0 top-0 fixed  border-4">
                <Marquee className='uppercase bg-black text-warning'>
                    I love to programing becuse of my passtion I like to learning team member joined ability gegin
                </Marquee>
            </div>
            {/* <div className="hero min-h-screen bg-base-200"> */}
            <div className="hero bg-cover bg-blue-600" style={{backgroundImage: "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fjebunnesajebin%2Fblack-and-white-gif%2F&psig=AOvVaw37Sv6vfQy-hT4dtj7rwDow&ust=1702568169606000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDf3-7ejIMDFQAAAAAdAAAAABA03eb46242aad791aefa762d89a01f631aa5c09f1c73c3bae55df33bcaaa769c33caeea5adbc48')"}}>
                {/* <div className="hero-content flex-col lg:flex-row"> */}
                <div className="grid md:grid-cols-2">
                    <div className='mx-auto border-3'>
                        <img src={bgImage} className="w-[300px] max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className="flex md:justify-center md:items-center mt-10 md:m-0 text-end md:text-left border-3">
                        <div>
                            <h1 className="text-5xl font-bold">Hi, </h1>
                            <h1 className="text-2xl me-4 md:me-0 md:text-4xl font-bold"><span className='text-2xl'>My Name :</span><span className='ms-4 uppercase text-primary'>Imran hossain</span></h1>
                            <h2 className='text-2xl'>I am Imran hossain. And I'm Frontend developer I am interested in the web development sector. I am working very hard for which I am able to master many skills. With my skills I am making some projects viz- Developed Website Design. Client-Side Development. Database Management Systems,e-commerce site, Mobile Application and many different websites. I get to work on a variety of interesting things. I am Hard-working web developer with a flair for creating elegant solutions in the least amount of time. I will apply advanced knowledge as Lead Web Developer with Next Generation Web Development.</h2>
                            
                            <div className="flex gap-x-4">
                                <button className="btn btn-primary">Resume Download</button>
                                <button className="btn btn-success">Conact Me.</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;