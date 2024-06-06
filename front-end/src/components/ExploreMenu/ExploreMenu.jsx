import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'> 
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest with ingredients and culinary expertise. Our mission is to satify your cravings and elevate your dining experience, pone delicious meal at a time. </p>
      <di className="menu-list">
        {menu_list.map(()=>{
            return (
                <div className="explore-menu-list-item"></div>
        )

        }
        
        )}
      </di>
    </div>
  )
}

export default ExploreMenu
