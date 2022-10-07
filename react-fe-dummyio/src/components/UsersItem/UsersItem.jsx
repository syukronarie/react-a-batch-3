import React from "react";

function UsersItem({ user }) {
	return (
		<div>
			<div className="card-user">
				<img src={user.picture} alt="Person" className="card__image" />
				<p className="card__name">
					{user.firstName} {user.lastName}
				</p>
			</div>
		</div>
	);
}

export default UsersItem;
