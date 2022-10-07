import React from "react";
import { Link } from "react-router-dom";

function UsersItem({ user }) {
	return (
		<div>
			<div className="card-user">
				<img src={user.picture} alt="Person" className="card__image" />
				<p className="card__name">
					{user.firstName} {user.lastName}
				</p>
				<div className="button__group">
					<Link className="button__detail" to={`/user/${user.id}`}>
						Detail User
					</Link>
					<Link className="button__edit" to={`/user/edit/${user.id}`}>
						Edit User
					</Link>
				</div>
			</div>
		</div>
	);
}

export default UsersItem;
