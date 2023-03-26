import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [searchText,setSearchText] = useState('')
    const [meals, setMeals] = useState([])
    useEffect( ()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[searchText])
    const searchData = (e) =>{
        setSearchText(e.target.value)
    }
    return (
        <div className='w-4/5 mx-auto'>
            <h1 className='text-2xl text-gray-600 mt-5 italic text-center'>Search Your meals</h1>
            <div className='flex mt-4'>
                <input onChange={searchData} className='mx-auto border-2 rounded-lg px-12 py-2 border-gray-500' type="text" />
            </div>
            <br />
            <h1 className='text-xl text-gray-600 mt-5 italic text-center'>Total Meals: {meals?.length}</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                {
                    meals.map(meal => <Meal 
                        key={meal.idMeal} 
                        meal ={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;