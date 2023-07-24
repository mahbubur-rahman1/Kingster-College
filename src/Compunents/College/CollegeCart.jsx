import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';



const CollegeCart = ({college}) => {
    const {collegName ,courseName, rating, picture} = college;

    return (
        <div>
                <div className="grid md:grid-cols-2 mt-6 gap-3 border-dashed">
                    <div className="">
                       <img className="w-full h-56 rounded-3xl" src={picture} alt="" />
                    </div>
                    <div className="">
                        <h3 className="text-2xl font-semibold mt-1"><span className="text-red-700 font-semibold">College Name:  </span><span className="">{collegName}</span></h3>
                        <h3 className="text-2xl font-semibold mt-1"><span className="text-red-700 font-semibold">Subject: </span><span className="">{courseName}</span></h3>
                        <h3 className="text-2xl flex items-center font-semibold mt-1"><span className="text-red-700 font-semibold">Rating:  </span><span className=""><Rating
                            style={{ maxWidth: 120 }}
                            value={rating}
                            readOnly
                        /></span></h3>
                        <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-xl mt-3">Addmission</button>
                    </div>
                </div>
            </div>
    );
};

export default CollegeCart;