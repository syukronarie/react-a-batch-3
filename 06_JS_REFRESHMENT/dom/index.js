const lists = [
	"<li>Satu</li>",
	"<li>Dua</li>",
	"<li>Tiga</li>",
	"<li>Empat</li>",
];

// console.log(lists.join(""));
const dom = lists.join("");

document.getElementById("root").innerHTML = dom;
