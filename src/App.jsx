import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import FriendDetails from './components/FriendDetails/FriendDetails'
import Friends from './components/Friends/Friends'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MealDetails from './components/MealDetails/MealDetails'
import Meals from './components/Meals/Meals'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/friends' element={<Friends/>}/>
        <Route path='/friend/:friendId' element={<FriendDetails />}/>
        <Route path='/meals' element={<Meals/>}></Route>
        <Route path='/meal/:MealId' element={<MealDetails/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default App
