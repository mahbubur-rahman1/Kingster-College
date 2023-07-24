import { Link } from "react-router-dom";


const College = () => {
    return (
        <div>
            <div className="">
                <div className="">
                    <div className="college-banner flex items-center ">
                        <div className="bg-black h-64 max-w-screen-lg mx-auto px-5 py-7 bg-opacity-60 flex items-center">
                            <div className="">
                                <h1 className="text-7xl font-medium text-white">Kingster College</h1>
                                <Link to="/college">

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default College;