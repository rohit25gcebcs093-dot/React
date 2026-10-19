import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import List from './List.jsx'
import Food from './Food.jsx'
import App from './App.jsx'
import Counting from './Counting.jsx'
import Clock from './Clock.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Clock />
      <Counting />
      <Food />
      <List />
      <App />
    </>
  </StrictMode>,
)
