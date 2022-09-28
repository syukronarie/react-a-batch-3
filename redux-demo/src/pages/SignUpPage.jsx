import React from "react";
import { Link, useNavigate } from "react-router-dom";
import APIUser from "../apis/user.api";

const SignInPage = () => {
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const email = formData.get("email");
		const password = formData.get("password");
		const userName = formData.get("userName");
		const firstName = formData.get("firstName");
		const lastName = formData.get("lastName");
		const result = await APIUser.signup({
			email,
			password,
			userName,
			firstName,
			lastName,
		});
		result.data.success
			? navigate("/login")
			: alert("Oops, something went wrong");
	};
	return (
		<div>
			<form onSubmit={handleSubmit} className="form-container">
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" />
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" />
				<label htmlFor="userName">User name</label>
				<input type="text" name="userName" id="userName" />
				<label htmlFor="firstName">First name</label>
				<input type="text" name="firstName" id="firstName" />
				<label htmlFor="lastName">Last name</label>
				<input type="text" name="lastName" id="lastName" />
				<button type="submit">Sign Up</button>
				<Link to="/login">Sign In</Link>
			</form>
		</div>
	);
};

export default SignInPage;
