import React from 'react'
import './Add.css'

const Add = () => {
  return (
    <div className='add'>
      <form className='flex-col'>
          <div className='add-img-upload flex-col'>
              <p>Upload Image</p>
              <label htmlFor='image'>
                <img src={assets.upload_area} alt="" />
              </label>
              <input type="file" id='image' hidden required />
          </div>
          <div className="add-product-name flex-col">
            <p>Product name</p>
            <input type="text" name='name' placeholder='Type here' />
          </div>
          <div className="add-product-description flex-col">
            <p></p>
          </div>

      </form>
      
    </div>
  )
}

export default Add
