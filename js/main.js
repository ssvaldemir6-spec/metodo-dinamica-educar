function toggleAutismMode() {
  document.body.classList.toggle('autism-mode');
  const btn = document.getElementById('modeBtn');
  btn.textContent = document.body.classList.contains('autism-mode')
    ? 'Modo Autista: Ligado'
    : 'Modo Autista: Desligado';
}
