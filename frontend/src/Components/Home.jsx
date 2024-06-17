import React, { useState } from 'react'
import AddUserTask from './AddUserTask'
import ViewList from './viewList'

function Home() {
    const [add,setadd] =useState('')
  return (
    <div className='container w-100' style={{height:"90vh"}}>
      <AddUserTask setadd={setadd} />
      <div className='mt-5'>
        <ViewList add={add} />
      </div>
    </div>
  )
}

export default Home
