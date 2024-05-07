const qrText = document.querySelector('#qrText');
const imageBox = document.querySelector('.imageBox');
const qrImage = document.querySelector('#qrImage');
const btn = document.querySelector('#generateButton');

const generateQR = () => {
  if (qrText.value.length > 0) {
    qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
    imageBox.classList.add('showImage');
    qrText.classList.remove('error');
  } else {
    imageBox.classList.remove('showImage');
    qrText.classList.add('error');
  }
}

btn.addEventListener('click', generateQR);
