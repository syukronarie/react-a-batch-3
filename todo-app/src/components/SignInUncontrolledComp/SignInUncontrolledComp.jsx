import React, { useState } from "react";
import "./SignInUncontrolledComp.css";

const SignInUncontrolledComp = () => {
	const [step, setStep] = useState(1);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const email = formData.get("email");
		const password = formData.get("password");
		if (email && step === 1) {
			localStorage.setItem("email", email);
			setStep(2);
		}
		if (password && step === 2) {
			const email = localStorage.getItem("email");
			console.log({
				email,
				password,
			});
		}
		// // 👇️ update input value
		// inputRef.current.value = "New value";
		// // 👇️ access input value
		// console.log(inputRef.current.value);
	};

	// const inputRef = useRef(null);

	return (
		<form className="signin-input-container" onSubmit={handleSubmit}>
			{step === 1 && (
				<input
					type="email"
					name="email"
					className="input"
					placeholder="Please input your email"
					// defaultValue="test@mail.com"
					// value={inputRef.current.value}
					// ref={inputRef}
				/>
			)}
			{step === 2 && (
				<input
					type="password"
					name="password"
					className="input"
					placeholder="Please input your password"
					// defaultValue="test@mail.com"
					// value={inputRef.current.value}
					// ref={inputRef}
				/>
			)}
			<button type="submit" className="submit-btn">
				SignIn
			</button>
		</form>
	);
};

export default SignInUncontrolledComp;
