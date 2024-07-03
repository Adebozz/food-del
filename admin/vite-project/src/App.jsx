import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Order from './pages/Order/order'
import List from './pages/List/List'
import Add from './pages/Add/Add'

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className='app-content'>
        <Sidebar />
        <Routes >
          <Route path='/add' element={<Add />}/>
          <Route path='/add' element={<List />}/>
          <Route path='/add' element={<Order />}/> 
        </Routes>
      </div>
    </div>
  )
}

export default App
