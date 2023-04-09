import { useState } from "react"

function Menus() {
    const [currItem, setcurrItem] = useState(0)
    return (
        <div className="col-span-3 gap-3 flex flex-col justify-between items-center py-3">
            <h1 className="font-bold text-slate-50 tracking-widest text-2xl">DOT STUDIOS</h1>
            <div className="grid grid-cols-2 grid-rows-5 h-fit gap-y-5 gap-x-7">
                <img className={currItem == 0 ? "" : "brightness-50"} onClick={() => setcurrItem(0)} src="./icons/Frame 1190.svg" alt="" />
                <img className={currItem == 1 ? "" : "brightness-50"} onClick={() => setcurrItem(1)} src="./icons/Frame 1191.svg" alt="" />
                <img className={currItem == 2 ? "" : "brightness-50"} onClick={() => setcurrItem(2)} src="./icons/Frame 1192.svg" alt="" />
                <img className={currItem == 3 ? "" : "brightness-50"} onClick={() => setcurrItem(3)} src="./icons/Frame 1193.svg" alt="" />
                <img className={currItem == 4 ? "" : "brightness-50"} onClick={() => setcurrItem(4)} src="./icons/Frame 1194.svg" alt="" />
                <img className={currItem == 5 ? "" : "brightness-50"} onClick={() => setcurrItem(5)} src="./icons/Frame 1195.svg" alt="" />
                <img className={currItem == 6 ? "" : "brightness-50"} onClick={() => setcurrItem(6)} src="./icons/Frame 1196.svg" alt="" />
                <img className={currItem == 7 ? "" : "brightness-50"} onClick={() => setcurrItem(7)} src="./icons/Frame 1197.svg" alt="" />
                <img className={currItem == 8 ? "" : "brightness-50"} onClick={() => setcurrItem(8)} src="./icons/Frame 1198.svg" alt="" />
                <img className={currItem == 9 ? "" : "brightness-50"} onClick={() => setcurrItem(9)} src="./icons/Frame 1199.svg" alt="" />
            </div>
            <div className="w-40 h-1/3 py-3 bg-orange-400 rounded-lg flex flex-col justify-around items-center gap-2">
                <img src="./icons/SuperToroid-Yellow-Glossy.svg" alt="" />
                <button className="bg-orange-500 rounded-lg py-2 px-4">Get Pro Now</button>
            </div>
        </div>
    )
}
export default Menus