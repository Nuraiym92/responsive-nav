const burger=document.querySelector(".burger")
const menu=document.querySelector(".menu")

burger.addEventListener("click",showMenu)
function showMenu(){
    menu.classList.toggle("menu-show")
}