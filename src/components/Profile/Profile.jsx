import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Profile = () => {

    const { user } = useContext(AuthContext)

    return (
        <div>
            <h1 className='text-3xl'>This is Profile Page</h1>
            <div className='text-center mt-16'>
                <h2 className='text-4xl'>Name: {user.displayName}</h2>
                <h3 className='text-2xl'>Email: {user.email}</h3>
                <img src={user.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Profile;