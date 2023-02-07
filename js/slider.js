const slider = document.querySelector('.category--slider');
const headingList = slider.querySelector('.slider-text').children;
const dotsList = slider.querySelector('.slider-dots').children;
const currentSlidClass = 'current-item';
const currentDotClass = 'current-dot';

const backButton = slider.querySelector('.slider-controls__back');
const forwardButton = slider.querySelector('.slider-controls__next');


let findCurrentSlid =  function (sliderArray, currentClass) {
    let count;
    for (let i = 0; i < sliderArray.length; i++) {
        headingList[i].classList.add('visually-hidden');
        if (headingList[i].classList.contains(currentClass) && !count) {
            count = i;
            headingList[i].classList.remove('visually-hidden');
        } else if (headingList[i].classList.contains(currentClass) && count) {
            headingList[i].classList.remove(currentClass);
        } 
    };
    if (!count) {
        headingList[0].classList.add(currentClass);
        headingList[0].classList.remove('visually-hidden');
        count = 0;
    }
    return count;
}; 

let findCurrentDot = function (dotsArray, count, currentClass) {
    for (let y = 0; y < dotsArray.length; y++) {
        if (dotsArray[y].classList.contains(currentClass) && y !== count) {
            dotsArray[y].classList.remove(currentClass);
        }
    };

    if (dotsArray.length < (count + 1)) {
        dotsArray[0].classList.add(currentClass);
        return 0;
    } else {
        dotsArray[count].classList.add(currentClass);
        return count;
    };
};

let currentSlidCount = findCurrentSlid(headingList, currentSlidClass);
let currentDotCount = findCurrentDot(dotsList, currentSlidCount, currentDotClass);

backButton.addEventListener('click', function () {
    slider.classList.remove('slid--' + currentSlidCount);
    headingList[currentSlidCount].classList.add('visually-hidden');
    headingList[currentSlidCount].classList.remove(currentSlidClass);
    dotsList[currentDotCount].classList.remove(currentDotClass);
    if ((currentSlidCount - 1) < 0) {
        currentSlidCount = headingList.length - 1;
    } else {
        currentSlidCount -= 1; 
    };

    if ((currentDotCount - 1) < 0) {
        currentDotCount = dotsList.length - 1;
    } else {
        currentDotCount -= 1; 
    };

    slider.classList.add('slid--' + currentSlidCount);
    headingList[currentSlidCount].classList.remove('visually-hidden');
    headingList[currentSlidCount].classList.add(currentSlidClass);
    dotsList[currentDotCount].classList.add(currentDotClass);
});

forwardButton.addEventListener('click', function () {
    slider.classList.remove('slid--' + currentSlidCount);
    headingList[currentSlidCount].classList.add('visually-hidden');
    headingList[currentSlidCount].classList.remove(currentSlidClass);
    dotsList[currentDotCount].classList.remove(currentDotClass);
    if ((currentSlidCount + 1) >= headingList.length) {
        currentSlidCount = 0;
    } else {
        currentSlidCount += 1; 
    };

    if ((currentDotCount + 1) >= dotsList.length) {
        currentDotCount = 0;
    } else {
        currentDotCount += 1; 
    };

    slider.classList.add('slid--' + currentSlidCount);
    headingList[currentSlidCount].classList.remove('visually-hidden');
    headingList[currentSlidCount].classList.add(currentSlidClass);
    dotsList[currentDotCount].classList.add(currentDotClass);    
});

console.log(currentSlidCount);
console.log(currentDotCount);