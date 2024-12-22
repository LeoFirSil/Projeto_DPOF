document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-link]');
    
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            removeBotaoAtivo();
            botao.target.classList.add('navbar__link--is--active');
        });
    }
});

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-link]');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('navbar__link--is--active');
    }
}