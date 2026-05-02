function mostrar(id) {
  const abas = document.querySelectorAll('.aba');
  abas.forEach(aba => {
    aba.classList.remove('ativa');
  });

  document.getElementById(id).classList.add('ativa');
}

mostrar('dashboard');