const btn = document.querySelector('button');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btnSubmit = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');

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

btn.addEventListener('click', validacao);

agreement.addEventListener('click', enviar);
