import { useState, useMemo } from 'react'
import { Button } from '@ui/Button'

const generateArray = (array) => array.map(() => Math.floor(Math.random() * 10))

export const UseMemoArray = () => {
  const [array, setArray] = useState(generateArray([...Array(10)]))
  const sum = useMemo(() => {
    return array.reduce((acc, x) => acc + x, 0)
  }, [array])


  return (
  <>
    <span className='mb-4'>Array: {array.join(' ')}</span>
    <span className='mb-4'>Sum: {sum}</span>
    <Button onClick={() => setArray(generateArray(array))}>Generate</Button>
  </>)
}