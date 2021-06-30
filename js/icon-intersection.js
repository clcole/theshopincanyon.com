
const icons = [...document.querySelectorAll('.page-section__icon > img')]
let prevIconRatio = 0.0;

const icon_options = {
  root: null,
  rootMargin: "0px",
  threshold: [0,.5,1]
}

const icon_callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio >= .75) {
      entry.target.classList.add("icon-visible");
    } 
    else {
      entry.target.classList.remove("icon-visible");
    }
  })
}

const icon_observer = new IntersectionObserver(icon_callback, icon_options)

icons.forEach((icon, index) => {
  icon_observer.observe(icon)
})
