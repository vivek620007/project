import React from 'react'
import latpod from '../Component/latpod.jpg';

function Exports() {
  return (
    <div className='max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2'>
        <div className='col-span-1 md:w-[80%] text-center'>
            <img src={latpod} alt="" className='inline' />
        </div>
        <div className='col-span-1 flex flex-col justify-center'>
            <h1 className='text-[#00df9a] font-bold my-2 '>LEARN FROM EXPORTS</h1>
            <p className='my-2'>Lorem impsum dolor sit amet consectetur adipicinig elit. Voluptatum molestiae delectus culpa hic assumenda, volupate reprehenderit dolore autem cum ullam sed odit prespiciatis. Doloribus  quos velit, eveniet ex deserant fuga?</p>
            <button className='w-[30%] md:w-[20%] bg-black text-white p-2 rounded truncate	'>Get Started</button>
        </div>
    </div>
  )
}

export default Exports