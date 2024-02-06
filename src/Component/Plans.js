import React from 'react'
import { FaUser, FaUserNurse, FaUserTie } from "react-icons/fa";
function Plans() {
    return (
        <div className='w-full py-[100px] px-2'>
            <div className='w-[90%] ml-[5%] mr-[5%] md:grid grid-cols-3 gap-6'>
                <div className='shadow-xl px-12 py-3 h-[400px] hover:scale-105 duration-500'>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center border-2">
                        <h1 className='p-1'> <FaUser /></h1>
                    </div>
                    <h1 className='font-bold'> Web Development</h1>
                    <h1 className='font-bold md:text-[60px]'>$ 149</h1>
                    <h3 className='p-2'>Lorem ipsum is simply</h3>
                    <h3 className='p-2'>Lorem ipsum is simple dummy text of
                        <br />
                        the printing
                    </h3>
                    <h3 className='p-2'>Lorem ipsum is simply dumm.</h3>
                    <button className='w-[50%] bg-[#00df9a] text-white p-2 rounded hover:bg-black hover:text-[#00df9a] '>Start Trial</button>
                </div>
                <div className='shadow-xl h-[400px] px-12 py-3 bg-gray-100 hover:scale-105 duration-500'>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center border-2">
                        <h1 className='p-1'> <FaUserNurse /></h1>
                    </div>
                    <h1 className='font-bold '>Digital Marketing</h1>
                    <h1 className='font-bold md:text-[60px]'>$ 149</h1>
                    <h3 className='p-1'>Lorem ipsum is simply</h3>
                    <h3 className='p-1'>Lorem ipsum is simple dummy text of
                        <br />
                        the printing
                    </h3>
                    <h3 className='p-1'>Lorem ipsum is simply dumm.</h3>
                    <button className='w-[50%] bg-[#00df9a] text-white p-2 rounded hover:bg-black hover:text-[#00df9a] '>Start Trial</button>
                </div>
                <div className='shadow-xl h-[400px] px-12 py-3 hover:scale-105 duration-500'>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center border-2">
                        <h1 className='p-1'> <FaUserTie /></h1>
                    </div>
                    <h1 className='font-bold '>Ethical Hacking</h1>
                    <h1 className='font-bold md:text-[60px]'>$ 149</h1>
                    <h3 className='p-2'>Lorem ipsum is simply</h3>
                    <h3 className='p-2'>Lorem ipsum is simple dummy text of
                        <br />
                        the printing
                    </h3>
                    <h3 className='p-2'>Lorem ipsum is simply dumm.</h3>
                    <button className='w-[50%] bg-[#00df9a] text-white p-2 rounded hover:bg-black hover:text-[#00df9a] '>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Plans