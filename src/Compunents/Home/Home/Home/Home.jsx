import ApplyAdmisson from "../ApplyAdmisson/ApplyAdmisson";
import Banner from "../Banner/Banner";
import CollegeAdmissionNews from "../College-Admission-News/CollegeAdmissionNews";
import Collegeevent from "../Collegeevent/Collegeevent";
import Motivation from "../Motivation/Motivation";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Motivation/>
            <CollegeAdmissionNews/>
            <ApplyAdmisson/>
            <Collegeevent/>
        </div>
    );
};

export default Home;