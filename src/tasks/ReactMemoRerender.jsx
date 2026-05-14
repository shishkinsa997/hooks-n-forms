import { useState, memo, useCallback, useRef } from 'react'
import { Button } from '@ui/Button'

const ChildComponent = memo(({ children, count, boolean, onClick, good }) => {
  const [childCount, setChildCount] = useState(0)
  const renderCount = useRef(0)

  renderCount.current += 1

  return (
    <div className=' flex flex-col gap-2 py-2 px-4 w-full h-full bg-indigo-200 rounded-xl ring-2 ring-indigo-300'>
      <span className={good ? 'text-green-600' : 'text-red-600'}><b>{children}</b></span>
      <span>Render counter: {renderCount.current}</span>
      {count ? <span>Parent counter: {count ?? 'null'}</span> : null}
      {boolean ? <span>Parent toggle: {boolean + ''}</span> : null}
      <Button onClick={onClick ?? (() => setChildCount(prev => prev + 1))}>{onClick ? 'toggle' : 'render'}</Button>
    </div>
  )
})

export const ReactMemoRerender = () => {
  const [count, setCount] = useState(1)
  const [boolean, setBoolean] = useState('true')

  const toggle = useCallback(() => {
    setBoolean(prev => prev === 'true' ? 'false' : 'true')
  }, [])

  const toggle2 = () => {
    setBoolean(prev => prev === 'true' ? 'false' : 'true')
  }

  return (
  <div className='flex flex-col gap-4 w-full min-w-60 h-full bg-indigo-100 p-4 rounded-2xl'>
    <span>Parent counter: {count}</span>
    <ChildComponent count={count}>
      Child with changed parent state
    </ChildComponent>
    <ChildComponent good={true}>
      Child without changed parent state
    </ChildComponent>
    <ChildComponent value={{}}>
      Child with new object prop
    </ChildComponent>
    <ChildComponent boolean={boolean} onClick={toggle} good={true}>
      Child with cached function
    </ChildComponent>
    <ChildComponent boolean={boolean} onClick={toggle2}>
      Child without cached function
    </ChildComponent>
    <Button onClick={() => setCount(prev => prev + 1)}>
      Render
    </Button>
  </div>
  )
}