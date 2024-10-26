import React from 'react';
import { IoMdPerson } from 'react-icons/io';
import { FaBuilding } from 'react-icons/fa';
import { FaBagShopping } from "react-icons/fa6";

const CardComponent = () => {
    return (
        <div className="flex flex-wrap gap-4 pb-20 justify-start w-9/12 mx-auto">

            <div className="bg-white py-2 px-14  flex items-center gap-2">
                <FaBagShopping className="text-blue-500 text-4xl bg-blue-100 p-2" /> 
                <div>
                    <p className="font-semibold text-lg">123000</p>
                    <p className="text-slate-400 text-sm">Live job</p>
                </div>
            </div>

            <div className="bg-white py-2 px-14  flex items-center gap-2">
                <FaBuilding className="text-blue-500 text-4xl bg-blue-100 p-2" /> 
                <div>
                    <p className="font-semibold text-lg">123000</p>
                    <p className="text-slate-400 text-sm">Live job</p>
                </div>
            </div>

            <div className="bg-white py-2 px-14  flex items-center gap-2">
                <IoMdPerson className="text-blue-500 text-4xl bg-blue-100 p-2" />
                <div>
                    <p className="font-semibold text-lg">123000</p>
                    <p className="text-slate-400 text-sm">Live job</p>
                </div>
            </div>

            <div className="bg-white py-2 px-14 flex items-center gap-2">
                <IoMdPerson className="text-blue-500 text-4xl bg-blue-100 p-2" />
                <div>
                    <p className="font-semibold text-lg">123000</p>
                    <p className="text-slate-400 text-sm">Live job</p>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
