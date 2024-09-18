const config = document.querySelector("#config")
const close = document.querySelector(".close")


const toggle = () => {

  const form = document.querySelector("#form")

  const back = document.querySelector("#back")
  form.classList.toggle("opacity")

  back.classList.toggle("opacity")

}
const togglemod = () => {
  const formod = document.querySelector("#formod")
  const back = document.querySelector("#back")
  formod.classList.toggle("opacity")
  back.classList.toggle("opacity")
}