const button = document.getElementById("change-btn");
const display = document.getElementById('indicator');
let buttonWidth = 30;
let buttonHeight = 10;
function randomColor () {
	let hex = "0123456789abcdef";
	let color = "#";
	for (let i = 0; i < 6; i++)
	{
		color = color + hex[Math.floor(Math.random() * 16)];
	}
	return (color);
}

function changeBackground() {
	document.body.style.background = randomColor();
}

function showRGB() {
	display.innerText = document.body.style.backgroundColor;
}

// function increaseButtonSize(buttonSize) {
// 	button.style.fontSize = buttonSize;
// }

button.addEventListener('click', () => {
	changeBackground();
	showRGB();
	var btnW = button.offsetWidth+=buttonWidth;
	var btnH = button.offsetHeight+=buttonHeight;
	console.log(btnW + btnH);
	button.style.width = btnW + 'px';
	button.style.height = btnH + 'px';
})