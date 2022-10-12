import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchUserByID } from "../../store/features/usersSlice";
import styles from "../UserDetails/Detail.module.css";

const UserDetails = () => {
	const currentUser = useSelector((state) => state.users.currentUser);
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(fetchUserByID(id));
	}, [dispatch, id]);

	return (
		<>
			<div className={styles.content}>
				<h1>User Details</h1>
				<div className={styles.container}>
					<div className={styles.bloksatu}>
						<img
							style={{ width: 200 }}
							src={currentUser.picture}
							alt="profile"
						/>
						<div className={styles.bloksatuanak}>
							<span>
								<strong>
									{currentUser.title} {currentUser.firstName}{" "}
									{currentUser.lastName}
								</strong>
							</span>
							<span>{currentUser.email}</span>
							{/* <span>
								<strong>
									{currentUser.location.city}, {currentUser.location.state}
								</strong>
							</span> */}
						</div>
					</div>
					<div className={styles.blokdua}>
						<div>Gender</div>
						<span>{currentUser.gender}</span>
						<div>Date of Birth</div>
						<span>{currentUser.dateOfBirth}</span>
						<div>Phone</div>
						<span>{currentUser.phone}</span>
					</div>
					<div className={styles.buttonContainer}>
						<Link className={styles.buttonBack} to="/user">
							Back
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserDetails;
