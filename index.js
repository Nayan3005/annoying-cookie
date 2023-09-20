const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const loginForm = document.getElementById('login-form')
const modalTextEl = document.getElementById('modal-text')
const modalBtnDecline = document.getElementById('modal-btn-decline')
const modalChoiceBtns = document.getElementById('modal-choice-btns')

modalBtnDecline.addEventListener('mouseenter',function(){
    modalChoiceBtns.classList.toggle('reverse')
})


loginForm.addEventListener('submit', (event)=>{
    event.preventDefault()

    const loginFormData = new FormData(loginForm)
    const name = loginFormData.get('full-name')
    const email = loginFormData.get('email')

    modalTextEl.innerHTML =
    `
        <div class="modal-inner-loading">
            <img src="images/loading.svg" class="loading">
            <p id="uploadText">
                Uploading your data to the dark web...
            </p>
        </div>
    `
    setTimeout(function(){
        document.getElementById('uploadText').innerText = "Making the sale..."
    },1500)
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = 
        `   
            <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/pirate.gif">
            </div>
        `
        modalCloseBtn.disabled = false
    },3500)
    
})



setTimeout(()=>{
    modal.style.display='inline'
},1500)

modalCloseBtn.addEventListener('click',()=>{
    modal.style.display='none'
})