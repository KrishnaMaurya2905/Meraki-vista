import React from 'react'
import StaggerText from './StaggerText'

const Button = () => {
  return (
    <div className='px-5 h-[5rem] flex justify-center overflow-hidden w-inherit rounded-full py-5 text-[2rem] font-Decorative bg-Buttoncolor'>
    <StaggerText text={"Start a project"} customclassName={"startproject"}/>
    </div>
  )
}

export default Button