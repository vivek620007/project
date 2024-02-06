import React from 'react'
import Typed from 'react-typed';

function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[100px]'>
        <div className='max-w-[1240px] my-[10px] mx-auto text-center font-bold'>
            <div className='text-xl md:text-3xl md:p-[24px]'>
                Learn with us
            </div>
            <h2 className='text-white text-5xl md:text-[60px] md-[24px]'>Grow with us.</h2>
            <div className='text-[20px] md:text-[50px] md:p-[24px] text-white'>
                Learn
                <Typed
                className='pl-3'
                    strings={['Web Development','Digital Marketing','Ethical Hacking']}
                    typeSpeed={100}
                    loop = {true}
                    backSpeed={120}
                    />
            </div>
            <button className='md:w-[10%] bg-black text-white p-2 font-normal rounded '>Get Started</button>
        </div>
    </div>
  )
}

export default Banner