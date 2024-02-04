import { useEffect, useState } from 'react';

export default function Question() {
	const [question, setQuestion] = useState('');

	useEffect(() => {
		fetch('http://localhost:3000/api/question/1').then(response =>
			response.json().then(setQuestion)
		);
	}, []);

	function showOptions() {
		if (question) {
			return question.options.map((res, index) => <li key={index}>{res}</li>);
		}
		return false;
	}

	return (
		<div>
			<h2>Questions</h2>
			<h5>
				{question.id} - {question.question}
			</h5>
			<ul>{showOptions()}</ul>
		</div>
	);
}
