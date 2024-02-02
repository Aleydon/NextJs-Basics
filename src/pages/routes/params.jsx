import Link from 'next/link';
import { useRouter } from 'next/router';

function Params() {
	// URL: http://localhost:3000/routes/params?id=123&name=Aleydon

	const router = useRouter();
	const id = router.query.id;
	const name = router.query.name;

	return (
		<div>
			<h2>
				Id: {id}
				<br />
				Name: {name}
			</h2>
			<Link href="/routes">
				<button type="button">Go to Default Route</button>
			</Link>
		</div>
	);
}
export default Params;
