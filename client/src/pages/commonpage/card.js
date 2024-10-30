import React from 'react';
import { IoMdPerson } from 'react-icons/io';
import { FaBuilding } from 'react-icons/fa';
import { FaBagShopping } from "react-icons/fa6";

const CardComponent = ({data,text,icon}) => {
    return (
        <div className="flex flex-wrap gap-4 pb-5 justify-start w-9/12 mx-auto ">

            <div className="bg-white   h-[4.4rem]  w-48 p-2 flex items-center gap-3  rounded-md ">
              <div className='bg-blue-50 rounded-md w-12 h-12 flex justify-center items-center'>
                <FaBagShopping className="text-blue-500 text-xl    " /> 
              </div>
                
                <div>
                    <p className=" font-semibold text-slate-900 text-lg">{data}</p>;
                    <p className="text-slate-400 text-sm">{text}</p>
                </div>
            </div>

        </div>
    );
};

export default CardComponent;
