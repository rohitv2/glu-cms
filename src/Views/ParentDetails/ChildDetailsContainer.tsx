import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ChildDetails from './ChildDetails';

const ChildDetailsContainer = () => {
    const data = [
        { name: 'Rohit', phone: 'xxxxxxxxx', email: 'xyz@gmail.com', year: 'year 1', form: 'form A' },
        { name: 'Mohit', phone: 'xxxxxxxxx', email: 'xyz@gmail.com', year: 'year 1', form: 'form A' },
        { name: 'Rahul', phone: 'xxxxxxxxx', email: 'xyz@gmail.com', year: 'year 1', form: 'form A' },
    ];
    return (
        <div className="row">
            {data.map((item) => (
                <div key={uuidv4()} className="col-md-4">
                    <ChildDetails
                        name={item.name}
                        phone={item.phone}
                        email={item.email}
                        year={item.year}
                        form={item.form}
                    />
                </div>
            ))}
        </div>
    );
};

export default ChildDetailsContainer;
