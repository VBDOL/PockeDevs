/*
DESENVOLVEDOR: VBDOL.DEV
GITHUB: https://github.com/VBDOL
LINKEDIN: https://www.linkedin.com/in/victor-b-o-leme-dev
Alura: https://cursos.alura.com.br/user/vbdol-dev
DIO: https://www.dio.me/users/vbdol_dev

DATA: 15/10/2024
*/

// PASSO 1 - Criar uma variável para trabalhar com a listagem de pokedevs
const listaPokedevs = document.querySelectorAll('.pokedev');
const cartoesPokedevs = document.querySelectorAll('.cartao-pokedev');

// PASSO 2 - Identificar o evento de clique no elemento da listagem
listaPokedevs.forEach(pokedev => {
    pokedev.addEventListener('click', () => {

        // PASSO 3 - Remover a classe 'aberto' do cartão que está atualmente aberto
        const cartaoAberto = document.querySelector('.aberto');
        if (cartaoAberto) {
            cartaoAberto.classList.remove('aberto');
        }

        // PASSO 4 - Pegar o id do pokedev clicado para saber qual cartão abrir
        const idPokedevSelecionado = pokedev.id;
        const cartaoParaAbrir = document.getElementById(`cartao-${idPokedevSelecionado}`);
        cartaoParaAbrir.classList.add('aberto');

        // PASSO 5 - Remover a classe 'ativo' que marca o pokedev selecionado na listagem
        const pokedevAtivo = document.querySelector('.ativo');
        if (pokedevAtivo) {
            pokedevAtivo.classList.remove('ativo');
        }

        // PASSO 6 - Adicionar a classe 'ativo' no pokedev clicado
        pokedev.classList.add('ativo');
    });
});
