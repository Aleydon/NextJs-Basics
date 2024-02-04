export default function question(req, res) {
	if (req.method === 'GET') {
		getQuestionData(req, res);
	} else {
		res.status(405).send();
	}
}

function getQuestionData(req, res) {
	const { id } = req.query;

	res.status(200).json({
		id,
		question: 'what is your favorite color?',
		options: ['black', 'white', 'yellow', 'blue', 'green', 'red']
	});
}
