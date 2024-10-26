import { FaPhone } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="flex flex-wrap text-sm font-semibold text-slate-500 bg-gray-200 py-2">
        <div className="flex w-9/12   mx-auto justify-between">
            <div className="flex flex-wrap gap-5 ">
                <a href="/" className="no-underline cursor-pointer ">Home</a>
                <a href="/jobpage" className="no-underline cursor-pointer">Find Job</a>
                {/* <a href="#" className="no-underline cursor-pointer">Employers</a>
                <a href="#" className="no-underline cursor-pointer">Candidates</a>
                <a href="#" className="no-underline cursor-pointer">Customer Support</a> */}
            </div>
            <div className="flex items-center text-sm text-gray-700">
                <FaPhone className="mr-2 text-gray-700 text-lg" />
                <p className="font-medium text-gray-700">+1-202-555-0178</p>
            </div>
            </div>
        </div>
    );
};

export default Navbar;
