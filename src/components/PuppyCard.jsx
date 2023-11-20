import {React, useState, useEffect} from "react";
import "../custom-style.css";

const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players`;

const removePuppy = async (puppy) => {
	try {
		await fetch(
			`${API_URL}/${puppy.id}`,
			{method: `DELETE`},
		);
	}
	catch (error) {
		console.log(`ERROR: ${error}`);
	};
};

const PuppyCard = ({puppy, setSelectedPuppy, isSelected}) => {
	return (
		puppy ? (
			<section className="column-flex">
				<button onClick={() => {
					if (isSelected) {
						setSelectedPuppy(null);
					}
					else {
						setSelectedPuppy(puppy);
					}
				}}>
					<h3>{puppy.name}</h3>
				</button>

				<img src={puppy.imageUrl}/>

				{
					isSelected ? (<>
						<p>Breed: {puppy.breed}</p>
						<p>Status: {puppy.status}</p>
						<button onClick={() => {
							removePuppy(puppy);
							setSelectedPuppy(null);
						}}>REMOVE</button>
					</>) : (
						<></>
					)
				}
			</section>
		) : (
			<div>...</div>
		)
	);
};

export default PuppyCard;