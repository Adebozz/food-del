import React, { useContext } from 'react'
import './Fooddisplay.css'
import { StoreContext } from '../../context/StoreContext'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes for you</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
            return
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
