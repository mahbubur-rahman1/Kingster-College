const CollegeCart = ({college}) => {
    const {collegName ,courseName, rating, picture} = college;

    return (
        <div>
                <div className="grid md:grid-cols-2 mt-6">
                    <div className="">
                       <img className="w-full h-72 rounded-3xl" src={picture} alt="" />
                    </div>
                    <div className="">
                        <h3 className="text-2xl mt-2"><span className="text-red-700 font-semibold">College Name </span><span className="">{collegName}</span></h3>
                    </div>
                </div>
            </div>
    );
};

export default CollegeCart;