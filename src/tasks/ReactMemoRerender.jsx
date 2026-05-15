import { useState, memo, useCallback, useRef } from 'react'
import { Button } from '@ui/Button'

const ChildComponent = memo(({ title, count, boolean, onClick, color }) => {
  const [childCount, setChildCount] = useState(0)
  const renderCount = useRef(0)

  renderCount.current += 1

  return (
    <div className=' flex flex-col gap-2 py-2 px-4 w-full h-full bg-indigo-200 rounded-xl ring-2 ring-indigo-300'>
      <span className={color}><b>{title}</b></span>
      <span>Render counter: {renderCount.current}</span>
      {count ? <span>Parent counter: {count ?? 'null'}</span> : null}
      {boolean ? <span>Parent toggle: {boolean + ''}</span> : null}
      <Button onClick={onClick ?? (() => setChildCount(prev => prev + 1))}>{onClick ? 'toggle' : 'render'}</Button>
    </div>
  )
})

const ParentWithJSXNesting = ({ children, className }) => {
  const [count, setCount] = useState(0)

  const counter = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div className={'flex flex-col gap-2 py-2 px-4 w-full h-full rounded-xl ring-2 ' + className}>
      <span>Parent with JSX nesting counter: {count}</span>
      {children}
      <Button onClick={counter}>
        Render
      </Button>
    </div>
  );
}

const ChildWithJSXNesting = ({ children, title, color }) => {
  const [childCount, setChildCount] = useState(0)
  const renderCount = useRef(0)

  const counter = () => {
    setChildCount(prev => prev + 1)
  }


  renderCount.current += 1

  return (
    <div className=' flex flex-col gap-2 py-2 px-4 w-full h-full bg-indigo-200 rounded-xl ring-2 ring-indigo-300'>
      <span className={color}><b>{title}</b></span>
      <span>Render counter: {renderCount.current}</span>
      {children}
      <Button onClick={counter}>render</Button>
    </div>
  )
}


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
    <Button onClick={() => setCount(prev => prev + 1)}>
      Render
    </Button>
    <ChildComponent count={count} title='Child with changed parent state' color='text-red-600'/>
    <ChildComponent title='Child without changed parent state' color='text-green-600'/>
    <ChildComponent value={{}} title='Child with new object prop' color='text-red-600'/>
    <ChildComponent boolean={boolean} onClick={toggle} good title='Child with cached function' color='text-green-600'/>
    <ChildComponent boolean={boolean} onClick={toggle2} title='Child without cached function' color='text-red-600'/>
    <ParentWithJSXNesting className='mt-6'>
      <ChildWithJSXNesting title='Child with JSX nesting' color='text-green-600'/>
    </ParentWithJSXNesting>
  </div>
  )
}