import React from 'react'
import Sidebar from '../components/Sidebar'
import Addproduct from '../components/Addproduct'


const Admin = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <Addproduct/>
    </div>
  )
}

export default Admin