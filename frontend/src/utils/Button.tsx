import React from 'react'

interface buttonProps {
    children: React.ReactNode;
}

const Button = (props: buttonProps) => {
  return <button className='btn btn-primary'>{props.children}</button>
}

export default Button