import React from 'react';
import { useNavigate } from 'react-router-dom';

const Meal = (props) => {
    const {idMeal,strMeal,strMealThumb,strInstructions} = props.meal
    const shorten = strInstructions.slice(0,100) + '...'
    const navigate = useNavigate()
    const nextRoute = () =>{
        const url = `/meal/${idMeal}`
        navigate(url)
    }
    return (
        <div className='p-5'>
            <img className='w-full' src={strMealThumb} alt="" srcset="" />
            <h1 className='text-2xl text-gray-600 mt-3 italic'>{strMeal}</h1>
            <p className=' text-gray-600 mt-3 italic'>{shorten}</p>
            <button onClick={nextRoute} className='py-2 px-3 bg-green-500 rounded-lg mt-4 text-teal-100 hover:text-black'>Details ID:{idMeal}</button>
        </div>
    );
};

export default Meal;