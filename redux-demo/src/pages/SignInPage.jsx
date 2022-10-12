import React from "react";
import { Link, useNavigate } from "react-router-dom";
import APIAuth from "../apis/auth.api";

const SignInPage = () => {
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const email = formData.get("email");
		const password = formData.get("password");
		await APIAuth.signin({ email, password })
			.then((result) => {
				result.data.success && navigate("/");
			})
			.catch(() => {
				alert("password or email is wrong");
			});
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="form-container">
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" />
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" />
				<button type="submit" data-testid="button-submit">
					Sign In
				</button>
				<Link to="/register">Register</Link>
			</form>
		</div>
	);
};

export default SignInPage;
