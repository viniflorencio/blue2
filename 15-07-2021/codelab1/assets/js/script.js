const elementoNome = document.getElementById('nome'); /* Cria a variável elementoNome e coloca o elemento com o id nome nela */
const elementoSituacao = document.querySelector('#situacao'); /* Cria a variável elementoSituacao e coloca o elemento com o id situacao nela */
const elementoImg = document.querySelector('#imagem') /* Cria a variável elementoImg e coloca o elemento com o id imagem nela */
let elementoBtn = document.querySelector('#alterar') /* Cria a variável elementoBtn e coloca o elemento com o id alterar nela */

/* Adiciona o evento de click no elementoBtn e executa a função anonima (arrow function) */
elementoBtn.addEventListener('click', () =>{
    /* Verifica se o valour do botão é 'primeiro', se for troque de humor para o Hulk */
    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = './assets/img/larryCarinhoso.png' /* Troca a imagem do personagem */
        elementoNome.innerText = 'Larry Feliz' /* Altera o texto do elemento nome */
        elementoSituacao.innerText = 'Amo um carinho' /* Altera o texto do elemento situação */
        elementoBtn.value = 'segundo' /* Altera valor do botão */
    } else if(elementoBtn.value == 'segundo') { /* Verifica se o valour do botão é 'segundo', se for troque de humor para o Dr. Hulk */
        elementoImg.src = './assets/img/larryBravo.png'  /* Troca a imagem do personagem */
        elementoNome.innerText = 'Larry Bravo' /* Altera o texto do elemento nome */
        elementoSituacao.innerText = 'To muito pistola, sai daqui antes que eu te bique' /* Altera o texto do elemento situação */
        elementoBtn.value = 'terceiro'  /* Altera valor do botão */
    } else if(elementoBtn.value == 'terceiro') { /* Verifica se o valour do botão é 'segundo', se for troque de humor para o Dr. Hulk */
        elementoImg.src = './assets/img/larrySono.png'  /* Troca a imagem do personagem */
        elementoNome.innerText = 'Larry Sonolento' /* Altera o texto do elemento nome */
        elementoSituacao.innerText = 'Deixa eu dormir em paz' /* Altera o texto do elemento situação */
        elementoBtn.value = 'quarto'  /* Altera valor do botão */
}     else { /* Se os valores do botão não forem, 'primeiro' nem 'segundo' mude para o Dr. Banner */
        elementoImg.src = './assets/img/larryTrabalhador.png' /* Troca a imagem do personagem */
        elementoNome.innerText = 'Larry Trabalhador' /* Altera o texto do elemento nome */
        elementoSituacao.innerText = 'Estou indo pro trabalho' /* Altera o texto do elemento situação */
        elementoBtn.value = 'primeiro' /* Altera valor do botão */
    } 
})