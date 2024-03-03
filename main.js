function getPosts() {
	let request = new XMLHttpRequest();
	request.open("GET", "https://jsonplaceholder.typicode.com/posts");
	request.responseType = "json";
	request.send();
	request.onload = function () {
		if (request.status >= 200 && request.status < 300) {
			let posts = request.response;
			for (post of posts) {
				console.log(post);
				document.getElementById("title").innerHTML += `<h6>${post.title}</h6>`;
			}
		} else {
			alert("Not Found");
		}
	};
}

function create() {
	let request = new XMLHttpRequest();
	request.open("POST", "https://jsonplaceholder.typicode.com/posts");
	request.setRequestHeader("Accept", "application/json");
	request.setRequestHeader("Content-type", "application/json");

	let post = `{
		"user_id": "1",
		"title": "Rag",
		"body": "wif"
	}`;
	request.send(post);
	request.responseType = "json";
	request.onload = function () {
		let p = request.response;
		console.log(p);
	};
}
getPosts();
create();
