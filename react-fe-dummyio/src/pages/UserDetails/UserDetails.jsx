import React from "react";
import styles from "../UserDetails/Detail.module.css";

const UserDetails = () => {
	return (
		<>
			<div className={styles.content}>
				<h1>User Details</h1>
				<div className={styles.container}>
					<div className={styles.bloksatu}>
						<img style={{ width: 200 }} src="" alt="profile" />
						<div className={styles.bloksatuanak}>
							<span>
								<strong>ms. Sara Andersen</strong>
							</span>
							<span>sara.andersen@example.com</span>
							<span>
								<strong>Nordjylland, Denmark</strong>
							</span>
						</div>
					</div>
					<div className={styles.blokdua}>
						<div>Gender</div>
						<span>Female</span>
						<div>Date of Birth</div>
						<span>1996-04-30</span>
						<div>Phone</div>
						<span>92694011</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserDetails;
