import React from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/features/usersSlice";

const FormUser = ({ id, data, type }) => {
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const title = formData.get("title");
		const firstName = formData.get("firstName");
		const lastName = formData.get("lastName");
		const picture = formData.get("picture");
		dispatch(updateUser({ id, title, firstName, lastName, picture }));
	};
	return (
		<div className="form-user">
			<form onSubmit={handleSubmit}>
				<table>
					<tr>
						<td>
							<label htmlFor="title">Title</label>
						</td>
						<td className="">
							<input
								type="text"
								defaultValue={data.title}
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
								defaultValue={data.firstName}
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
								defaultValue={data.lastName}
								id="lastName"
								name="lastName"
								placeholder="your last name"
							/>
						</td>
					</tr>
					{type !== "edit-user" && (
						<tr>
							<td>
								<label htmlFor="title">Email</label>
							</td>
							<td>
								<input
									type="text"
									id="title"
									name="lastName"
									placeholder="your title"
								/>
							</td>
						</tr>
					)}
					<tr>
						<td>
							<label htmlFor="picture">Picture</label>
						</td>
						<td>
							<input
								type="text"
								defaultValue={data.picture}
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
};

export default FormUser;
