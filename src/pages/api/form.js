const users = [];

export default function form(req, res) {
	if (req.method === 'POST') {
		post(req, res);
	} else if (req.method === 'GET') {
		get(req, res);
	} else {
		res.status(405).send();
	}
}

function post(req, res) {
	const data = JSON.parse(req.body);
	users.push(data);
	res.status(200).send();
}

function get(req, res) {
	res.status(200).json(users);
}
