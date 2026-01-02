const qrText = document.getElementById("qrText");
const qrImage = document.getElementById("qrImage");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener('click', () => {
    const text = qrText.ariaValueMax.trim();
    if (text === "") {
        alert("Please enter some text or url first");
        return;
    }
});