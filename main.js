const moveCircle = document.querySelector('.moveCircle')

let x = 0;
let y = 0;
let isPressed = false
moveCircle.addEventListener('mousedown', (e) => {
	isPressed = true
	x = e.offsetX;
	y = e.offsetY;

});
document.addEventListener('mousemove', (e) => {
	if (isPressed) {
		moveCircle.style.top = (e.clientY - y) + "px";
		moveCircle.style.left = (e.clientX - x) + "px";
	}
})
document.addEventListener('mouseup', (e) => {
	e.preventDefault();
	isPressed = false
});





