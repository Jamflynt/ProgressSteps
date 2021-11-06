const progress = document.getElementById(`progress`)
const prev = document.getElementById(`prev`)
const next = document.getElementById(`next`)
const circle = document.querySelectorAll(`.circle`)

let currentActive = 1

next.addEventListener(`click`, () => {
    currentActive ++;

    // For keeping line within the number of circles in progress line
    if (currentActive > circle.length) {
        currentActive = circle.length;
    }

    console.log(currentActive);
  });

prev.addEventListener(`click`, () => {
    currentActive --;

    // For keeping line within the number of circles in progress line
    if (currentActive < 1) {
        currentActive = 1;
    }

    console.log(currentActive);
  });