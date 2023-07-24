

const Motivation = () => {
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-5 ">
                <div className="card rounded-lg pb-4  shadow-lg mb-5">
                    <div className="h-16 text-white bg-red-600 flex items-center justify-center text-3xl font-semibold">
                        Collge Life
                    </div>
                    <div className="">
                        <img className="w-full rounded-lg h-72" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2khHb1SV3iOTi9GvE7OFPT2b-DBUOD9W8hg&usqp=CAU" alt="" />
                    </div>
                    <div className="">
                        <p className="mt-3">
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.
                        </p>
                    </div>
                </div>
                <div className="card rounded-lg pb-4  shadow-lg mb-5">
                    <div className="h-16 text-white bg-red-700 flex items-center justify-center text-3xl font-semibold">
                    Academics
                    </div>
                    <div className="">
                        <img className="w-full rounded-lg h-72" src="https://college.jobs.ac.uk/getasset/04844d58-93e2-4761-b32b-7afd59d4b9bc/" alt="" />
                    </div>
                    <div className="">
                        <p className="mt-3">
                            cademics encompass vast knowledge,
                            Exploring subjects with depth and courage,
                            Learning, growing, expanding the mind,
                            A journey of discovery, endlessly kind.
                        </p>
                    </div>
                </div>
                <div className="card rounded-lg pb-4  shadow-lg mb-5">
                    <div className="h-16 text-white bg-red-800 flex items-center justify-center text-3xl font-semibold">
                    Athletics
                    </div>
                    <div className="">
                        <img className="w-full rounded-lg h-72" src="https://img.freepik.com/premium-photo/education-school-learning-teaching-people-concept-group-students-teacher-talking-classroom_380164-137724.jpg?w=360" alt="" />
                    </div>
                    <div className="">
                        <p className="mt-3">

                            Athletics ignite the spirits flame,
                            In the pursuit of excellence and acclaim,
                            Pushing limits, breaking free,
                            A dance of strength and agility.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Motivation;