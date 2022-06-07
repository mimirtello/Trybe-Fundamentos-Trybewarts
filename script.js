const btn = document.querySelector('button');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

function validacao(event) {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btn.addEventListener('click', validacao);
