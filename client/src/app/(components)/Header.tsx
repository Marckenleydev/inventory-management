import React from 'react'

type HeaderPropds ={
    name: string
}
function Header({name}: HeaderPropds) {
  return (
    <h1 className='text-2xl  text-gray-700 font-semibold'>{name}</h1>
  )
}

export default Header