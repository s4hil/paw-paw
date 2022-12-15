document.addEventListener("DOMContentLoaded", () => {
	let img = document.getElementById('dog-img');
	let btn = document.getElementById('btn');

	function displayRandomImg() {
		fetch("https://dog.ceo/api/breeds/image/random")
		.then(res => res.json())
		.then(data => img.src = data.message);
	}
	displayRandomImg();
	btn.addEventListener('click', function () {
		displayRandomImg();
	})
});