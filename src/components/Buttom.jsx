import React from 'react'

const Buttom = ({handleSetEvento}) => {



  return (
    <div onClick={()=>handleSetEvento()} className='buttom_container'>
        <button className='btn btn-primary'>x</button>
    </div>
  )
}

export default Buttom