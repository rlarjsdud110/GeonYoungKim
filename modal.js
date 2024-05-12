// 모달 이미지 슬라이드 설정
function setupModalSlide(modal) {
    const imgs = modal.querySelectorAll('.slider-box img');
    const nextBtn = modal.querySelector('.btn-right');
    const prevBtn = modal.querySelector('.btn-left');
    const sliderBox = modal.querySelector('.slider-box');
    const navItems = modal.querySelectorAll('.nav-wrap ul li');

    let currentIndex = 0;
    let moveAmount = 900; 

    function updateMoveAmount() {
        const boxWidth = modal.querySelector('.box').offsetWidth;
        moveAmount = boxWidth;
    }


    updateMoveAmount();

    // 창 크기가 변경될 때마다 업데이트
    window.addEventListener('resize', updateMoveAmount);

    nextBtn.addEventListener('click', function () {
        navItems[currentIndex].style.backgroundColor = "rgb(197, 197, 197)";
        navItems[currentIndex].style.width = "12px";
        navItems[currentIndex].style.height = "12px";
        if (currentIndex == imgs.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        sliderBox.style.transform = `translateX(-${moveAmount * currentIndex}px)`;
        navItems[currentIndex].style.backgroundColor = "black";
        navItems[currentIndex].style.width = "15px";
        navItems[currentIndex].style.height = "15px";
    });

    prevBtn.addEventListener('click', function () {
        navItems[currentIndex].style.backgroundColor = "rgb(197, 197, 197)";
        navItems[currentIndex].style.width = "12px";
        navItems[currentIndex].style.height = "12px";
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = imgs.length - 1;
        }
        sliderBox.style.transform = `translateX(-${moveAmount * currentIndex}px)`;
        navItems[currentIndex].style.backgroundColor = "black";
        navItems[currentIndex].style.width = "15px";
        navItems[currentIndex].style.height = "15px";
    });
}
// 모달 열기
const portfolioItems = document.querySelectorAll('.portfolio-inner');
for (let i = 0; i < portfolioItems.length; i++) {
    portfolioItems[i].addEventListener('click', function (event) {
        const modalId = event.currentTarget.getAttribute('data-target');
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        setupModalSlide(modal);
    });
}


window.addEventListener('click', function (event) {
    const modals = document.querySelectorAll('.modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
});


const closeButtons = document.querySelectorAll('.modal .close');
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function () {
        this.closest('.modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}
