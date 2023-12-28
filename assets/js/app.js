document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }


  


const typed = new Typed('#skill_name', {
  strings: [
    'Front-end Web Developer',
    'Wordpress Specialist',
    'Programer',
    'Dreamer',
  ],
  smartBackspace: true,
  typeSpeed: 60,
  loop: true,
  loopCount: Infinity,
});




// testimonial slider js 

const slider = document.querySelector('.slider');
const dotsContainer = document.querySelector('.dots-container');
const testimonials = document.querySelectorAll('.testimonial');
let activeIndex = 0;

function setActiveDot(index) {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function slideTo(index) {
  slider.style.transform = `translateX(-${testimonials[index].offsetLeft}px)`;
  activeIndex = index;
  setActiveDot(activeIndex);
}

testimonials.forEach((testimonial, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) {
    dot.classList.add('active');
  }
  dot.addEventListener('click', () => slideTo(i));
  dotsContainer.appendChild(dot);
