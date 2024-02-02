import { useRouter } from 'next/router';

function Params() {
	// URL: http://localhost:3000/routes/params?id=123&name=Aleydon

	const router = useRouter();
	const id = router.query.id;
	const name = router.query.name;

	return (
		<div>
			<h2>
				Id: {id} - Name: {name}
			</h2>
		</div>
	);
}
export default Params;
