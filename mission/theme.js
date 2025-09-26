let selectElem = document.querySelector('theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        document.body.color.background = 'black'
        pageContent.style.color = 'white';
    } else if (current === 'light') {
        document.body.color.background = 'white'
        pageContent.style.color = 'black';
    }
}