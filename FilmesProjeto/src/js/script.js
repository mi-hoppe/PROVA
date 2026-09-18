document.addEventListener('DOMContentLoaded', () => {
  console.log('🎬 Plataforma CineFilmes - Com a Promoção dos Estudantes!!');
  const filmes = [
    {
      titulo: 'Invocação do Mal 3',
      imagem: './src/img/invocacao do mal.jpg'
    },
    {
      titulo: 'Homem-Aranha: Um novo dia',
      imagem: './src/img/homem aranha.jpg'
    },
    {
      titulo: 'A Odisseia',
      imagem: './src/img/odisseia.jpg'
    },
    {
      titulo: 'Patrulha Canina: Rota Final',
      imagem: './src/img/patrulha canina.jpg'
    },
    {
      titulo: 'Moana',
      imagem: './src/img/moana.jpg'
    },
    {
      titulo: 'Ponto sem Retorno',
      imagem: './src/img/ponto sem retorno.jpg'
    }
  ];
  const cards = document.querySelectorAll('#grid-tailwind > div');
  cards.forEach((card, index) => {
    const filme = filmes[index];
    if (!filme) {
      return;
    }
    const imagem = card.querySelector('img');
    const titulo = card.querySelector('h5');
    if (imagem) {
      imagem.src = filme.imagem;
      imagem.alt = filme.titulo;
      imagem.onerror = () => {
        imagem.src =
          'https://via.placeholder.com/500x700?text=Capa+Indisponivel';
      };
    }
    if (titulo) {
      if (filme.titulo === 'Homem-Aranha: Um novo dia') {
        titulo.textContent = `${filme.titulo} 🕷️`;
      }
      else if (filme.titulo === 'A Odisseia') {
        titulo.textContent = `${filme.titulo} 🏛️`;
      }
      else {
        titulo.textContent = filme.titulo;
      }
    }
  });
 const filmeSelect = document.querySelector('#filme'); // busca pag do campo que possui o ID filmes.

if (filmeSelect) { // map trasnforma cada objeto de filmes do seu arry em uma frase no formato de tag html .
  const opcoesFilmes = filmes
    .map((filme) => `<option value="${filme.titulo} ">${filme.titulo}</option>`)
    .join('');

  filmeSelect.innerHTML = `<option value="">Selecione um filme</option>${opcoesFilmes}`;

  }
 const botoesComprar = document.querySelectorAll('.comprar-ingresso');

botoesComprar.forEach((botao) => {
  botao.addEventListener('click', () => {
    const filmeSelecionado = botao.getAttribute('data-filme');
    
    if (filmeSelect) {
      filmeSelect.value = filmeSelecionado;
      // Foca no campo de seleção e rola a tela até ele automaticamente
      filmeSelect.focus({ preventScroll: false });
    }
  });
});
  const form =
    document.querySelector('#form-reserva');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const nomeInput =
        document.querySelector('#nome');
      const emailInput =
        document.querySelector('#email');
      const filmeInput =
        document.querySelector('#filme');
      const ingressoInput =
        document.querySelector('#ingresso');
      const nome =
        nomeInput.value.trim();
      const email =
        emailInput.value.trim();
      const filme =
        filmeInput.value;
      const ingresso =
        ingressoInput.value;
      if (!nome || !email || !filme || !ingresso) {
        alert(
          'Por favor, preencha todos os campos para garantir seu ingresso!'
        );
        return;
      }
      alert(
        `🍿 Sucesso, ${nome}!\n\n` +
        `Seu ingresso foi reservado com sucesso!\n\n` +
        `🎬 Filme: ${filme}\n` +
        `🎟️ Ingresso: ${ingresso}\n\n` +
        `Enviamos a confirmação para ${email}.`
      );
      // Limpa o select voltando para a opção padrão

      if (filmeSelect) {
        filmeSelect.value = ''; 
      }
// Limpa os campos de texto do formulário
document.querySelector('#nome').value = '';
document.querySelector('#email').value = '';
    });
  }
});