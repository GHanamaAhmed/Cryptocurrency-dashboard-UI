import React from 'react'

export default function Wallet({src,type,name,porcent,porcent1}) {
    return (
        <div className='w-full flex justify-between'>
            <div className='flex gap-2'>
                <img src={src} alt="" />
                <div className='flex flex-col'>
                    <p className='text-xl text-slate-50'>{type}</p>
                    <p className='text-slate-50 text-sm'>{name}</p>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='text-xl text-slate-50'>{porcent}%</p>
                <p className='text-slate-50 text-sm'>{porcent1}%</p>
            </div>
        </div>
    )
}
