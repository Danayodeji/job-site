import React from 'react'

const Card = ({children, bg = "bg-grey-800"     }) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        {children}
    </div>  
  )
}

export default Card

// using PROPS to make className dynamic instead of hardcoding  