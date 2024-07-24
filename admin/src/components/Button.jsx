import React from 'react'

const Button = ({name = "button",color = "white"}) => {
  return (
    <div className= {`bg-${color} inline-block font-semibold capitalize py-2 px-6 rounded-md`}>
        {name}
    </div>
  )
}

export default Button