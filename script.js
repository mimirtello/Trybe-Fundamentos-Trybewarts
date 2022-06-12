const btn = document.querySelector('button');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btnSubmit = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

function validacao(event) {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function enviar(event) {
  if (event.target.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

// Bonus
// Consultei o MDN para parseInt e input

function contar() {
  counter.innerText = 500 - parseInt(textarea.value.length, 10);
}

btn.addEventListener('click', validacao);

agreement.addEventListener('click', enviar);

textarea.addEventListener('input', contar);
