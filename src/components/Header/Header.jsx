import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex h-12 bg-slate-200 justify-between px-10 items-center'>
                <h1 className='text-4xl text-gray-600'>React-Vite</h1>
                <div>
                    <ul className='text-xl italic text-gray-700 flex gap-4'>
                        <NavLink to='/' style={({ isActive }) => ({ 
                            color: isActive ? '#831843' : '#334155' })}>
                            Home
                        </NavLink>
                        <NavLink to='/friends' style={({ isActive }) => ({ 
                            color: isActive ? '#831843' : '#334155' })}>
                            Friends
                        </NavLink>
                        <NavLink to= '/meals' style={({isActive}) => ({
                            color: isActive? '#831843': '#334155'})}>
                            Meals
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;