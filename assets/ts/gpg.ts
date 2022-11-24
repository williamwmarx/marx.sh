import { createMessage, readKey, encrypt } from 'openpgp';

const gpgURL = "https://keys.openpgp.org/vks/v1/by-fingerprint/AAA31FBCBD81A455373418929206B1B4F54B544F";

const loadGPGKey = async () =>  {
	return fetch(gpgURL)
		.then(response => response.text())
		.then(publicKey => {return publicKey});
}

const encryptText = async () => {
	const gpgPublicKey = await loadGPGKey();
	const textarea = document.getElementsByTagName("textarea")[0];
	const button = document.getElementsByTagName("button")[0];
	if (textarea != null) {
		console.log("here1");
		const encryptedMessage = await encrypt({
			message: await createMessage({ text: textarea.value }),
			encryptionKeys: await readKey({ armoredKey: gpgPublicKey })
		})
		textarea.value = encryptedMessage;
		button.innerText = "Copy to Clipboard";
		button.setAttribute("onclick", `navigator.clipboard.writeText(${encryptedMessage})`);
	}
}
