import { useState } from 'react';

export default function Form() {
	const [name, setName] = useState('');
	const [age, setAge] = useState(0);
	const [user, setUser] = useState([]);

	async function saveUser() {
		await fetch('/api/form', {
			method: 'POST',
			body: JSON.stringify({ name, age })
		});

		setName('');
		setAge(0);

		const response = await fetch('/api/form');
		const users = await response.json();
		setUser(users);
	}

	function showUsers() {
		return user?.map((user, index) => (
			<li key={index}>
				{' '}
				Name: {user.name} - Age: {user.age}{' '}
			</li>
		));
	}

	return (
		<div
			style={{
				marginTop: 10,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				gap: 10
			}}
		>
			<input
				type="text"
				value={name}
				placeholder="Type your name"
				onChange={e => setName(e.target.value)}
				required
			/>
			<input
				type="number"
				value={age}
				onChange={e => setAge(+e.target.value)}
				required
			/>

			<button type="submit" onClick={saveUser}>
				Save User
			</button>
			<ul>{showUsers()}</ul>
		</div>
	);
}
