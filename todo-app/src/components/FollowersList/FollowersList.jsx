/* eslint-disable react/function-component-definition */
import React from "react";
import { Link } from "react-router-dom";
import "./FollowersList.css";

const FollowersList = ({ followers }) => {
	return (
		<div className="followerslist-container">
			<div>
				{followers.success ? (
					followers.data.map((follower, index) => (
						<div
							className="follower-item"
							data-testid={`follower-item-${index}`}
							key={follower.id}
						>
							<img src={follower.picture} alt="follower-profile" />
							<div className="followers-details">
								<div className="follower-item-name">
									<Link to={`/followers/${follower.id}`}>
										<h4>
											{follower.title.toUpperCase()}&nbsp;
											{follower.firstName}&nbsp;
											{follower.lastName}
										</h4>
									</Link>
								</div>
								<p>ID: {follower.id}</p>
							</div>
						</div>
					))
				) : (
					<p>loading...</p>
				)}
			</div>
			<div className="todo-footer">
				<Link to="/">Go Back</Link>
			</div>
		</div>
	);
};

export default FollowersList;
