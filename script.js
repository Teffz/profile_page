
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os links de navegação
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();  // Previne o comportamento padrão do link

            // Obtém o ID da seção que queremos rolar
            const targetId = link.getAttribute("href").substring(1);  // Remove o # do href
            const targetSection = document.getElementById(targetId);  // Encontra a seção com o ID

            if (targetSection) {
                // Ajusta a rolagem para levar em consideração o cabeçalho fixo
                const headerHeight = document.querySelector('nav').offsetHeight;
                const sectionTop = targetSection.offsetTop;
                
                // Rolagem suave, ajustada pela altura do cabeçalho
                window.scrollTo({
                    top: sectionTop - headerHeight,  // Subtrai a altura do cabeçalho fixo
                    behavior: "smooth"  // Habilita a rolagem suave
                });
            }
        });
    });});
