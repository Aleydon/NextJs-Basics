import { useRouter } from 'next/router';

function SearchId() {
	const router = useRouter();
	const id = router.query.id;

	return <h2> routes / {id} / search </h2>;
}

export default SearchId;
