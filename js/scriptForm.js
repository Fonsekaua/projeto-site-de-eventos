

const url = "http://localhost:3000/evento";
const form = document.querySelector("#form")
form.addEventListener("submit", evento => {
    evento.preventDefault()
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    console.log(data)
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

})

