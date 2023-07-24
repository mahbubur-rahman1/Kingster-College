import { Link } from "react-router-dom";


const CollegeCart = ({ cart }) => {
    const { name, instrctor, credit, lavel, picture } = cart;
    return (
        <div>
            <div className=" mt-6 gap-3 border-dashed">
                <div className="">
                    <img className="w-full h-56 rounded-3xl" src={picture} alt="" />
                </div>
                <div className="">
                    <h3 className="text-2xl font-semibold mt-1"><span className="text-red-700 font-semibold">{name}  </span><span className=""></span></h3>
                    <h3 className="text-2xl font-semibold mt-1"><span className="text-red-700 font-semibold">Lavel: </span>{lavel}<span className=""></span></h3>
                    <h3 className="text-2xl flex items-center font-semibold mt-1"><span className="text-red-700 font-semibold">Instrctor:  </span>{instrctor}<span className="">
                    </span></h3>
                    <h3 className="text-2xl flex items-center font-semibold mt-1"><span className="text-red-700 font-semibold">Credit:  </span>{instrctor}<span className="">{credit}
                    </span></h3>
                    <Link to="/admission">
                        <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-xl mt-3">Addmission</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CollegeCart;