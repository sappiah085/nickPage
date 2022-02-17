const images = document.querySelectorAll('[data-src]');
const card = document.querySelector('.card');
function preloadImage(img){
  const src = img.getAttribute('data-src');
  if(!src){
    return
  }
    img.src = src;
}

const options = {
  root: null,
  rootMargin: '0px 0px 90px 0px',
  threshold: 0,
}
const imgObserver = new IntersectionObserver((entries, imgObserver)=>{
 entries.forEach((entry)=>{
   if(!entry.isIntersecting){
     return
   }else{
     entry.target.classList.add('active')
     preloadImage(entry.target)
     imgObserver.unobserve(entry.target)
   }
 })
}, option)

images.forEach((image)=>{
  imgObserver.observe(image)
})

imgObserver.observe(card)