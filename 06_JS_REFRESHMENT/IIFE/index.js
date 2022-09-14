const https = require("https");

const getPictures = async () => {
	const url = "https://source.unsplash.com/random/";
	https
		.get(url, (res) => {
			let data = "";
			res.on("data", (chunk) => {
				data += chunk;
				console.log(data);
			});
		})
		.on("error", (err) => {
			console.log(err.message);
		});
};

(async () => {
	console.log(await getPictures());
})();
