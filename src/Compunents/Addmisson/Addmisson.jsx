import { useEffect, useState } from "react";
import AddmissonCart from "./AddmissonCart";




const Addmisson = () => {
    const [colleges, setColleges] = useState([])
   
    useEffect(() => {
        fetch('college.json')
        .then(res => res.json())
        .then(data => setColleges(data))
    } , [])


   
    return (
        <div className="grid md:grid-cols-2 gap-2 shadow-lg rounded-lg">     
            {
                colleges.map(college => <AddmissonCart
                key={college.id}
                college={college}
                ></AddmissonCart>)
            }
        </div>
    );
};

export default Addmisson;