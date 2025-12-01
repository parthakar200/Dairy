import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputForm } from './components/inputForm/inputForm'

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Card } from './components/noteCard/noteCard'

function App() {
  

  return (
    <div className='px-4'>
      <InputForm/>
      
    </div>
  )
}

export default App
