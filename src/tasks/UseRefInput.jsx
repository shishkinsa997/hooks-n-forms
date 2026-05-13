import { useState, useRef, useEffect } from 'react'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'

export const UseRefInput = () => {
  const inputRef = useRef(null)
  const timerRef = useRef(null)
  const counterRef = useRef(0)
  const prevInputRef = useRef('')
  const [input, setInput] = useState('')
  const [prev, setPrev] = useState('')

  useEffect(() => {
    counterRef.current++
    console.log('render count: ', counterRef.current);
  });
  
  const handleSubmit  = () => {
    setPrev(prevInputRef.current)
    prevInputRef.current = input
    inputRef.current?.focus()
  }

  const handleInput = (e) => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setInput(e.target.value)
    }, 200)
  }
  return (
  <>
    <Input className='mb-4'
      ref={inputRef}
      onInput={handleInput}
      value={input}
    />
    <span className='mb-4'>Предыдущее значение: {prev}</span>
    <Button onClick={handleSubmit}>Submit</Button>
  </>)
}