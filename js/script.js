// Função para exibir uma mensagem de boas-vindas ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  // Exibe uma mensagem de boas-vindas
  alert("Bem-vindo ao Projeto Profissional!");
});

// Função para adicionar um efeito de hover aos botões
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#004080";
    button.style.borderColor = "#003366";
  });

  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#0056b3";
    button.style.borderColor = "#004080";
  });
});

// Função para carregar o conteúdo dinamicamente na card
function loadCardContent(cardId, content) {
  const card = document.getElementById(cardId);
  if (card) {
    const cardBody = card.querySelector(".card-body");
    if (cardBody) {
      cardBody.innerHTML = content;
    }
  }
}

// Exemplo de carregamento dinâmico de conteúdo
document.addEventListener("DOMContentLoaded", () => {
  const content = `
        <h5 class="card-title">Conteúdo Dinâmico</h5>
        <p class="card-text">Este conteúdo foi carregado dinamicamente com JavaScript.</p>
        <a href="#" class="btn btn-primary">Saiba Mais</a>
    `;
  loadCardContent("card-1", content); // Substitua 'card-1' pelo ID do card que deseja atualizar
});
