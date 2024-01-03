import React from 'react'
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className=''>
        <ul className=' flex lg:flex-col gap-1 sm:gap-2 border-lime-100 border-b-2 mb-2 lg:border-b-0 lg:border-r-2'>
            <li>To Do</li>
            <li>To Buy</li>
            <li>Expenses</li>
            <li>Meals</li>
            <li>ideas</li>
        </ul>
    </div>
  )
}

export default Header