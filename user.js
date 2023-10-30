document.addEventListener("DOMContentLoaded", () => {
  const botonSorteo = document.getElementById("botonSorteo");
  const form = document.getElementById("sorteos");

  function mostrarInfo() {
    form.innerHTML = ``;
    form.innerHTML = `
        <form>
            <input type="text" name="" id="codigo"></input>
            <button type="submit" id="ingresar">Ingregar codigo</button>
        </form>
        `;

    const ingresarButton = document.getElementById("ingresar");
    const codigoInput = document.getElementById("codigo");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const valor_codigo = codigoInput.value;
      alert(valor_codigo);
    });
  }
  botonSorteo.addEventListener("click", mostrarInfo);
});

// es la idea, va tomando forma
