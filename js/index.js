const Header = document.querySelector('header');

window.addEventListener('scroll', ()=>{
    Header.classList.toggle('sticky', this.window.scrollY > 80)
});

