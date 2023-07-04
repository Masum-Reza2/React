import React from 'react'

export default function Alert(props) {

  return (
    props.alert &&
   <>
   <div className='flex items-center justify-center'>
    <div className={`text-xl rounded-md myStyle h-10 w-72 flex items-center justify-center ${props.alert.type==='success'? 'bg-blue-400': 'bg-red-400'} container mt-3 text-center   shadow-md shadow-black font-bold absolute top-0 -translate-y-3`}>
      <strong>{props.alert.message}</strong>
    </div>
    </div>
   </>
  )
}
