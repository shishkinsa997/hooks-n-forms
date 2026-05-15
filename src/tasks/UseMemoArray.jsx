import { useState, useMemo } from 'react'
import { Button } from '@ui/Button'

const generateArray = (num) => Array.from({ length: num}, (() => Math.floor(Math.random() * 10) + 1))
let cachedArray = generateArray(10000000)

const FieldComponent = ({children, className}) => {
  return (
    <span className={className}>{children}</span>
  )
}

export const UseMemoArray = () => {
  const [array, setArray] = useState(cachedArray)
  const [count, setCount] = useState(0)
  const sum = useMemo(() => {
    console.log('calculate');

    let sum = 0
    for (let num of array) {
      sum += num
    }
    return sum
  }, [array])


  return (
  <div className='flex flex-col gap-2 py-2 px-4 w-full h-full min-w-60 bg-indigo-200 rounded-xl ring-2 ring-indigo-300'>
    <FieldComponent className='mb-4'>Sum: {sum}</FieldComponent>
    <Button onClick={() => setArray(generateArray(10000000))}>generate</Button>
    <Button onClick={() => setCount(prev => prev + 1)}>render</Button>
  </div>)
}