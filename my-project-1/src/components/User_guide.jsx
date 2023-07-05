import React from 'react'
import PropTypes from 'prop-types'


export default function User_guide(props) {
  return (
   <>
   <h3 className={`text-center text-3xl font-bold myStyle underline ${props.mode==='black'? 'text-white':'text-black'}`}>User guide</h3>
   <p className={`text-lg myStyle font-bold p-5 ${props.mode==='black'? 'text-white':'text-black'}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos commodi quod quaerat, dolore autem ratione natus tempora consequatur, architecto omnis eveniet dolorem nihil iste. Laboriosam aliquam odio ex debitis repellat omnis facilis, possimus officiis quia quo maiores provident ut quidem, magni veritatis explicabo quisquam ipsam impedit perspiciatis corporis maxime accusantium deleniti illum! Esse aliquid eligendi, blanditiis ipsam numquam magnam cum ducimus fugit, iure, et iusto beatae incidunt optio excepturi id est voluptatem? Id ex ducimus expedita saepe ipsum itaque debitis eligendi sapiente harum ut excepturi, repudiandae corrupti ad dolorum est consequatur ullam commodi maiores laboriosam suscipit voluptate, ab autem iste.</p>
   </>
  )
}
