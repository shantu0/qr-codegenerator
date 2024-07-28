let imgBox =  document.getElementById("imgBox");
let qrImage =  document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR()
{
    if(qrText.value.length > 0)
    {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
    else
    {
        qrText.classList.add('error')
        setTimeout(()=> {
            qrText.classList.remove('error');
        }, 1000)
    }
}


const floating_btn = document.querySelector(".floating-btn");
const close_btn = document.querySelector(".close-btn");
const social_panel_container = document.querySelector(".social-panel-container");

floating_btn.addEventListener('click',function(){
    social_panel_container.classList.toggle('visible');
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});