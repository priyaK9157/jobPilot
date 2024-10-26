
import React, {useState} from "react";
import { IoPersonOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoGlobeOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import CompanyProfile from "./settings/personal"
import Profile from "./settings/profile"
import SocialLinks from "./settings/social"
import AccountSettings from "./settings/accsetting"


const Setting = () => {

    const [active, setActive] = useState('CompanyProfile');

    const render = () => {
        switch(active) {
            case "CompanyProfile":
                return <CompanyProfile/>
            case "profile":
                return <Profile/>
            case "social links":
                return <SocialLinks/>
            case "account-settings":
                return <AccountSettings/>
            default:
                return <CompanyProfile/>
        }
    };

    return (
        <div className="ml-48">
            <p className="text-xl font-semibold">Setting</p>
            <nav>
                <ul className="flex gap-14 text-slate-400 pt-4 border-b p-1">
                    <li className={`${active === "CompanyProfile" ? "text-blue-500 text-sm border-b-2 inline-flex items-center gap-1 border-blue-500" : "inline-flex items-center gap-1"}`} onClick={()=>setActive("CompanyProfile")}>
                    <IoPersonOutline className="text-lg font-bold"/><span className="cursor-pointer text-sm font-semibold">Company info</span>
                    </li>

                    <li className={`${active === "profile" ? "text-blue-500 inline-flex items-center gap-1 text-sm border-b-2 border-blue-500" : "inline-flex items-center gap-1"}`} onClick={()=>setActive("profile")}>
                    <CgProfile className="text-lg font-bold"/>  <span className="cursor-pointer text-sm font-semibold">Founding info</span>
                    </li>

                    <li className={`${active === "social links" ? "text-blue-500 inline-flex items-center gap-1 text-sm border-b-2 border-blue-500" : "inline-flex items-center gap-1"}`} onClick={()=>setActive("social links")}>
                    <IoGlobeOutline className="text-lg font-bold"/>  <span className="cursor-pointer text-sm font-semibold">Social Media Profile</span>
                    </li>

                    <li className={`${active === "account-settings" ? "text-blue-500 inline-flex items-center gap-1 text-sm border-b-2 border-blue-500" : "inline-flex items-center gap-1"}`} onClick={()=>setActive("account-settings")}>
                    <MdOutlineSettings className="text-lg font-bold"/>  <span className="cursor-pointer text-sm font-semibold">Account Settings</span>
                    </li>
                </ul>
            </nav>

            <div>
                {render()}
            </div>
        </div>
    );
};

export default Setting;