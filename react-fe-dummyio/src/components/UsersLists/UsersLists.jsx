import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../store/features/usersSlice";
import UsersItem from "../UsersItem/UsersItem";

function UsersLists() {
	const users = useSelector((state) => state.users);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllUsers());
	}, [dispatch]);

	return (
		<div className="container-user-list">
			{users.data.data.map((user) => (
				<UsersItem key={user.id} user={user} />
			))}
		</div>
	);
}

export default UsersLists;
