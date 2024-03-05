import React from 'react'
import check from '../assets/images/icon-check.svg'

export default function Checkbox(props) {
  const { completed, handleChangeCompleted } = props

  return (
    <div className={`w-[30px] h-[30px] relative ${!completed? 'border-dark-grayish-blue hover:border-check-violet border-[1px]':''} rounded-[50%] select-none`}>
      <label className={`w-[30px] h-[30px] rounded-[50%] block z-10 ${completed ? 'bg-gradient-to-r from-check-cyan to-check-violet' : ''}`}>
        <input type="checkbox" onChange={handleChangeCompleted} checked={completed} className='invisible' />
        {
          completed && <img src={check} alt="check-img" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
        }
      </label>


    </div>
  )
}
