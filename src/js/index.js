const btnPlus = document.getElementsByClassName('btn-plus');
const btnMore = document.getElementsByClassName('btn-more');
const btnBurger = document.querySelector('.header__btn-burger');
const dropdownMenu = document.querySelector('.dropdown-menu');

let btnPlusDisplay = 'true';
let screenMobile = 'false';
let screenSizeDesktop = 1280;
let screenSizeTablet = 768;

//----------------------------------------------------------------------------------------
//--------------ОБРАБОТКА НАЖАТИЙ НА КНОПКУ ДЛЯ РАСКРЫТИЯ МЕНЮ НАВИГАЦИИ------------------

btnBurger.addEventListener('click', () => {
    dropdownMenu.classList.toggle('header__dropdown-menu_show');
})

//----------------------------------------------------------------------------------------
//--------------------------ФУНКЦИЯ ДЛЯ СМЕНЫ КАРТИНКИ ПО КЛИКУ МЫШКИ---------------------

function changePictureClick() {
    
    for (let i = 0; i < btnPlus.length; i++) {
        btnPlus[i].addEventListener('click', (event) => {

            imgMainTablet = event.currentTarget.nextElementSibling.nextElementSibling.firstElementChild;
            imgChangeTablet = event.currentTarget.nextElementSibling.nextElementSibling.lastElementChild;
            imgMainMobile = event.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
            imgChangeMobile = event.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild;
            imgPlus = event.currentTarget.firstElementChild;
            imgMinus = event.currentTarget.lastElementChild;

            let styles = window.getComputedStyle(imgMinus);
            let screenWidth = document.documentElement.clientWidth;
            if (screenWidth < screenSizeDesktop && screenWidth >= screenSizeTablet) {
                if (styles.display === 'none' || imgPlus.style.display === 'block') {
                    imgMainTablet.style.display = 'none';
                    imgChangeTablet.style.display = 'block';
                    imgPlus.style.display = 'none';
                    imgMinus.style.display = 'block';
                    btnPlusDisplay = 'false';
                } else {
                    imgMainTablet.style.display = 'block';
                    imgChangeTablet.style.display = 'none';
                    imgPlus.style.display = 'block';
                    imgMinus.style.display = 'none';
                    btnPlusDisplay = 'true';
                }
            }

            if (screenWidth < screenSizeTablet) {
                if (styles.display === 'none' || imgPlus.style.display === 'block') {
                    imgMainMobile.style.display = 'none';
                    imgChangeMobile.style.display = 'block';
                    imgPlus.style.display = 'none';
                    imgMinus.style.display = 'block';
                    btnPlusDisplay = 'false';
                } else {
                    imgMainMobile.style.display = 'block';
                    imgChangeMobile.style.display = 'none';
                    imgPlus.style.display = 'block';
                    imgMinus.style.display = 'none';
                    btnPlusDisplay = 'true';
                }
            }
        })
    }
}

//----------------------------------------------------------------------------------------
//----------------------ФУНКЦИЯ ДЛЯ РАСКРЫТИЯ ТЕКСТА ПО КЛИКУ МЫШКИ-----------------------

function changeTextClick() {
    
    for (let i = 0; i < btnMore.length; i++) {
        btnMore[i].addEventListener('click', (event) => {
            textShort = event.currentTarget.nextElementSibling.nextElementSibling;
            textExpanded = event.currentTarget.nextElementSibling;
            btnExpand = event.currentTarget.firstElementChild;
            btnHide = event.currentTarget.lastElementChild;

            if (btnExpand.style.display === 'block') {
                textShort.style.display = 'none';
                textExpanded.style.display = 'block';
                btnExpand.style.display = 'none';
                btnHide.style.display = 'block';
            } else {
                textShort.style.display = 'block';
                textExpanded.style.display = 'none';
                btnExpand.style.display = 'block';
                btnHide.style.display = 'none';
            }
        })
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------------
//----------------------ФУНКЦИЯ ДЛЯ ВСТАВКИ ТЕКСТА В ЗАВИСИМОСТИ ОТ ЭКРАНА (ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ, БОЛЬШЕ ДЛЯ УДОБСТВА)-----------------------

function resizeListener(widthValue) {
    const thresholdWidth = widthValue; // Заданное значение ширины экрана
  
    function displayTabletText() { // Функция, которая выполнится если размер экрана выше thresholdWidth (т.е. больше мобильного)
        for (let i = 0; i < btnMore.length; i++) {
            btnMore[i].nextElementSibling.style.display = 'block';
            btnMore[i].nextElementSibling.nextElementSibling.style.display = 'none';
        }
    }

    function displayMobileText() { // Функция, которая выполнится если размер экрана ниже thresholdWidth (т.е. мобильный)
        for (let i = 0; i < btnMore.length; i++) {
            btnMore[i].nextElementSibling.style.display = 'none';
            btnMore[i].nextElementSibling.nextElementSibling.style.display = 'block';
            btnMore[i].firstElementChild.style.display = 'block';
            btnMore[i].lastElementChild.style.display = 'none';
            btnMoreDisplay = 'true';
        }
    }
  
    function checkWindowSize() { // Функция, которая проверяет текущую ширину экрана и вызывает displayTabletText или displayMobileText
        if (window.innerWidth >= thresholdWidth && screenMobile == 'true') {
            displayTabletText();
            screenMobile = 'false'
        } 
        
        if (window.innerWidth < thresholdWidth && screenMobile == 'false') {
            displayMobileText();
            screenMobile = 'true';
        }
    }
  
    checkWindowSize(); // Вызов функции проверки ширины экрана при инициализации страницы
    window.addEventListener('resize', checkWindowSize); // Слушатель события изменения размера экрана
}

//--------------------------------------------------------
//--------------------ВЫЗОВ ФУНКЦИЙ-----------------------
changePictureClick();
changeTextClick();
resizeListener(screenSizeTablet);