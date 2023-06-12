/* tela de login
const telaLogin = document.querySelector('.telaLogin');
const loginlink = document.querySelector('.login-link');
const registrarlink = document.querySelector('.registrar-link');
const btnpopup = document.querySelector('.btnLogin-popup');
const iconclose = document.querySelector('.icon-close');

registrarlink.addEventListener('click', ()=> {
    telaLogin.classList.add('active');
})

loginlink.addEventListener('click', ()=> {
    telaLogin.classList.remove('active');
})

btnpopup.addEventListener('click', ()=> {
    telaLogin.classList.add('active-popup');
})

iconclose.addEventListener('click', ()=> {
    telaLogin.classList.remove('active-popup'); 
})

function login() {
    window.location.href ="paciente.html";
}

function login() {
    window.location.href ="login.html";
} */

/* efeito digitando */
/*function escrevendoLetra(){ */
function ativarLetra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((Letra, i) =>{
        setTimeout(()=>{
            elemento.innerHTML += Letra;
        }, 75 * i);
    });
}

const titulo = document.querySelector('.digitando');
ativarLetra(titulo);
