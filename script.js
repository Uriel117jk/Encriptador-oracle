document.getElementById('encryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = btoa(inputText);
    document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    try {
        const decryptedText = atob(inputText);
        document.getElementById('outputText').value = decryptedText;
    } catch (e) {
        alert("El texto no está en un formato válido para desencriptar.");
    }
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
});
