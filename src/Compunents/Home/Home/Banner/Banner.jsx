import { Link } from 'react-router-dom';
import './Banner.css'


const Banner = () => {

    return (
        <div className="background-banner flex items-center ">
            <div className="bg-black max-w-screen-lg mx-auto px-5 py-7 bg-opacity-60 flex items-center">
                <div className="">
                    <h2 className="text-6xl font-mono text-white">
                        Welcome
                    </h2>
                    <h1 className="text-7xl font-medium text-white">Kingster College</h1>
                    <Link to="/college">
                        <button className='px-3 py-2 bg-red-600 text-white hover:bg-orange-600 font-semibold rounded-2xl hover:text-white mt-8'>College Informission</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;