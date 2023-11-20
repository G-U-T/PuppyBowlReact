import {React, useState, useEffect} from "react";
import "../custom-style.css";

const PuppyCard = ({puppy}) => {
	return (
		puppy ? (
			<section className="column-flex">
				<h3>{puppy.name}</h3>
			</section>
		) : (
			<div>...</div>
		)
	);
};

export default PuppyCard;