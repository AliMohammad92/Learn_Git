// setTimeout(function () {
// 	document.getElementById("title1").style.visibility = "visible";
// 	setTimeout(function () {
// 		document.getElementById("title2").style.visibility = "visible";
// 		setTimeout(function () {
// 			document.getElementById("title3").style.visibility = "visible";

// 			setTimeout(function () {
// 				document.getElementById("title4").style.visibility = "visible";
// 			}, 1000);
// 		}, 1000);
// 	}, 1000);
// }, 1000);

let p = new Promise(function (resolve, reject) {
	setTimeout(() => {
		document.getElementById("title1").style.visibility = "visible";
		resolve();
	}, 1000);
});

p.then(() => {
	setTimeout(() => {
		document.getElementById("title2").style.visibility = "visible";
	}, 1000);
});
