import React, { useState } from "react";
import "./SignInControlledComp.css";

const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

const SignInControlledComp = () => {
	const [errors, setErrors] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const email = formData.get("email");
		const password = formData.get("password");
		console.log({
			email,
			password,
		});
	};

	const handleEmailChange = (e) => {
		const email = e.target.value;
		if (email) {
			if (!validateEmail(email)) {
				setErrors((state) => ({
					...state,
					email: "email is not valid.",
				}));
			} else {
				setErrors((state) => ({
					...state,
					email: "",
				}));
			}
		} else {
			setErrors((state) => ({
				...state,
				email: "",
			}));
		}
	};

	return (
		<form className="signin-input-container" onSubmit={handleSubmit}>
			<label htmlFor="email">
				Email
				<input
					type="email"
					name="email"
					className="input"
					onChange={handleEmailChange}
					placeholder="Please input your email"
					id="email"
				/>
				{errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
			</label>
			<label htmlFor="password">
				Password
				<input
					type="password"
					name="password"
					className="input"
					placeholder="Please input your password"
					id="password"
				/>
			</label>
			<button type="submit" className="submit-btn">
				SignIn
			</button>
		</form>
	);
};

export default SignInControlledComp;
