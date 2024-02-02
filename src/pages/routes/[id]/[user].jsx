import { useRouter } from 'next/router';

function UserName() {
	const route = useRouter();
	const { id, user } = route.query;

	return (
		<h3>
			Id: {id}
			<br />
			User: {user}
		</h3>
	);
}

export default UserName;
