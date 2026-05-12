import { cn } from '@lib/utils'

export const Button = ({children, onClick, isDark}) => {
  const dark = 'bg-gray-800 text-white ring-white'
  const light = 'bg-amber-200 text-black ring-gray-500'

  return (
    <button className={cn('flex py-2 px-4 text-black rounded-xl ring-2 ', isDark ? dark : light)} onClick={onClick}>
      {children}
    </button>
  )
}