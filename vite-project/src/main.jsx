import { createRoot } from 'react-dom/client'
import List from './List.jsx'
import Food from './Food.jsx'
import App from './App.jsx'
import Counting from './Counting.jsx'
import Clock from './Clock.jsx'
import Sum from './Sum.jsx'
import Stopwatch from './App.jsx'

createRoot(document.getElementById('root')).render(
    <>
      <Stopwatch></Stopwatch>
      <Sum></Sum>
      <Clock />
      <Counting />
      <Food />
      <List />
      <App />
    </>
)
