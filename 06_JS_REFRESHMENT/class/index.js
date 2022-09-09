const axios = require("axios");

// class

// class User {
// 	constructor() {
// 		this.firstName = "Ellen";
// 		this.lastName = "Walker";
// 		this.gender = "Male";
// 	}
// }

// const user = new User();

// console.log(user);

// class User {
// 	constructor(firstName, lastName, gender) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.gender = gender;
// 	}

// 	getName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	}
// }

// const user = new User("Ellen", "Boom", "Male");

// console.log(user.getName());

class User {
	#firstName;
	constructor() {
		this.#firstName = ""; // private
		this._lastName = ""; // protected
		this.gender = "";
	}

	getFullName() {
		return `${this.#firstName} ${this._lastName}`;
	}

	setFirstName(firstName) {
		this.#firstName = firstName;
	}
	setLastName(lastName) {
		this._lastName = lastName;
	}
	setGender(gender) {
		this.gender = gender;
	}
}

const user = new User();

user.setFirstName("Hello");
user.setLastName("World");

console.log(user.getFullName());

class Post {
	constructor() {
		this.url = "https://jsonplaceholder.typicode.com/posts";
	}

	async getPosts() {
		return await axios.get(this.url);
	}
}

const posts = new Post();
// (async () => {
// 	const data = await posts.getPosts();
// 	console.log(data);
// })();

class Student extends User {
	constructor(grade, cl) {
		super();
		this.grade = grade;
		this.class = cl;
	}

	setGrade(grade) {
		this.grade = grade;
	}

	setClass(cls) {
		this.class = cls;
	}

	getDetails() {
		return {
			fullName: this.getFullName(),
			gender: this.gender,
			class: this.grade,
			grade: this.class,
		};
	}
}

const student = new Student("12", "A");

student.setFirstName("Haikal");
student.setLastName("Fauzi");
student.setGender("Male");

console.log(student.getDetails());
console.log(student._lastName);
