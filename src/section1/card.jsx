import React from 'react'

export default function Card({src,type,price,data}) {
  return (
    <div className='bg-gray-500 rounded-lg p-4 bg-opacity-50 w-full flex flex-col gap-5'>
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-1'> 
        <img className='h-10' src={src} alt="" />
        <p className='text-slate-50'>{type}</p>
        <img  src="./icons/ep_arrow-down.svg" alt="" />
      </div>
      <p className='text-slate-50'>{price}</p>
    </div>
    <p className='text-slate-50'>{data}</p>
  </div>
  )
}
