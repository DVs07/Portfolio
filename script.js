/*      Menu show & hidden      */
const navMenu = document.getElementById('menu'),
toggleMenu = document.getElementById('toggle'),
closeMenu = document.getElementById('close');;


//SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
});

//HIDE
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show');
})

/*      Remove Menu     */
const navLink = document.querySelectorAll('.nav-link');

function linkAction(){
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
