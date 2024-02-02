import Link from 'next/link';
import { useRouter } from 'next/router';

function SearchId() {
	const router = useRouter();
	const id = router.query.id;

	return (
		<h2>
			{' '}
			routes / {id} / search{' '}
			<Link href="/routes">
				<button type="button">Back to Default Route</button>
			</Link>
		</h2>
	);
}

export default SearchId;
