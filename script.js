const navLinks = document.getElementsByClassName("nav-bar-links")[0]
const toggleButton = document.getElementsByClassName("toggle-button")[0]

toggleButton.addEventListener('click',()=>{
  navLinks.classList.toggle('active')
})
