export default () => {

	const submit = e => {
		e.preventDefault();

		console.log(e.target[0]);
		console.log(e.target[1]);
	}

	return (
		<form onSubmit={submit}>
			<input type="text" />
			<input type="password" />
			<button>
				Submit
			</button>
		</form>
	);
}