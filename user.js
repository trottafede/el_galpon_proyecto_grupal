document.addEventListener("DOMContentLoaded", () => {
  const botonSorteo = document.getElementById("ingresar");
  const form = document.getElementById("form");
  const info = document.getElementById("sorteos")
  const participacionUser = document.getElementById("participacion")
  let sorteo = JSON.parse(localStorage.getItem("lista")) || [];


  //participaciones
  if (!sorteo == []){
    info.innerHTML = ``
    for(const user of sorteo){
      info.innerHTML += `
      <p>${user.nombre} - ${user.participacion}</p>
      `
    }
  }
   
  function mostrarInfoSorteo() {  
    const email = document.getElementById("inputEmail4");
    const nombre = document.getElementById("inputNombre");
    const apellido = document.getElementById("inputApellido");
    const telefono = document.getElementById("inputNum");
    const barcode = document.getElementById("barcode");
    const codigoInput = document.getElementById("codigo");

    const user = {
      participacion: codigoInput.value,
      email: email.value,
      nombre: nombre.value,
      apellido: apellido.value,
      telefono: telefono.value
    }
    const personaEncontrada = sorteo.find(user => user.participacion == codigoInput.value);
    
    if(personaEncontrada){
      alert("el codigo es invalido")
    }else{
      sorteo.push(user)
      localStorage.setItem("lista", JSON.stringify(sorteo));

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const valor_codigo = codigoInput.value;
        JsBarcode(barcode, valor_codigo, {
          format: "codabar",
          lineColor: "#000",
          width: 2,
          height: 40,
          displayValue: true
        });
      });
    }
    info.innerHTML = ``;
    for(const user of sorteo){
      info.innerHTML += `<p>${user.nombre} - ${user.participacion}</p>`
    }

  

    

    
 
    
  }
  botonSorteo.addEventListener("click", mostrarInfoSorteo);


});

// es la idea, va tomando forma
