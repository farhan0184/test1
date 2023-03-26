import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendId} = useParams()
    const [detail, setDetail] =useState([])
    useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
       .then(res => res.json())
       .then(data => setDetail(data))   
        
    },[])
    return (
        <div className='ml-5'>
            <h1 className='text-2xl text-gray-600 mt-5 italic'>{detail?.username} Details section</h1>
            <div className='text-xl text-gray-600 mt-3 italic'>
                <h1>Name: {detail?.name}</h1>
                <h1>Email: {detail?.email}</h1>
                <h1>Phone: {detail?.phone}</h1>
                <h1>City: {detail?.address?.city}</h1>
                <h1>Company: {detail?.company?.name}</h1>
                <h1>WebSite: {detail?.website}</h1>
            </div>
        </div>
    );
};

export default FriendDetails;