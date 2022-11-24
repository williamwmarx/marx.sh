const sleep = async (ms: number) => {
	await new Promise(resolve => {
		return setTimeout(resolve, ms)
	});
}

const showOverlay = async (text: string) => {
	/* Display overlay with text when clicking any window menu-bar buttons */
	const overlay: HTMLElement = document.getElementById("overlay")!;
	overlay.innerHTML = text;
	overlay.style.display = "block";
	await sleep(2000);
	location.replace("https://gallery.marx.sh");
}
