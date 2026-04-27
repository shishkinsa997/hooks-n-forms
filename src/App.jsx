import { useState } from 'react'
import Header from '@components/Header.jsx'
import Content from '@components/Content.jsx'
const App = () => {
  const [task, setTask] = useState(null)

  return (
    <>
      <Header setTask={setTask}/>
      <Content task={task}/>
    </>
  )
}

export default App
