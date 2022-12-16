import Typed from "react-typed";
import React,{ Component } from 'react';

export default function Typing() {
	return(
		<div style={{fontSize : "16px"}}>
			<h1>
			<Typed
								strings={[
									"Full Stack Developer 💻",
									"Ping Pong Expert 🏓",
									"Frisbee lover 🥏",
									"Music Enthusiast 🎧"
								]}
								typeSpeed={90}
								backSpeed={20}
								loop
								/>
			</h1>
		</div>
		
		
	);
}