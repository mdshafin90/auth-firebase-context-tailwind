import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Home = () => {

    const { user } = useContext(AuthContext)
    console.log(user)

    return (
        <div>
            <h1 className='text-5xl'>This is Home Page</h1>
        </div>
    );
};

export default Home;