const sendMail = async(event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const message = document.querySelector('#msg').value
    const formSub=document.getElementById('formSub')
    const formLoader=document.getElementById('formLoader')
    formLoader.style.display="block"
    const submit=document.getElementById('submit')
    submit.style.display='none'
    const error=document.getElementById('error')
    const response =await fetch('http://localhost:5500/send-email', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
    })
    if(response.ok){
    formLoader.style.display="none"
        formSub.style.display='block'
        setTimeout(()=>{
            formSub.style.display='none'
        },2000)
    }
    else{
        error.style.display='block'
        setTimeout(()=>{
            error.style.display='none'
        },2000)
    }
    submit.style.display='block'
}

document.getElementById('contact-form').addEventListener('submit', sendMail)