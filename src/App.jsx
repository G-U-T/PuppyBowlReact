import { useState } from 'react'
import PuppyList from './components/PuppyList'
import PuppyCard from './components/PuppyCard';
import './App.css'

function App() {
	const [selectedPuppy, setSelectedPuppy] = useState(null);

	return (
	<>
		{
			selectedPuppy ? (
				<PuppyCard puppy={selectedPuppy} setSelectedPuppy={setSelectedPuppy} isSelected={true}></PuppyCard>
			) : (
				<PuppyList setSelectedPuppy={setSelectedPuppy}></PuppyList>
			)
		}
	</>
	)
}

export default App
