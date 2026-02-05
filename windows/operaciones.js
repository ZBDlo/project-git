window.electronAPI.onUserData((event, nombre) => {
  document.getElementById("saludo").textContent =
    `Hola, ${nombre}. Selecciona una operación.`;
});

function calcular() {
  const n1 = Number(document.getElementById("num1").value);
  const n2 = Number(document.getElementById("num2").value);
  const op = document.getElementById("operacion").value;

  let res = 0;

  switch (op) {
    case "sumar":
      res = n1 + n2;
      break;
    case "restar":
      res = n1 - n2;
      break;
    case "multiplicar":
      res = n1 * n2;
      break;
    case "dividir":
      res = n2 !== 0 ? n1 / n2 : "Error";
      break;
  }

  document.getElementById("resultado").textContent =
    `Resultado: ${res}`;
}
