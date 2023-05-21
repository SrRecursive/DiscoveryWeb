const ballonid = document.getElementById("ballonid");

let color = "red";
let reverse;
let divHeight = 10;
let divWidth = 10;

function switchColor(color, reverse) {
	if (reverse === true){
		if (color === "red"){
			ballonid.style.background = "#00FF00";
			color = "green";
			console.log("From red to green");
		}
		else if (color === "green"){
			ballonid.style.background = "#0000FF";
			color = "blue";
			console.log("From green to blue");
		}
		else if (color === "blue"){
			ballonid.style.background = "#FF0000";
			color = "red";
			console.log("From blue to red");
		}
	}
	else{
		if (color === "red"){
			ballonid.style.background = "#0000FF";
			color = "blue";
			console.log("From red to blue");
		}
		else if (color === "green"){
			ballonid.style.background = "#FF0000";
			color = "red";
			console.log("From green to red");
		}
		else if (color === "blue"){
			ballonid.style.background = "#00FF00";
			color = "green";
			console.log("From blue to green");
		}
	}
	return (color);
}

function setColor(color) {
	color = "red";
	return (color);
}

addEventListener("load", () => {
	setColor();
})

ballonid.addEventListener("click", () =>{
	color = switchColor(color, true);
	var divH = ballonid.offsetHeight += divHeight;
	var divW = ballonid.offsetWidth += divWidth;
	ballonid.style.height = divH + 'px';
	ballonid.style.width = divW + 'px';
	if (divW > 420 && divH > 420){
		ballonid.style.height = "200px";
		ballonid.style.width = "200px";
	}
})

ballonid.addEventListener("mouseover", () => {
	color = switchColor(color, false);
	if (ballonid.offsetHeight > 200 && ballonid.offsetWidth > 200){
		var divH = ballonid.offsetHeight -= divHeight/2;
		var divW = ballonid.offsetWidth -= divWidth/2;
		ballonid.style.height = divH + 'px';
		ballonid.style.width = divW + 'px';
	}
	if (divW >= 420 && divH >= 420){
		ballonid.style.height = "200px";
		ballonid.style.width = "200px";
	}
})

