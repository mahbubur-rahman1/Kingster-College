import { FaLocationArrow, FaStopwatch,  } from 'react-icons/fa';

const Collegeevent = () => {
    return (
        <div className="mt-7">
            <div className="mb-5">
                <h2 className="text-2xl mb-2 font-bold">
                    College Toure
                </h2>
                <div className="h-1 bg-red-700"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-5">

                <div className="">
                    <div className="">
                        <img className="rounded-lg h-80 w-full" src="https://a6e8z9v6.stackpathcdn.com/kingster/highschool/wp-content/uploads/2018/08/fancycrave-270977-unsplash-900x500.jpg" alt="" />
                    </div>
                    <div className="grid grid-cols-4 mt-4 gap-5">
                        <div className="flex items-center">
                        <div className="">
                            <h2 className="text-4xl text-center font-bold text-red-700">27</h2>
                            <h2 className="text-3xl text-center font-semibold text-red-800">Julay</h2>
                            <div className="h-1 mt-3 w-14 mx-auto bg-red-700"></div>
                        </div>

                        </div>
                        
                        <div className="col-span-3">
                            <h2 className="text-2xl font-semibold">Reunion Event : Kingster’s Alumni Golf Tour</h2>
                            <div className="mt-2">
                                <div className="flex gap-3 text-red-600 items-center"><FaStopwatch></FaStopwatch>7:00 am - 7:00 am</div>
                            </div>
                            <div className="mt-2">
                                <div className="flex gap-3 text-red-600 items-center"><FaLocationArrow></FaLocationArrow> Kingster Grand Hall</div>
                            </div>
                        </div>



                    </div>
                </div>
                <div className="">
                    <div className="">
                        <img className="rounded-lg h-80 w-full" src="https://a6e8z9v6.stackpathcdn.com/kingster/highschool/wp-content/uploads/2018/08/ellehem-693-unsplash-900x500.jpg" alt="" />
                    </div>
                    <div className="grid grid-cols-4 mt-4 gap-5">
                        <div className="flex items-center">
                        <div className="">
                            <h2 className="text-4xl text-center font-bold text-red-700">03</h2>
                            <h2 className="text-3xl text-center font-semibold text-red-800">Aguast</h2>
                            <div className="h-1 mt-3 w-18 mx-auto bg-red-700"></div>
                        </div>

                        </div>
                        
                        <div className="col-span-3">
                            <h2 className="text-2xl font-semibold">Kingster’s Alumni Hot Air Ballon Trip in Turkey</h2>
                            <div className="mt-2">
                                <div className="flex gap-3 text-red-600 items-center"><FaStopwatch></FaStopwatch>10:00 am - 10:00 pm</div>
                            </div>
                            <div className="mt-2">
                                <div className="flex gap-3 text-red-600 items-center"><FaLocationArrow></FaLocationArrow> Kingster Grand Hall Turky</div>
                            </div>
                        </div>



                    </div>
                </div>
                <div className="">
                    <div className="">
                        <img className="rounded-lg h-80 w-full" src="https://a6e8z9v6.stackpathcdn.com/kingster/highschool/wp-content/uploads/2018/08/tyler-callahan-662157-unsplash-900x500.jpg" alt="" />
                    </div>
                    <div className="grid grid-cols-4 mt-4 gap-5">
                        <div className="flex items-center">
                        <div className="">
                            <h2 className="text-4xl text-center font-bold text-red-700">20</h2>
                            <h2 className="text-3xl text-center font-semibold text-red-800">Aguast</h2>
                            <div className="h-1 mt-3 w-18 mx-auto bg-red-700"></div>
                        </div>

                        </div>
                        
                        <div className="col-span-3">
                            <h2 className="text-2xl font-semibold">Fintech & Key Investment Conference</h2>
                            <div className="mt-2">
                                <div className="flex gap-3 text-red-600 items-center"><FaStopwatch></FaStopwatch>7:00 am - 7:00 am</div>
                            </div>
                            <div className="mt-2">
                                <div className="flex gap-3 text-red-600 items-center"><FaLocationArrow></FaLocationArrow> Kingster Grand Hall London</div>
                            </div>
                        </div>



                    </div>
                </div>
               

            </div>

        </div>
    );
};

export default Collegeevent;