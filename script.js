// 메인 텍스트 자동생성
(function () {
    const spanEl = document.querySelector("main h2 span");
    const textArr = ['안녕하세요 김건영 입니다!', 'BACK-END Developer!'];
    let index = 0;
    let currentText = textArr[index].split("");

    function writeText() {
        spanEl.textContent += currentText.shift();
        if (currentText.length != 0) {
            setTimeout(writeText, Math.floor(Math.random() * 150))
        } else {
            currentText = spanEl.textContent.split("");
            setTimeout(deleteText, 1500);
        }
    }

    function deleteText() {
        currentText.pop();
        spanEl.textContent = currentText.join("");
        if (currentText.length != 0) {
            setTimeout(deleteText, Math.floor(Math.random() * 150))
        } else {
            index = (index + 1) % textArr.length;
            currentText = textArr[index].split("");
            writeText();
        }
    }

    writeText();
})();

// 헤더 
(function () {
    const headerEl = document.querySelector("header");
    window.addEventListener("scroll", function () {
        this.requestAnimationFrame(scrollCheck);
    })

    function scrollCheck() {
        const browserScrollY = window.scrollY ? window.scrollY : window.pageXOffset;
        if (browserScrollY > 0) {
            headerEl.classList.add('active');
        } else {
            headerEl.classList.remove('active');
        }
    }
})();

//버튼 스크롤
const animationMove = function (selector) {
    const target = document.querySelector(selector);
    const browserScrollY = window.pageYOffset;
    const targetScrollY = target.getBoundingClientRect().top + browserScrollY;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
}

const scrollMove = document.querySelectorAll("[data-animation-scroll='true']");
for (let i = 0; i < scrollMove.length; i++) {
    scrollMove[i].addEventListener("click", function (e) {
        animationMove(this.dataset.target);
    })
}




