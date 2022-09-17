const axios = require("axios");

const url = "https://jsonplaceholder.typicode.com/posts";

const fetchPosts = async () => {
	const result = await axios.get(url);
	return result.data;
};

(async () => {
	const postData = await fetchPosts();
})();

const fetchPosts2 = async () => {
	const result = await new Promise((resolve, reject) => {
		axios
			.get(url)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => reject(err));
	});
	const result2 = await new Promise((resolve, reject) => {
		axios
			.get(url)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => reject(err));
	});
	return { result, result2 };
};

(async () => {
	const postData2 = await fetchPosts2();
	console.log({ postData2 });
})();
