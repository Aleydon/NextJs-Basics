import Link from 'next/link';
import { useRouter } from 'next/router';

function DefaultRoute() {
	const router = useRouter();

	function simpleNavigation(url) {
		router.push(url);
	}

	function navigationWithParams() {
		router.push({
			pathname: '/routes/params',
			query: {
				id: '87342',
				name: 'Maria'
			}
		});
	}

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

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					gap: 5
				}}
			>
				<button
					type="button"
					onClick={() => router.push('/routes/14478/search')}
				>
					Search
				</button>
				<button
					type="button"
					onClick={() =>
						simpleNavigation('/routes/params?id=87363&name=Daniel')
					}
				>
					Daniel
				</button>
				<button type="button" onClick={navigationWithParams}>
					Maria
				</button>
			</div>
		</>
	);
}

export default DefaultRoute;
