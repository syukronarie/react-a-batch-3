import React, { useState, useEffect } from "react";

const EventHandling = () => {
	const [errors, setErrors] = useState({ password: "" });
	const [disabled, setDisabled] = useState(true);
	const [highlighted, setHighlighted] = useState(false);

	function onSubmit(e) {
		e.preventDefault();
		console.log(e);
	}

	function handleChangePassword(e) {
		const password = e.target.value;
		const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
		if (!re.test(password)) {
			setErrors((state) => ({
				...state,
				password: "password is weak",
			}));
		} else {
			setErrors((state) => ({
				...state,
				password: "",
			}));
		}
	}

	function handleOnMouseEnter(e) {
		setHighlighted(true);
	}

	function handleOnMouseLeave() {
		setHighlighted(false);
	}

	useEffect(() => {
		Object.values(errors).forEach((val) => {
			!val ? setDisabled(false) : setDisabled(true);
		});
	}, [errors]);

	return (
		<form
			onSubmit={onSubmit}
			className={`form ${highlighted ? "higlighted" : ""}`}
			onMouseEnter={handleOnMouseEnter}
			onMouseLeave={handleOnMouseLeave}
		>
			<label htmlFor="username">Username</label>
			<input type="username" name="username" id="username" />
			<label htmlFor="email">Email</label>
			<input type="email" name="email" id="email" />
			<label htmlFor="password">Password</label>
			<input
				type="password"
				name="password"
				id="password"
				onChange={handleChangePassword}
			/>
			{errors.password && <span>{errors.password}</span>}
			<button type="submit" disabled={disabled}>
				Register
			</button>
		</form>
	);
};

export default EventHandling;
