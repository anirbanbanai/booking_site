import React from 'react';
import Image from 'next/image';
import videos from '../assests/v.mp4'
import img from "../assests/pexels-sevenstorm-juhaszimrus-588016.jpg"

const Homes = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-3xl md:text-5xl font-semibold text-center'>Create ever lasting Memories With us</h1>

            <div className='mt-10'>
                {/* <video src={videos} autoPlay muted loop typeof='video/mp4'></video> */}
            <Image className='mx-auto' alt="image" src={img} width={700} height={555}/>
            </div>
                {/* <img src={img} alt="img" /> */}
        </div>
    );
};

export default Homes;