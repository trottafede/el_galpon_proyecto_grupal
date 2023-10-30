document.addEventListener("DOMContentLoaded", () =>{
    const botonSorteo = document.getElementById("botonSorteo");
    const form = document.getElementById("sorteos");


    function mostrarInfo(){
        form.innerHTML = ``
        form.innerHTML = `
        <form>
            <input type="text" name="" id="codigo"></input>
            <button type="submit" id="ingresar">Ingregar codigo</button>
        </form>
        `;
        
        const ingresarButton = document.getElementById("ingresar");
        const codigoInput = document.getElementById("codigo");

        form.addEventListener("submit", (e) =>{
            e.preventDefault();
            const valor_codigo = codigoInput.value;
            alert(valor_codigo)
        }

        
    )}
    botonSorteo.addEventListener("click", mostrarInfo)
})

//fede estas en un cumple como yo JAJJAJAJAJJAJA estoy en discord pero no me escuchan creo (?) F pa mi
//que queres hacer con el form? 
//El franco te esta matando JAJAJAJ 
// pero nahuel decime que es lo que queres hacer con el form -que agarre un numero o codigo, y lo haga un codigo qr o no se, que de info como un ticket para participar en el sorteo 
// uuuuu yo la quiero re ver
// aca somos bilingues fede hay que adaptarse sino la quedas
// cuando clickeo el boton me sale un input vacio 
// JAJAJJAJAJque forro fede 
// eeee tipo los input sacarlos de los costados decis?
// los input de apellido y numero de tel los dejo ahi no?
// toy "arreglando" el user
// JAJJAJAJAJAJJAJJAJAJAJJAJAJAJJA fede sos un hijo de puta
// pero me rei por algo que dijo la cordinadora de cecilia
// te juro, esta vez me contuve porque a parte no dijo nada "malo" 
// quien me esta tocando el usuario, es el franco 
// franco deja de tocar JAJJAJAJ
// JAJAJAJJAJAJ porque lo pusiste arriba
// tas pa esa franco
// a ver ahi creo que esta bien
// n
//si, a donde los moverias?/*  */
// es la idea, va tomando forma

