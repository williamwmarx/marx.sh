const sleep = async (ms) => {
    await new Promise(resolve => {
        return setTimeout(resolve, ms);
    });
};
const showOverlay = async (text) => {
    const overlay = document.getElementById("overlay");
    overlay.innerHTML = text;
    overlay.style.display = "block";
    await sleep(2000);
    location.replace("https://gallery.marx.sh");
};
