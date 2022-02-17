const outer = document.querySelector('.outer');
const nav = document.querySelector('nav');
const option = {
  rootMargin: '30px 0px 0px 0px ',
  root: null,
  threshold: .9
};
const observer = new IntersectionObserver((entry, observer)=>{
entry.forEach((entries)=>{
  if(entries.isIntersecting){
    nav.classList.remove('active')
  }
  else{
    nav.classList.add('active')
  }
})
}, option)


function obs(){
  if(window.innerWidth <= 732)return
  observer.observe(outer);
}
obs();



const humb = document.querySelector('.humb');
const links = document.querySelectorAll('a');
links.forEach(el=>{
  el.addEventListener('click', ()=>{
    humb.classList.toggle("active");
    document.querySelector("nav").classList.toggle("active");
  })
})
humb.addEventListener('click', ()=>{
  humb.classList.toggle('active');
  document.querySelector('nav').classList.toggle('active');
})