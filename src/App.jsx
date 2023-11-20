import { useState } from 'react'
import PuppyList from './components/PuppyList'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
	<>
		<PuppyList></PuppyList>
	</>
	)
}

export default App
