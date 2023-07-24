import { Link } from "react-router-dom";

const Navbar = () => {
    const navOption = <>
        <Link to=""><li className="px-2 py-1 hover:bg-red-800 hover:text-white font-semibold">Home</li></Link>
        <Link to="/college"><li className="px-2 py-1 hover:bg-red-800 hover:text-white font-semibold">Colleges</li></Link>
        <Link to=""><li className="px-2 py-1 hover:bg-red-800 hover:text-white font-semibold">Admission</li></Link>
        <Link to=""><li className="px-2 py-1 hover:bg-red-800 hover:text-white font-semibold">My College</li></Link>
    </>
    return (
        <div className="">
            <div className="navbar bg-gray-200">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="flex-none gap-2">
                    <ul tabIndex={0} className="flex">
                        {navOption}
                    </ul>
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;