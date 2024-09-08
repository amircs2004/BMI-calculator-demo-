const navbarEL  = document.querySelector("#nabvar")
const bottomContainerEL = document.querySelector(".bottomContainer")



window.addEventListener("scroll" , ()=>{
   if (window.scrollY >bottomContainerEL.offsetTop - navbarEL.offsetHeight - 20 ) {
    navbarEL.classList.add("active")
   }else{
    navbarEL.classList.remove("active")
   }
    
})