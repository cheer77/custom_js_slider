const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
	slide.addEventListener("click", () => {
		claeActiveClass();

		slide.classList.add("active");
	});
}

function claeActiveClass() {
	slides.forEach((slide) => {
		slide.classList.remove("active");
	});
}
