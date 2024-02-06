import React from 'react'

function Newsletter() {
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
                <div className='m-2'>
                    <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learn least I.T skills</h1>
                    <span className='text-white'>Sign up to our newsletter and  stay up to date. </span>
                </div>
                <div className='m-2'>
                    <input type="text" className='rounded mb-2 py-2 px-2 w-[60%] p-3 mr-2 text-slate-600' placeholder='Email' />
                    <button className='md:w-[30%] bg-black text-white p-2 rounded '>Get Started</button>
                    <br />
                    <p className='text-white'>We care bout protection of your data.Read our <br /> <a href=""
                    className=' text-black'>Privacy Policy</a></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter