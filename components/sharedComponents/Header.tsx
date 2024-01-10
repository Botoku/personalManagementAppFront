'use client'
import React, {useContext} from 'react'
import Link from 'next/link'
import { ContentDisplayContext } from '../helpers/ContextProvider'
type Props = {}

const Header = (props: Props) => {
const {setSection, activeSection} = useContext(ContentDisplayContext)
  return (
    <div className=''>
        <ul className='px-2 flex lg:flex-col gap-1 sm:gap-2 border-lime-100 border-b-2 mb-2 lg:border-b-0 lg:border-r-2'>
            <li className={`cursor-pointer w-max rounded-xl px-2 py-1 hover:text-purple-400 ${activeSection === "todo" && "bg-purple-700"}`} onClick={() =>setSection && setSection('todo')}>To Do</li>
            <li className={`cursor-pointer w-max rounded-xl px-2 py-1 hover:text-purple-400 ${activeSection === "tobuy" && "bg-purple-700"}`} onClick={() => setSection && setSection('tobuy')}>To Buy</li>
            <li className={`cursor-pointer w-max rounded-xl px-2 py-1 hover:text-purple-400 ${activeSection === "expenses" && "bg-purple-700"}`} onClick={() => setSection && setSection('expenses')}>Expenses</li>
            <li className={`cursor-pointer w-max rounded-xl px-2 py-1 hover:text-purple-400 ${activeSection === "meals" && "bg-purple-700"}`} onClick={() => setSection && setSection('meals')}>Meals</li>
            <li className={`cursor-pointer w-max rounded-xl px-2 py-1 hover:text-purple-400 ${activeSection === "ideas" && "bg-purple-700"}`} onClick={() => setSection && setSection('ideas')}>Ideas</li>
        </ul>
    </div>
  )
}

export default Header