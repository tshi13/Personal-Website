import Typed from "react-typed";
import React,{ Component } from 'react';

export default function Typing() {
	return(
		<div>
			<h1>
			<Typed
								strings={[
									"Full Stack Developer",
									"Meet New Friends 😎",
									"Create Groups 🤩",
									"Bet on Your Success 🥂",
									"Win Money 💵"
								]}
								typeSpeed={70}
								backSpeed={20}
								loop
								/>
			</h1>
		</div>
		
		
	);
}