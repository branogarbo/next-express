import { useState } from 'react'

export default function Home() {
	let [color,setColor] = useState('black');

	let style = {
		color: color
	}

	let fetchServer = async () => {
		let res = await fetch('http://localhost:3001/boi');
		res = await res.json();

		setColor(res.color);
	}

   return <b className="text" style={style} onMouseDown={fetchServer}>bruh</b>
}