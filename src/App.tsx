import { useState } from 'react'

import './App.css'

function App() {
 
const[count, setCount] = useState(0)

return(

<div>

<h1>Hello Contador!</h1>

<p>você clicou {count} vezes ...</p>

<button onClick={()=> setCount(count + 1)}>Click aqui!</button>

<h6>by Kevin Tavares</h6>

</div>

)}

export default App
