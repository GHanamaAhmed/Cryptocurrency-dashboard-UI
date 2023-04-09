import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Card({ src, ids, currencies, className }) {
    const [coins, setCoins] = useState([
        { id: "bitcoin", symbol: "btc", name: "Bitcoin" },
        { id: "ethereum-wormhole", symbol: "eth", name: "Ethereum" },
        { id: "litecoin", symbol: "ltc", name: "Litecoin" },
        { id: "USD", symbol: "USD", name: "USD" }
    ])
    const [response, setResponse] = useState(null)
    const [display,setDisplay]=useState("hidden")
    var coin = coins.find((e) => e.name == ids)
    var ccurrencies = coins.find(e => e.name == currencies)
    const [price, setPrice] = useState(Math.random() * 20)
    useEffect(() => {
        async function fetch() {
            const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin.id}&vs_currencies=${ccurrencies.id}`);
            setResponse(res.data);
        }
        fetch();
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setPrice((Math.random() * 20))
        }, 10000);
        return () => clearInterval(interval);
    }, [])
   const handleDisplay=(e)=>{
        e.preventDefault()
        setDisplay((e)=>e==""?"hidden":"")
    }
    return (
        <div className={className}>
            <div className='w-full flex justify-between relative'>
                <p className='font-semibold'>{coin.name}</p>

                <div className='absolute right-1 top-1 flex flex-col items-end'>
                    <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        type="button"
                        onClick={handleDisplay}
                        className='justify-end'
                    >
                        <img className='self-end' src="./icons/bx_dots-vertical-rounded.svg" alt="" />
                    </button>
                    {/* Dropdown menu */}
                    <div
                        id="dropdown"
                        className={`z-10 ${display} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                    >
                        <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownDefaultButton"
                        >
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Earnings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <img className='h-24 self-start' src={src} alt="" />
            <p className='text-xl font-bold'>{price.toFixed(2)} {coin.symbol}</p>
            <p>{response == null ? "Lading..." : ((Object.values(Object.values(response)[0])[0]) * price).toFixed(2)} {ccurrencies.symbol}</p>
        </div>
    )
}
