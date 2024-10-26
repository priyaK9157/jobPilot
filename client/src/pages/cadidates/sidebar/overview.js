import React from "react";
import { IoMdPerson } from 'react-icons/io';
import { FaBuilding } from 'react-icons/fa';
import { FaBagShopping } from "react-icons/fa6";


const overview = () => {
    return (
        <div className="ml-48">
            <div className="">
                <p className="font-bold text-xl">Hello There !</p>
                <p className="text-slate-400 font-semibold text-sm pt-2">Here is your daily activity and job alerts</p>
            </div>

            <div className="flex gap-4 pb-20 pt-8">

                <div className="bg-blue-100 py-2 px-16 rounded-lg shadow-lg flex justify-between items-center gap-2"> 
                    <div>
                        <p className="font-semibold text-xl">123000</p>
                        <p className="text-gray-600">Live job</p>
                    </div>
                    <FaBagShopping className="text-blue-500 text-3xl bg-white p-1" />
                </div>

                <div className="bg-yellow-100 py-2 px-16 rounded-lg shadow-lg flex items-center gap-2"> 
                    <div>
                        <p className="font-semibold text-xl">123000</p>
                        <p className="text-gray-600">Live job</p>
                    </div>
                    <FaBuilding className="text-blue-500 text-3xl bg-white p-1" />
                </div>

                <div className="bg-green-100 py-2 px-16 rounded-lg shadow-lg flex items-center gap-2">
                    <div>
                        <p className="font-semibold text-xl">123000</p>
                        <p className="text-gray-600">Live job</p>
                    </div>
                    <IoMdPerson className="text-blue-500 text-3xl bg-white p-1" />
                </div>
            </div>
        </div>
    )
}

export default overview;