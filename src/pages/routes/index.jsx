import Link from 'next/link';

function DefaultRoute() {
	return (
		<>
			<h2>Default Route</h2>
			<Link href="/routes/1234/search">
				<button type="button">Go to Search</button>
			</Link>
			<ul>
				<Link href="/routes/params?id=8866&name=Felipe">
					<li>Navigate to Params Route as Felipe</li>
				</Link>
				<Link href="/routes/params?id=17346&name=Aleydon">
					<li>Navigate to Params Route as Aleydon</li>
				</Link>
			</ul>
		</>
	);
}

export default DefaultRoute;
