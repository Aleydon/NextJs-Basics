export default function multipleParams(req, res) {
	return res.status(200).json({
		params: req.query
	});
}
