import React from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../store/features/usersSlice";

function CreateUser() {
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const title = formData.get("title");
		const firstName = formData.get("firstName");
		const lastName = formData.get("lastName");
		const email = formData.get("email");
		const picture = formData.get("picture");
		dispatch(createUser({ title, firstName, lastName, email, picture }));
	};

	return (
		<div className="container-post">
			<h1>Add User</h1>
			{/* id, title, firstname, lastname, picture */}
			<form onSubmit={handleSubmit}>
				<table>
					<tr>
						<td>
							<label htmlFor="title">Title</label>
						</td>
						<td>
							<input
								type="text"
								id="title"
								name="title"
								placeholder="your title"
							/>
						</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="firstName">First Name</label>
						</td>
						<td>
							<input
								type="text"
								id="firstName"
								name="firstName"
								placeholder="your first name"
							/>
						</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="lastName">Last Name</label>
						</td>
						<td>
							<input
								type="text"
								id="lastName"
								name="lastName"
								placeholder="your last name"
							/>
						</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="email">email</label>
						</td>
						<td>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="your title"
							/>
						</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="picture">Picture</label>
						</td>
						<td>
							<input
								type="text"
								id="picture"
								name="picture"
								placeholder="picture url"
							/>
						</td>
					</tr>
				</table>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default CreateUser;
