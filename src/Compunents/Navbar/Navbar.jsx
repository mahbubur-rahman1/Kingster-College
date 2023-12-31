import { Link } from "react-router-dom";

const Navbar = () => {
    const navOption = <>
        <Link to=""><li className="px-2 py-1 hover:bg-red-800 hover:text-white font-semibold">Home</li></Link>
        <Link to="/college"><li className="px-2 py-1 hover:bg-red-800 hover:text-white font-semibold">Colleges</li></Link>
        <Link to="/admission"><li className="px-2 py-1 hover:bg-red-800 hover:text-white font-semibold">Admission</li></Link>
        <Link to=""><li className="px-2 py-1 hover:bg-red-800 hover:text-white font-semibold">My College</li></Link>




    </>
    return (
        <div className="">
            <div className="navbar bg-gray-200">
                <div className="flex-1 gap-3">
                    <img className="h-16 rounded-3xl" src="https://cdn.sanity.io/images/kts928pd/production/c2fcbae1ac2dcdbf24af1e394b95cde0635cbc70-731x731.png" alt="" />
                    <h3 className="text-2xl font-bold">Kingster College</h3>
                </div>
                <div className="flex-none gap-2">
                    <ul tabIndex={0} className="md:flex hidden">
                        {navOption}
                    </ul>
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="">
                        <Link to="/login"><button className="btn bg-blue-600 text-white font-semibold">Login</button></Link>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden btn-circle avatar">
                            <div className="w-10  rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                        </label>
                        <ul  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;