import React from 'react'
import PropTypes from 'prop-types'


export default function Error(props) {
  return (
    <>
    <h1 className={` myStyle text-3xl text-center ${props.mode===`black`? `text-white`: 'text-black'}`}>404 Page not found</h1>
    <p className={` myStyle text-lg text-center ${props.mode===`black`? `text-white`: 'text-black'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi excepturi sit voluptatum dicta iure? Numquam sunt repellendus nobis reprehenderit sint perspiciatis magnam tempora? Porro nihil, aliquam totam aperiam quas quia!</p>

    </>
  )
}
