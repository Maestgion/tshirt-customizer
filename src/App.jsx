import React from 'react'
import {Home, Customizer} from "./pages"
import { CanvasModel } from './components'

const App = () => {
  return (
    <>
      <main className='app transition-all ease-in'>
        <Home/>
        <CanvasModel/>
        <Customizer/>
      </main>
    </>
  )
}

export default App