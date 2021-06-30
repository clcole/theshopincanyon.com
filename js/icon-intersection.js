
let icons = [...document.querySelectorAll(".page-section__icon > img")]; 

function createIconObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: [0,.5,1]
  };

  observer = new IntersectionObserver(handleIconIntersect, options);
  
  icons.forEach((icon, index) => {
    observer.observe(icon)
  });
}

function handleIconIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio >= .75) {
      entry.target.classList.add("icon-visible");
    } 
    else {
      entry.target.classList.remove("icon-visible");
    }
  });
}

createIconObserver();
