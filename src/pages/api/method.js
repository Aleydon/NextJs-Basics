export default function methodRequest(req, res) {
	if (req.method === 'GET') {
		res.status(200).json({
			Method: 'Get'
		});
	} else {
		res.status(200).json({
			Method: 'Another'
		});
	}
}
