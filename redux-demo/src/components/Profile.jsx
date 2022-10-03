import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../store/features/fetchUserByIdSlice";

const Profile = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	useEffect(() => {
		dispatch(fetchUserById());
	}, [dispatch]);

	return (
		<div>
			<h1>Profile</h1>
			<div>{JSON.stringify(user)}</div>
		</div>
	);
};

export default Profile;
