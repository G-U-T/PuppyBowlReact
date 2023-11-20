import {React, useState, useEffect} from "react";
import PuppyCard from "./PuppyCard";
import "../custom-style.css";

const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players`;
const DEFAULT_IMAGE_URL = `https://www.publicdomainpictures.net/pictures/240000/t2/dog-and-snow-1514563162Fsy.jpg`;

const PuppyList = ({setSelectedPuppy}) => {
	const [puppies, setPuppies] = useState(null);
	const [customName, setCustomName] = useState(`Default Dog`);
	const [customBreed, setCustomBreed] = useState(`Mutt`);
	const [customImage, setCustomImage] = useState(`${DEFAULT_IMAGE_URL}`);
	const [customStatus, setCustomStatus] = useState(`bench`);

	useEffect(() => {
		const fetchPuppy = async () => {
			const response = await fetch(API_URL);
			const result = await response.json();
			setPuppies(result.data.players);
		};

		fetchPuppy();
	}, []);

	return (<div className="column-flex">
		<form>
			<label>Name:</label>
			<input type="text" name="name" defaultValue="Default Dog" onChange={(event) => setCustomName(event.target.value)} />
			<br/>

			<label>Breed:</label>
			<input type="text" name="breed" defaultValue="Mutt" onChange={(event) => setCustomBreed(event.target.value)} />
			<br/>

			<label>Image URL:</label>
			<input type="text" name="image" defaultValue={DEFAULT_IMAGE_URL} onChange={(event) => setCustomImage(event.target.value)} />
			<br/>

			<label>Status:</label>
			<input name="status" type="radio" defaultChecked defaultValue="bench" onChange={(event) => setCustomStatus(event.target.value)} />
			<label>Bench</label>
			<input name="status" type="radio" defaultValue="field" onChange={(event) => setCustomStatus(event.target.value)} />
			<label>Field</label>
			<br/>

			<button onClick={(event) => {
				event.preventDefault();

				const postPuppy = async (puppy) => {
					await fetch(API_URL,
					{
						method: `POST`,
						body: JSON.stringify({
							name: puppy.name,
							imageUrl: puppy.imageUrl,
							status: puppy.status,
							breed: puppy.breed,
							teamId: puppy.teamId,
							cohortId: puppy.cohortId,
						}),
						headers: {
							"Content-Type": "application/json",
						},
					});
				};

				const customPuppy = {
					name: customName,
					// id: 999,
					breed: customBreed,
					imageUrl: customImage,
					status: customStatus,
					teamId: 99,
					cohortId: 99,
				};

				postPuppy(customPuppy);
				setPuppies([...puppies, customPuppy]);

			}}>Add puppy</button>

		</form><br/>

		{puppies !== null ? (<>
			{
				puppies.map((puppy) => {
					return (<PuppyCard puppy={puppy} key={puppy.id} setSelectedPuppy={setSelectedPuppy}></PuppyCard>);
				})
			}
		</>) : (
			<></>
		)}
	</div>);
};

export default PuppyList;