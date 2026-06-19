const btnCalcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

if (btnCalcular) {
  btnCalcular.addEventListener('click', () => {
    const litros = Number(document.getElementById('litros').value);
    const vezes = Number(document.getElementById('vezes').value);

    if (litros <= 0 || vezes <= 0) {
      errorMessage('Por favor, insira valores positivos para litros e vezes.', 'resultado');
      return;
    }

    const total = litros * vezes;
    successMessage(`O consumo total de água é: ${total} litros por dia.`, 'resultado');
  });
}

function successMessage(message, elementId) {
  const element = document.getElementById(elementId);
  element.textContent = message;
  element.classList.remove('error');
  element.classList.add('success');
}

function errorMessage(message, elementId) {
  const element = document.getElementById(elementId);
  element.textContent = message;
  element.classList.add('error');
}