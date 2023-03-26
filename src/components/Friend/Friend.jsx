import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
   const {name,username,id} = props.friend
   const navigate = useNavigate()
   const showPath = () =>{
       const url = `/friend/${id}`
       navigate(url);
   }
    return (
        <div className='text-center mt-5 text-gray-600 italic '>
            <h1 className='text-2xl'>{name}</h1>
            <div className='mt-4'>
            
                <Link className='px-3 py-2 rounded-lg bg-green-300' to={'/friend/'+ id}>Show Details Id:{id}</Link>
            
                <button onClick={showPath} className='ml-4 px-3 py-2 rounded-lg bg-green-300'>{username} Id:{id}</button>
            </div>
        </div>
    );
};

export default Friend;