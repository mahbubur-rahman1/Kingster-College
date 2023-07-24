import { useTypewriter } from 'react-simple-typewriter';
import './ApplyAdmisson.css'

const ApplyAdmisson = () => {
    const [text] = useTypewriter({
        words: ['Apply for Admission'],
        loop: 0
    })
    return (
        <div>
            <div className="apply-bachgroun-image mt-8 flex items-center">
                <div className="bg-blue-800 max-w-screen-sm p-4 opacity-70  ">
                    <div className="mx-auto">
                        <h1 className='text-5xl -text-opacity-90 text-white font-bold'>{text}</h1>
                        <h3 className="text-3xl text-white font-semibold mt-3">Fall 2019 applications are now open</h3>
                        <h4 className="text-2xl mt-8 text-white font-semibold">We don’t just give students an education and experiences that set them up for success in a career. We help them succeed in their career—to discover a field they’re passionate about and dare to lead it.</h4>

                        <button className='mt- px-5 py-2 rounded-lg bg-amber-600 mt-6  text-white font-semibold text-2xl'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyAdmisson;