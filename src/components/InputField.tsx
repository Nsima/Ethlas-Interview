import React from 'react'
import Container from './Container'

type Props = {}

export default function InputField({ }: Props) {
    return (
        <Container>
            <input type="text" placeholder="Enter Amount here" className="border text-gray-900 w-full rounded-md p-2 focus:outline-none focus:border-blue-500 bg-slate-50" />
            <div className='text-red-500'> error </div>
        </Container>
    )
}
