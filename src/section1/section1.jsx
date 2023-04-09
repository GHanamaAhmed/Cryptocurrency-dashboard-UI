import React from 'react'
import Card from "./card"
import Wallet from "./wallets"
export default function Section1() {
  return (
    <div className='col-span-3 flex flex-col gap-10 px-4 py-2'>
      <div className='w-full flex justify-between items-center'>
        <p className='text-slate-50'>Quit</p>
        <p className='text-slate-50'>Personal</p>
        <div className='flex justify-center items-center overflow-hidden rounded-full'>
        <img src="./icons/Frame 1300.jpg" alt="" width={40} />
        </div>
      </div>
      <div className='w-full flex flex-col items-center gap-5'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-2xl text-slate-50'>Payments</p>
          <p className='text-slate-50'>Clear</p>
        </div>
        <Card src={"./icons/Frame 1308.svg"} type={"LTC"} price={"+15.08 USD"} data={"06/05/2022 19:22"} />
        <Card src={"./icons/Frame 1309.svg"} type={"LINK"} price={"+957.96 USD"} data={"07/05/2022 19:22"} />
      </div>
      <div className='wallets w-full flex flex-col items-center gap-2 max-h-44 overflow-auto'>
        <Wallet src={"./icons/Frame 1400.svg"} type={"BTC"} name={"Bitcoin"} porcent={"37"} porcent1={"-2.5"} />
        <Wallet src={"./icons/Frame 1405.svg"} type={"BTC"} name={"Bitcoin"} porcent={"37"} porcent1={"-2.5"} />
        <Wallet src={"./icons/Frame 1406.svg"} type={"BTC"} name={"Bitcoin"} porcent={"37"} porcent1={"-2.5"} />
        <Wallet src={"./icons/Frame 1407.svg"} type={"BTC"} name={"Bitcoin"} porcent={"37"} porcent1={"-2.5"} />
      </div>
    </div>
  )
}
