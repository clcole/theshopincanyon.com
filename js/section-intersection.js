
const numSteps = 20;

let sections;
let prevRatio = 0.0;
let increasingColor = "rgba(226, 222, 213, ratio)";
let decreasingColor = "rgba(226, 222, 213, ratio)";

function createSectionObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  };

  observer = new IntersectionObserver(handleSectionIntersect, options);
  
  sections.forEach((section, index) => {
    observer.observe(section)
  });
}

function buildThresholdList() {
  let thresholds = [];

  for (let i=1.0; i<=numSteps; i++) {
    let ratio = i/numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

function handleSectionIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
    } 
    else {
      entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
    }

    prevRatio = entry.intersectionRatio;
  });
}

// window.addEventListener("load", (event) => {
//   sections = [...document.querySelectorAll(".page-section")];

//   createSectionObserver();
// }, false);

sections = [...document.querySelectorAll(".page-section")];

createSectionObserver();
