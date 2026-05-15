import { useState, useCallback, memo } from 'react'
import { Button } from '@ui/Button'

const ChildComponent = ({onAction, title, color}) => {
  console.log(title);

  return (
    <div className='flex flex-col gap-2 py-2 px-4 w-full h-full bg-indigo-200 rounded-xl ring-2 ring-indigo-300'>
      <span className={color}>{title}</span>
      <Button onClick={onAction}>count</Button>
    </div>
  )
}

const ChildComponentMemo = memo(ChildComponent)

export const UseCallbackCounter = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const counter = () => setCount(prev => prev + 1)

  const counterCallback = useCallback(() => {

    setCount(prev => prev + 1)
  }, [])

  return (
  <div className='flex flex-col gap-4 w-full min-w-60 h-full bg-indigo-100 p-4 rounded-2xl'>
    <span>setter in child counter: {count}</span>
    <span>only parent counter: {count2}</span>
    <ChildComponent title='Child without memo' color='text-red-600' onAction={counter}/>
    <ChildComponentMemo title='Child with memo and without useCallback' color='text-yellow-600' onAction={counter}/>
    <ChildComponentMemo title='Child with memo and useCallback' color='text-green-600' onAction={counterCallback}/>
    <Button onClick={() => setCount2(prev => prev + 1)}>count</Button>
  </div>)
}