const sleep = async (ms) => {
	await new Promise(resolve => {
		return setTimeout(resolve, ms)
	});
}

const showOverlay = async (text) => {
	overlay = document.getElementById("overlay");
	overlay.innerHTML = text;
	overlay.style.display = "block";
	await sleep(2000);
	location.replace("https://gallery.marx.design");
}

function maximizeIt() { showOverlay("BUY NOW CRY LATER"); }
function minimizeIt() { showOverlay("DO NOT MINIMIZE THE ROLE OF COMMERCE"); }
function closeIt() { showOverlay("NICE TRY BUCKO"); }
