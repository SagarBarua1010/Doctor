import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    })
    return (
        <div className='mt-4'>
            <div className='text-center'>
            <h3 className="text-5xl font-bold text-emerald-800 mt-5">Best Doctors</h3>
            <p className='font-bold'>Our providers develop strong ongoing relationships with our patients,<br /> 
            tending to health issues as they arise, conducting yearly exams educating about prevention and <br />
            making referrals to other specialists when necessary.</p>
            
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
           
            {
                services.map(service =><ServicesCard
                key={service._id}
                service={service}
                ></ServicesCard>)
            }
        </div>
        </div>
    );
};

export default Services;