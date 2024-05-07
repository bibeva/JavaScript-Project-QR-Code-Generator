let imageBox = document.querySelector('.imageBox');
let qrImage = document.querySelector('#qrImage');
let qrText = document.querySelector('#qrText');

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
    imageBox.classList.add('showImage');
    qrText.classList.remove('error');
  } else {
    imageBox.classList.remove('showImage');
    qrText.classList.add('error');
  }
}
