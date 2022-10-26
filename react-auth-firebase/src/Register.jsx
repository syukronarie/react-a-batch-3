import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "./configs/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
function Register() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [user, loading, error] = useAuthState(auth);
	// const navigate = useNavigate();
	// useEffect(() => {
	// 	if (loading) {
	// 		// maybe trigger a loading screen
	// 		return;
	// 	}
	// 	if (user) navigate("/");
	// }, [user, loading, navigate]);

	useEffect(() => {
		console.log({ user, loading, error });
	}, [user, loading, error]);

	return (
		<div className="login">
			<div className="login__container">
				<input
					type="text"
					className="login__textBox"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Name"
				/>
				<input
					type="text"
					className="login__textBox"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="E-mail Address"
				/>
				<input
					type="password"
					className="login__textBox"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>
				<button
					className="login__btn"
					onClick={() => registerWithEmailAndPassword(name, email, password)}
				>
					Register
				</button>

				<div>
					Already have an account? <Link to="/login">Login</Link> now.
				</div>
			</div>
		</div>
	);
}
export default Register;
