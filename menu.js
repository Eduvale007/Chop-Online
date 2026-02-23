const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Função para fechar o menu
const closeMenu = () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
};

// Abre/Fecha ao clicar no botão
hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Impede que o clique no botão seja lido como "clique fora"
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// FECHAR AO CLICAR FORA
document.addEventListener('click', (event) => {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    // Se o menu estiver aberto e o clique NÃO for nele nem no botão, fecha!
    if (navMenu.classList.contains('active') && !isClickInsideMenu && !isClickOnHamburger) {
        closeMenu();
    }
});

// Fecha ao clicar nos links (você já tinha algo assim, mas vamos padronizar)
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Verifica se o usuário já confirmou a idade anteriormente
window.onload = function() {
    const confirmacao = localStorage.getItem("maiorDe18");
    if (confirmacao === "true") {
        document.getElementById("modal-idade").style.display = "none";
    }
}

function confirmarIdade() {
    // Salva a escolha no navegador do usuário
    localStorage.setItem("maiorDe18", "true");
    document.getElementById("modal-idade").style.display = "none";
}

function sairDoSite() {
    // Redireciona para o Google ou outra página segura
    window.location.href = "https://www.google.com.br";
}