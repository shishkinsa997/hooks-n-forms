import { cn } from '@lib/utils'

export const Input = ({onInput, className, ref}) => {

  return (
    <input className={cn('flex py-2 px-4 text-black rounded-xl ring-2 bg-amber-200 ring-gray-500 focus:ring-4', className)} ref={ref} onInput={onInput}/>
  )
}