const lists = [
	"<li>Satu</li>",
	"<li>Dua</li>",
	"<li>Tiga</li>",
	"<li>Empat</li>",
];

const dom = lists.join("");

document.getElementById("root").innerHTML = dom;
