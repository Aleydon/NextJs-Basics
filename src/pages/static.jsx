/* eslint-disable react/prop-types */
export function getStaticProps() {
	return {
		props: {
			numbers: Math.random()
		}
	};
}

export default function Static(props) {
	return (
		<div>
			<h2> {props.numbers}</h2>
		</div>
	);
}
