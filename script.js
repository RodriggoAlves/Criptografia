let shift = 10; 

function encryptText() {
    const text = document.getElementById('inputEncryptText').value;
    let encryptedText = '';

    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        encryptedText += String.fromCharCode(charCode + shift);
    }

    showModal('Seu código criptografado', encryptedText);
}

function decryptText() {
    const text = document.getElementById('inputDecryptText').value;
    let decryptedText = '';

    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        decryptedText += String.fromCharCode(charCode - shift);
    }

    showModal('Seu código descriptografado', decryptedText);
}

function showModal(title, text) {
    document.getElementById('modalText').innerText = text;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function setShift(newShift) {
    shift = newShift;
}
