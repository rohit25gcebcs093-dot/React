import { createRoot } from 'react-dom/client'
import List from './List.jsx'
import Food from './Food.jsx'
import App from './App.jsx'
import Counting from './Counting.jsx'
import Clock from './Clock.jsx'
import Sum from './Sum.jsx'
import Stopwatch from './App.jsx'
import Form from './Form.jsx'
import Zodform from './Zodform.jsx'

createRoot(document.getElementById('root')).render(
    <>
      <Zodform></Zodform>
      <Form></Form>
      <Stopwatch></Stopwatch>
      <Sum></Sum>
      <Clock />
      <Counting />
      <Food />
      <List />
      <App />
    </>
)
