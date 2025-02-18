import React, { useEffect, useState } from 'react'

const Rating = ({intialRating,onRate}) => {
  const [rating,setRating]=useState(intialRating ||0)
  const handleRating=(value)=>{
    setRating(value);
    if(onRate) onRate(value)
  }
useEffect(()=>{
  if( intialRating){
    setRating(intialRating)
  }
},[intialRating])
  return (
    <div>
      {Array.from({length:5 },(_,index)=>{
        const Starvalue=index+1
        return(
          <span key={index} className={`text-xl sm:text-2xl cursor-pointer transition-colors
          ${Starvalue<=rating?'text-yellow-500':'text-gray-400'}`} onClick={()=>handleRating(Starvalue)}>
            &#9733
          </span>

        )
      })}
    </div>
  )
}

export default Rating
