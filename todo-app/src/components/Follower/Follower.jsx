import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../Header/Header";
import UserApis from "../../configs/apis/UserApis";
import "./Follower.css";

const INITIAL_FOLLOWER = {
	success: false,
	data: {},
};

const Followers = () => {
	const [follower, setFollower] = useState(INITIAL_FOLLOWER);

	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (id) {
			async function fetchData() {
				const result = await UserApis.getUserById(id);
				console.log({ result });
				setFollower({ success: true, data: result.data });
			}
			fetchData();
		} else {
			navigate({ to: "/" });
		}
	}, [id, navigate]);

	return (
		<div className="followers">
			<Header title="Follower DETAIL" />
			<div className="followerslist-container">
				<div>
					{follower.success ? (
						<div
							className="follower-item"
							data-testid={`follower-item-${follower.data.id}`}
							key={follower.data.id}
						>
							<img src={follower.data.picture} alt="follower-profile" />
							<div className="followers-details">
								<div className="follower-item-name">
									<Link to={`/followers/${follower.data.id}`}>
										<h4>
											{follower.data.title.toUpperCase()}&nbsp;
											{follower.data.firstName}&nbsp;
											{follower.data.lastName}
										</h4>
									</Link>
								</div>
								<p>ID: {follower.data.id}</p>
							</div>
						</div>
					) : (
						<p>loading...</p>
					)}
				</div>
				<div className="todo-footer">
					<Link to="/followers">Go Back</Link>
				</div>
			</div>
		</div>
	);
};

export default Followers;
