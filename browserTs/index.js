var button = document.querySelector('#clicker');
if (button) {
    button.addEventListener('click', function (e) {
        if (e.currentTarget instanceof HTMLButtonElement) {
            console.log(e.currentTarget);
        }
    });
}
;
