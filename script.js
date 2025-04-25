function readMore(topic) {
    alert("More details about " + topic + " coming soon!");
}



function caesarCipher(str, shift, encode = true) {
    if (!encode) shift = (26 - shift) % 26;
    return str.replace(/[a-zA-Z]/g, char => {
        const base = char <= 'Z' ? 65 : 97;
        return String.fromCharCode((char.charCodeAt(0) - base + shift) % 26 + base);
    });
}

function encodeCaesar() {
    const text = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    const result = caesarCipher(text, shift, true);
    document.getElementById('cipherResult').textContent = result;
}

function decodeCaesar() {
    const text = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    const result = caesarCipher(text, shift, false);
    document.getElementById('cipherResult').textContent = result;
}
