import React from 'react'

const Button = ({title}) => {
  return (
    <button className='px-5 py-1 bg-zinc-200 text-black rounded-full'>
        {title}
    </button>
  )
}

export default Button