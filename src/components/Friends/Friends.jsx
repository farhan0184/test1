import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))

    },[])
    return (
        <div>
            <h1 className='text-2xl text-gray-600 mt-5 italic text-center'>this is friends section</h1>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}/>)
            }
        </div>
    );
};

export default Friends;