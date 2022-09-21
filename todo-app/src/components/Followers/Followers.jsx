import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import FollowersList from "../FollowersList/FollowersList";
import UserApis from "../../configs/apis/UserApis";
import "./Followers.css";

const INITIAL_FOLLOWERS = {
	success: false,
	data: [],
	page: 0,
};

const Followers = () => {
	const [followers, setFollowers] = useState(INITIAL_FOLLOWERS);

	useEffect(() => {
		async function fetchData() {
			const result = await UserApis.getUsers(5);
			console.log({ result });
			setFollowers({
				success: true,
				data: result.data.data,
				page: result.data.page ? 0 : result.data.page,
			});
		}
		fetchData();
	}, []);

	const handleNextPage = async (page) => {
		const result = await UserApis.getUsers(5, page + 1);
		setFollowers({ success: true, data: result.data.data });
	};

	return (
		<div className="followers">
			<Header title="Followers" />
			<FollowersList followers={followers} />
			<button onClick={() => handleNextPage(followers.page)}>Next Page</button>
		</div>
	);
};

export default Followers;
