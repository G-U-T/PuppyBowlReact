import {React, useState, useEffect} from "react";
import PuppyCard from "./PuppyCard";

const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players`;

const PuppyList = () => {
	const [puppies, setPuppies] = useState(null);

	useEffect(() => {
		const fetchPuppy = async () => {
			const response = await fetch(API_URL);
			const result = await response.json();
			setPuppies(result.data.players);
		};

		fetchPuppy();
	}, []);

	return (
		puppies !== null ? (<div className="column-flex">
			{
				puppies.map((puppy) => {
					return (<PuppyCard puppy={puppy}></PuppyCard>);
				})
			}
		</div>) : (
			<></>
		)
	);
};

export default PuppyList;