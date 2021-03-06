/*      Menu show & hidden      */
const navMenu = document.getElementById('menu'),
toggleMenu = document.getElementById('toggle'),
closeMenu = document.getElementById('close');
checkBox = document.getElementById('checkbox');


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

/*      Scroll sections active link     */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionID= current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('nav-menu a[href*='+ sectionID +']').claslist.add('active');
        }else{
            document.querySelector('nav-menu a[href*='+ sectionID +']').claslist.remove('active');
        }
    })
}
/*      Change theme    */
checkBox.addEventListener('change', () =>{
    document.body.classList.toggle('dark');
})