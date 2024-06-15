// script.js

// Função que será executada quando o botão for clicado
function handleClick() {
    alert('Este é um de meus primeiros projetos!');
}

// Adiciona um evento de clique ao botão quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('clickButton').addEventListener('click', handleClick);
});
