// let selectElem = document.querySelector('theme-select');
// let pageContent = document.querySelector('body');

// selectElem.addEventListener('change', changeTheme);

// function changeTheme() {
//     let current = selectElem.value;
//     if (current === 'dark') {
//         document.body.color.background = 'black'
//         pageContent.style.color = 'white';
//     } else if (current === 'light') {
//         document.body.color.background = 'white'
//         pageContent.style.color = 'black';
//     }
// }


let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = 'black'
        pageContent.style.color = 'white';
        logo.setAttribute ('src', 'byui-logo-white.png')
    } else if (current === 'light') {
        document.body.style.backgroundColor = 'white'
         pageContent.style.color = 'black';
         logo.setAttribute ('src', 'byui-logo-blue.webp')
        // code for changes to colors and logo
    }
}           
                    