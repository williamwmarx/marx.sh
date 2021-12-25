// Durstenfeld array shuffling algorithm
export default function shuffle(arr) {
	for (var i = arr.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	}
	return arr
}

