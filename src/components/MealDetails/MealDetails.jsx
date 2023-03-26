import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'

const MealDetails = () => {
    const {MealId} = useParams() 
    const [detail,setDetail] = useState([])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(res => res.json())
        .then(data => setDetail(data.meals[0]))
    },[])
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-2xl text-gray-600 mt-5 italic'>This is {detail?.strMeal} Details</h1>
            <ReactPlayer url={detail?.strYoutube} controls={true}/>
            <br />
            <h1 className='text-gray-600 mt-5 italic'>{detail?.strInstructions}</h1>
        </div>
    );
};

export default MealDetails;