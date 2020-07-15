
var door1 = document.getElementById("door1");
var door2 = document.getElementById("door2");
door1.addEventListener("click", function(){toggleDoor(door1)});
door2.addEventListener("click", function(){toggleDoor(door2)});

function myRedirect(url){
	window.location.href  = url;
}

function toggleDoor(element) {
		console.log(element)
		element.classList.toggle("doorOpen");
}

function myRedirectWithDelay(url){
	// alert(url)
	setTimeout(function(){myRedirect(url)}, 2000);
}