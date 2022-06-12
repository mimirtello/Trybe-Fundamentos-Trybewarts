const btn = document.querySelector('button');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btnSubmit = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
// const main = document.querySelector('main');
const form = document.querySelector('#evaluation-form');
const nome = document.querySelector('#input-name');
const sobrenome = document.querySelector('#input-lastname');
const apareceDados = document.querySelector('#apareceDados');
const select = document.querySelector('#house');
const emailUsuario = document.querySelector('#input-email');
const materias = [];

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

function criaParagrafo() {
  const formdata = document.querySelector('#form-data');
  for (let index = 0; index <= 6; index += 1) {
    const paragrafo = document.createElement('p');
    formdata.appendChild(paragrafo);
    paragrafo.className = `paragrafo${index}`;
  }
}
function nomeDaPessoaUsuaria() {
  criaParagrafo();
  const nomeDaPessoa = nome.value;
  const sobrenomeDaPessoa = sobrenome.value;
  const paragrafo = document.querySelector('.paragrafo0');
  paragrafo.innerText = `Nome: ${nomeDaPessoa} ${sobrenomeDaPessoa}`;
}

function emailDaPessoaUsuaria() {
  const emailDaPessoa = emailUsuario.value;
  const paragrafo = document.querySelector('.paragrafo1');
  paragrafo.innerText = `Email: ${emailDaPessoa}`;
}

function casaEscolhida() {
  const casa = select.value;
  const paragrafo = document.querySelector('.paragrafo2');
  paragrafo.innerText = `Casa: ${casa}`;
}
// https://pt.stackoverflow.com/questions/219949/pegar-o-valor-do-input-radio-com-javascript

function familiaEscolhida() {
  const familia = document.querySelector('input[name="family"]:checked').value;
  const paragrafo = document.querySelector('.paragrafo3');
  paragrafo.innerText = `Família: ${familia}`;
}

// Inspiração: https://stackoverflow.com/questions/11599666/get-the-value-of-checked-checkbox

function materiasEscolhidas() {
  const subject = document.querySelectorAll('.subject');
  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked === true) {
      materias.push(subject[index].value);
    }
  }
  const paragrafo = document.querySelector('.paragrafo4');
  paragrafo.innerText = `Matérias: ${materias.join(', ')} `;
}

function avaliacao() {
  const avaliacaoDoUsuario = document.querySelector('input[name="rate"]:checked').value;
  const paragrafo = document.querySelector('.paragrafo5');
  paragrafo.innerText = `Avaliação: ${avaliacaoDoUsuario}`;
}

function observacoes() {
  const texto = textarea.value;
  const paragrafo = document.querySelector('.paragrafo6');
  paragrafo.innerText = `Observações: ${texto}`;
}

function apareceInformacoes(event) {
  event.preventDefault();
  form.style.display = 'none';
  const formulario = document.createElement('div');
  formulario.id = 'form-data';
  apareceDados.appendChild(formulario);
  nomeDaPessoaUsuaria();
  emailDaPessoaUsuaria();
  casaEscolhida();
  familiaEscolhida();
  materiasEscolhidas();
  avaliacao();
  observacoes();
}

btn.addEventListener('click', validacao);

agreement.addEventListener('click', enviar);

textarea.addEventListener('input', contar);

btnSubmit.addEventListener('click', apareceInformacoes);
