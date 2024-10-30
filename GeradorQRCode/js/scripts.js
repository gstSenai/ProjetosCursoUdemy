const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button")

const qrCodeInput = document.querySelector("#qr-form input")

const qrCodeImg = document.querySelector("#qr-code img")

// Eventos 

function genarateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;

    if(!qrCodeInputValue) return; 

    console.log(qrCodeInputValue);

    qrCodeBtn.innerText = "Gerando Codigo...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

}

qrCodeBtn.addEventListener("click", () => {
    genarateQrCode()
})