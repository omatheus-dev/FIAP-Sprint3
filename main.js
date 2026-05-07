function mostrar(id, elemento) {
  const abas = document.querySelectorAll('.aba');
  const itensMenu = document.querySelectorAll('.sidebar__nav li');

  abas.forEach(aba => aba.classList.remove('ativa'));
  document.getElementById(id).classList.add('ativa');

  itensMenu.forEach(item => item.classList.remove('ativo'));

  elemento.classList.add('ativo');
}

mostrar('fale-conosco', document.querySelector('.sidebar__nav li'));