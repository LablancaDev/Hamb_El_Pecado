// JAVASCRIPT PARA LA APERTURA DEL MENU NAV 

/*seleccionamos un elemento que contenga la clase hamburguesa*/
const menu = document.querySelector(".hamburguesa");

/*seleccionamos un elemento que contenga la clase navegador
ya que lo que queremos hacer es que cuando hagamos click, que la clase ocultar que creamos 
en html se quite y muestre de nuevo el menu de navegacion*/
const navegador = document.querySelector(".navegador");

/*REVISAR!!! Evento que realiza la primera llamada al método eventos()*/
document.addEventListener("DOMContentLoaded",()=>{
    eventos();//llamada a la funcion eventos();
});


const eventos = () =>{
 menu.addEventListener("click",abrirMenu);//agregamos el evento del menú, cuando el usuario haga click se ejecutará la function de abrir menu
}

const abrirMenu = () =>{
// console.log(navegador);/**/
//para probar que funciona correctamente al pulsar en el menu se mostrará en consola(en herramientas de desarrollador la seleccion de la clase...)

navegador.classList.remove("ocultar");//a la clase navegador.classlist le vamos a quitar la clase ocultar para mostrar el menu del navegador.
//ahora al pulsar al botón aparece el menú desplegable

botonCerrar();//la llamada a la funcion botonCerrar() la pongo aquí para que solamente cuando se abra el menu dibuje una X para poder volver a cerrar el menu
}

// JAVASCRIPT PARA EL BOTON CERRAR

const botonCerrar = ()=>{
    const botCerrar = document.createElement("p");//vamos a crear el boton x con html a través de javascript, creación de un parrafo
    const overlay = document.createElement("div");//creamos un div para cubirir la pantalla(overlay)

    overlay.classList.add("pantalla-completa"); //el overlay contendra una clase llamada pantalla-completa, esta clase la tendremos que crear en css

    
    const body = document.querySelector("body");//seleccionamos nuestro body 

    if(document.querySelectorAll(".pantalla-completa").length>0)return;//esta condicion dice que si la longitud de los divs(clicks que hacemos) es mayor a 0 que termine la ejecucion del programa, explicacion video min 1:30
    
    body.appendChild(overlay);/*cuando pulsamos en el menu navegacion conseguimos que aparezca una pantalla completa*/ 

    botCerrar.textContent = "X"; //el metodo textContent agrega texto al elemetno creado parrafo("p")
    botCerrar.classList.add("botCerrar");//añadimos o llamamos a una clase de css
    
    // UNA FORMA DE NO CREAR PARRAFOS INNECESARIOS 
    // while(navegador.children[5]){//cada vez que le doy a abrir el menu se genera un parrafo (botcerrar)para evitar esto vamos a resolverlo con un bucle while
    //     //es el tamaño de hijos que hay, le decimos que mientras exista el parrafo nos vaya quitando el anterior
    //     navegador.removeChild(navegador.children[5]);//de esta forma solo se generará un parrafo de boton cerrar, mirar video min 1:39 
    // }

    navegador.appendChild(botCerrar);//poner el boton en la barra de navegacion,hay que agregar un nuevo hijo y pasrle el boton cerrar 
    cerrarMenu(botCerrar,overlay);//llamamos a la funcion cerrarMenu y le pasamos como parametro botCerrar y el overlay
}

/*evento para que cuando le demos click cierre el menu*/


const cerrarMenu = (boton,overlay)=>{//esta funcion recibe como parametro un boton (boton)
    boton.addEventListener("click",()=>{
    navegador.classList .add("ocultar");  //le agregamos a navegador la clase ocultar para cerrar el menu al pulsar 
    overlay.remove();//para que cuando hagamos click que el overlay se quite
    
    //OTRA FORMA DE NO CREAR PARRAFOS INNECESARIOS ADEMÁS DE BORRAR EL UNICO QUE SE CREA
    boton.remove();
    });

    overlay.onclick = function(){/*esta funcion del overlay es solo para que cundo pulsemos en la pantalla tambien se quite el menu del nav min 1:29 video*/ 
        overlay.remove();//para eliminar el overlay(pantalla completa oscura)
        navegador.classList.add("ocultar");//para ocultar la barra del menu navegador
        
        //OTRA FORMA DE NO CREAR PARRAFOS INNECESARIOS ADEMÁS DE BORRAR EL UNICO QUE SE CREA, 
        boton.remove();
    }
}
