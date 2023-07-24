import { useEffect, useState } from "react";
import CollegeCart from "./CollegeCart";


const College = () => {
    const [college, setCollege] = useState([])

    useEffect(() => {
        fetch('college.json')
        .then(res => res.json())
        .then(data => setCollege(data))
    })

    console.log(college)

   
    return (
        <div className="grid md:grid-cols-2 gap-5 shadow-lg rounded-lg">     
            {
                college.map(college => <CollegeCart
                key={college.id}
                college={college}
                ></CollegeCart>)
            }
        </div>
    );
};

export default College;