import { useEffect, useState } from "react";

import CollegeCart from "./CollegeCart";


const College = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('collegeCart.json')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])
    console.log(cart)

    return (
        <div>
            <div className="">
                <div className="">
                    <div className="college-banner flex items-center ">
                        <div className="bg-black h-72  max-w-screen-lg mx-auto px-5 py-7 bg-opacity-60 flex items-center">
                            <div className="">
                                <h1 className="text-7xl font-medium text-white">Kingster College</h1>
                                <h1 className="text-2xl mt-4  font-medium text-white">I apologize for the confusion. As of my last update in September 2021, Kingster College was not a known or recognized institution. If it exists now or has been established after my knowledge cutoff date, I dont have any information about it. To learn more about Kingster College, please consult current sources or official websites for accurate and up-to-date details.</h1>
                               
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="grid md:grid-cols-3 gap-4 rounded-xl">
                {
                    cart.map(cart => <CollegeCart
                        key={cart.id}
                        cart={cart}
                    ></CollegeCart>)
                }
            </div>




        </div>
    );
};

export default College;