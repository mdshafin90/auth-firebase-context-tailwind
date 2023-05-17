import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <nav>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Slice Coders</a>
                <div className='mx-5'>
                    <div className='mx-2'>
                        <a className="btn btn-ghost normal-case text-xl"><Link to="/">Home</Link></a>
                    </div>
                    <div className='mx-2'>
                        <a className="btn btn-ghost normal-case text-xl"><Link to="/register">Register</Link></a>
                    </div>
                    <div className='mx-2'>
                        <a className="btn btn-ghost normal-case text-xl"><Link to="/login">Login</Link></a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;