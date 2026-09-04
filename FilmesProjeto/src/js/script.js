document.addEventListener('DOMContentLoaded', () => {
  console.log('🎬 Plataforma CineFilmes - Com a Promoção dos Estudantes!!');

  // Array de filmes com os caminhos das imagens locais
  const filmes = [
    { titulo: 'Invocação do Mal 3', imagem: './src/img/invocacao do mal.jpg' },
    { titulo: 'Homem-Aranha: Um novo dia', imagem: './src/img/homem aranha.jpg' },
    { titulo: 'A Odisseia', imagem: './src/img/odisseia.jpg' },
    { titulo: 'Patrulha Canina: Rota Final', imagem: './src/img/patrulha canina.jpg' },
    { titulo: 'Moana', imagem: './src/img/moana.jpg' },
    { titulo: 'Ponto sem Retorno', imagem: './src/img/ponto sem retorno.jpg' }
  ];

  // 1. RENDERIZAÇÃO DAS FOTOS E TÍTULOS NOS CARDS
  const cardsBootstrap = document.querySelectorAll('#filmes .card');
  const cardsTailwind = document.querySelectorAll('#grid-tailwind > div');

  // Função para aplicar os dados do filme em um card
  const popularCard = (card, filme) => {
    if (!card || !filme) return;

    const img = card.querySelector('img');
    const titulo = card.querySelector('h5');

    if (img) {
      img.src = filme.imagem;
      img.alt = filme.titulo;
      // Fallback simples para caso o nome do arquivo tenha erro de digitação
      img.onerror = () => {
        img.src = 'https://via.placeholder.com/500x700?text=Capa+Indisponivel';
      };
    }

    if (titulo) {
      titulo.textContent = filme.titulo;
    }
  };

  // Renderiza nos cards do Bootstrap
  cardsBootstrap.forEach((card, index) => popularCard(card, filmes[index]));

  // Renderiza nos cards do Tailwind
  cardsTailwind.forEach((card, index) => popularCard(card, filmes[index]));

  // 2. PREENCHIMENTO DINÂMICO DO SELECT DE FILMES
  const selects = document.querySelectorAll('select');
  selects.forEach((select) => {
    select.innerHTML = ''; // Limpa opções antigas
    filmes.forEach((filme) => {
      const option = document.createElement('option');
      option.value = filme.titulo;
      option.textContent = filme.titulo;
      select.appendChild(option);
    });
  });

  // 3. EVENTO DO FORMULÁRIO (BOOTSTRAP & TAILWIND)
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const submitButton = form.querySelector('button');

    if (submitButton) {
      submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        const nameInput = form.querySelector('input[type="text"]');
        const emailInput = form.querySelector('input[type="email"]');
        const movieSelect = form.querySelector('select');

        if (!nameInput.value.trim() || !emailInput.value.trim()) {
          alert('Por favor, preencha todos os campos para garantir seu ingresso!');
          return;
        }

        alert(`🍿 Sucesso, ${nameInput.value}! Seu ingresso na promoção de estudante para "${movieSelect.value}" foi reservado. Enviamos a confirmação para ${emailInput.value}.`);

        form.reset();
      });
    }
  });
});