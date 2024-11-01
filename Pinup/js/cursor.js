const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const leftSection = document.querySelector('.left');
const rightSection = document.querySelector('.right');

function onMouseMove(e) {
    gsap.to($bigBall, { duration: 0.4, x: e.pageX - 15, y: e.pageY - 15 });
    gsap.to($smallBall, { duration: 0.1, x: e.pageX - 5, y: e.pageY - 7 });

    if (isInLeftSection(e.pageX)) {
        $bigBall.classList.add('in-left');
        $smallBall.classList.add('in-left');
        $bigBall.classList.remove('in-right');
        $smallBall.classList.remove('in-right');
    } else {
        $bigBall.classList.add('in-right');
        $smallBall.classList.add('in-right');
        $bigBall.classList.remove('in-left');
        $smallBall.classList.remove('in-left');
    }
}

function isInLeftSection(xPosition) {
    const leftWidth = leftSection.getBoundingClientRect().width;
    return xPosition < leftWidth;
}

document.body.addEventListener('mousemove', onMouseMove);

gsap.from(".left p", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 0.5
});

gsap.from(".right p", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 1
});
