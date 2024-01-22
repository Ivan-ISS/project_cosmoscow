const btnPlus = document.getElementsByClassName('btn-plus');
const btnMore = document.getElementsByClassName('btn-more');
const btnBurger = document.querySelector('.header__btn-burger');
const dropdownMenu = document.querySelector('.dropdown-menu');

let btnPlusDisplay = 'true';
let btnMoreDisplay = 'true';


// Обработка нажатий на кнопку для раскрытия меню навигации
btnBurger.addEventListener('click', () => {
    dropdownMenu.classList.toggle('header__dropdown-menu_show');
})

//----------------------------------------------------------------------------------------
//--------------------------ФУНКЦИЯ ДЛЯ СМЕНЫ КАРТИНКИ ПО КЛИКУ МЫШКИ---------------------

function changePictureClick() {
    
        for (let i = 0; i < btnPlus.length; i++) {
            btnPlus[i].addEventListener('click', (event) => {
                /* console.log(event.currentTarget);
                console.log(event.currentTarget.nextElementSibling);
                console.log(event.currentTarget.nextElementSibling.firstElementChild);
                console.log(event.currentTarget.nextElementSibling.lastElementChild); */

                let screenWidth = document.documentElement.clientWidth;
                if (screenWidth < 1280 && screenWidth > 767) {
                    if (btnPlusDisplay === 'true') {
                        event.currentTarget.nextElementSibling.nextElementSibling.firstElementChild.style.display = 'none';
                        event.currentTarget.nextElementSibling.nextElementSibling.lastElementChild.style.display = 'block';
                        event.currentTarget.firstElementChild.style.display = 'none';
                        event.currentTarget.lastElementChild.style.display = 'block';
                        btnPlusDisplay = 'false';
                    } else {
                        event.currentTarget.nextElementSibling.nextElementSibling.firstElementChild.style.display = 'block';
                        event.currentTarget.nextElementSibling.nextElementSibling.lastElementChild.style.display = 'none';
                        event.currentTarget.firstElementChild.style.display = 'block';
                        event.currentTarget.lastElementChild.style.display = 'none';
                        btnPlusDisplay = 'true';
                    }
                }

                if (screenWidth < 768) {
                    if (btnPlusDisplay === 'true') {
                        event.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.style.display = 'none';
                        event.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.style.display = 'block';
                        event.currentTarget.firstElementChild.style.display = 'none';
                        event.currentTarget.lastElementChild.style.display = 'block';
                        btnPlusDisplay = 'false';
                    } else {
                        event.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.style.display = 'block';
                        event.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.style.display = 'none';
                        event.currentTarget.firstElementChild.style.display = 'block';
                        event.currentTarget.lastElementChild.style.display = 'none';
                        btnPlusDisplay = 'true';
                    }
                }
                /* console.log(btnPlusDisplay); */
                /* console.log(event.currentTarget.nextElementSibling.firstElementChild.style.display); */
            })
        }
}

//----------------------------------------------------------------------------------------
//-------------ФУНКЦИЯ ДЛЯ СМЕНЫ КАРТИНКИ ПО НАВЕДЕНИЮ И УХОДУ КУРСОРА МЫШКИ--------------

function changePictureHover() {
    
    for (let i = 0; i < btnPlus.length; i++) {
        btnPlus[i].addEventListener('mouseover', (event) => {

            let screenWidth = document.documentElement.clientWidth
            if (screenWidth >= 1280) {
                event.currentTarget.nextElementSibling.firstElementChild.style.display = 'none';
                event.currentTarget.nextElementSibling.lastElementChild.style.display = 'block';
                event.currentTarget.firstElementChild.style.display = 'none';
                event.currentTarget.lastElementChild.style.display = 'block';
            }
        })

        btnPlus[i].addEventListener('mouseout', (event) => {

            let screenWidth = document.documentElement.clientWidth;
            if (screenWidth >= 1280) {
                event.currentTarget.nextElementSibling.firstElementChild.style.display = 'block';
                event.currentTarget.nextElementSibling.lastElementChild.style.display = 'none';
                event.currentTarget.firstElementChild.style.display = 'block';
                event.currentTarget.lastElementChild.style.display = 'none';
            }
        })
    }
}

//----------------------------------------------------------------------------------------
//----------------------ФУНКЦИЯ ДЛЯ РАСКРЫТИЯ ТЕКСТА ПО КЛИКУ МЫШКИ-----------------------

function changeTextClick() {
    
    for (let i = 0; i < btnMore.length; i++) {
        btnMore[i].addEventListener('click', (event) => {
            if (btnMoreDisplay === 'true') {
                event.currentTarget.nextElementSibling.nextElementSibling.style.display = 'none';
                event.currentTarget.nextElementSibling.style.display = 'block';
                event.currentTarget.firstElementChild.style.display = 'none';
                event.currentTarget.lastElementChild.style.display = 'block';
                btnMoreDisplay = 'false';
            } else {
                event.currentTarget.nextElementSibling.nextElementSibling.style.display = 'block';
                event.currentTarget.nextElementSibling.style.display = 'none';
                event.currentTarget.firstElementChild.style.display = 'block';
                event.currentTarget.lastElementChild.style.display = 'none';
                btnMoreDisplay = 'true';
            }
        })
    }
}

//--------------------ВЫЗОВ ФУНКЦИЙ-----------------------
changePictureHover();
changePictureClick();
changeTextClick();