import React, { useState } from 'react'
import Card from './card'
export default function Section() {
  const [cadr1, setcadr1] = useState([
    {
      ids: "Bitcoin", currencies: "USD", src: "./icons/Vector.svg", className: "bg-orange-400 p-3 flex flex-col gap-3 rounded-lg w-full"
    },{
      ids: "Ethereum", currencies: "USD", src: "./icons/ethereum.svg", className: "bg-red-400 p-3 flex flex-col gap-3 rounded-lg w-full"
    },{
      ids: "Litecoin", currencies: "USD", src: "./icons/litecoin.svg", className: "bg-green-400 p-3 flex flex-col gap-3 rounded-lg w-full"
    }
  ])
  return (
    <div className='col-span-6 flex flex-col items-center py-3'>
      <div className='flex items-center gap-2 bg-slate-600 rounded-lg py-2 px-4'>
        <img src="./icons/search.svg" alt="" />
        <input className='bg-transparent outline-none text-slate-50' placeholder='Search Cryptocurrency' type="text" name="" id="" />
      </div>
      <div className='w-full my-7'>
        <p className='text-3xl text-slate-50'>Hi, Jay Vyas</p>
      </div>
      <div className="w-full flex justify-between gap-4">
        <Card className={"bg-orange-400 p-3 flex flex-col gap-3 rounded-lg w-full"} ids={"Bitcoin"} src={"./icons/Vector.svg"} currencies={"USD"} />
        <Card className={"bg-red-400 p-3 flex flex-col gap-3 rounded-lg w-full"} ids={"Bitcoin"} src={"./icons/ethereum.svg"} currencies={"USD"} />
        <Card className={"bg-green-400 p-3 flex flex-col gap-3 rounded-lg w-full"} ids={"Bitcoin"} src={"./icons/litecoin.svg"} currencies={"USD"} />
      </div>
      <div className="flex my-4 justify-between w-full">
        <div>
          <p className='text-slate-50 text-xl'>Latest Activity</p>
          <p className='text-slate-700'>Updated 12 minutes ago</p>
        </div>
        <div className='flex gap-2'>
          <img src="./icons/Frame 1200.svg" alt="" />
          <img src="./icons/Frame 1208.svg" alt="" />
        </div>
      </div>
      <div className='grid grid-cols-5 content-between place-items-center w-full my-4'>
        <div className='flex justify-center items-center'>
          <img src="./icons/Frame 1210.svg" alt="" />
        </div>
        <div>
          <p className='text-slate-50 text-lg'>Insurance</p>
          <p className='text-slate-700 text-sm'>Property Coverage</p>
        </div>
        <div>
          <p className='text-slate-50 text-lg'>LTC Wallet</p>
          <p className='text-slate-700 text-sm'>Personal account</p>
        </div>
        <div>
          <p className='text-slate-50 text-lg'>7 Jun, 21</p>
          <p className='text-slate-700 text-sm'>Last payment</p>
        </div>
        <div>
          <p className='text-slate-50 text-lg'>-10.24 LTC</p>
          <p className='text-slate-700 text-sm'>Balance</p>
        </div>
      </div>
      <div className='grid grid-cols-5 content-between place-items-center w-full'>
        <div className='flex justify-center items-center'>
          <img src="./icons/Frame 1201.svg" alt="" />
        </div>
        <div>
          <p className='text-slate-50 text-lg'>Insurance</p>
          <p className='text-slate-700'>Property Coverage</p>
        </div>
        <div>
          <p className='text-slate-50 text-lg'>LTC Wallet</p>
          <p className='text-slate-700'>Personal account</p>
        </div>
        <div>
          <p className='text-slate-50 text-lg'>7 Jun, 21</p>
          <p className='text-slate-700'>Last payment</p>
        </div>
        <div>
          <p className='text-slate-50 text-lg'>-10.24 LTC</p>
          <p className='text-slate-700'>Balance</p>
        </div>
      </div>
    </div>
  )
}
