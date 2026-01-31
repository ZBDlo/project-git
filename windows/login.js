function ingresar() {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const mensaje = document.getElementById("mensaje");

  if (!nombre || !apellido) {
    mensaje.textContent = "Todos los campos son obligatorios.";
    return;
  }

  mensaje.textContent = `Bienvenido/a, ${nombre} ${apellido}. Accediendo...`;
  window.electronAPI.loginSuccess(nombre);
}
