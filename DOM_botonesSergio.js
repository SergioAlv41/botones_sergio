window.addEventListener('load', () => {
    //Añadimos los diferentes botones, y en el de eliminar, lo que hacemos es quitar el último hijo que le habríamos puesto.
    document.getElementById('botonanadir').addEventListener('click', anadirelemento);
    document.getElementById('botonreemplazar').addEventListener('click', reemplazarelemento);
    document.getElementById('botoncolorear').addEventListener('click', colorearelemento);
    document.getElementById('botoneliminarreemplazados').addEventListener('click', eliminarelementoreemplazado);
    document.getElementById('botoneliminar').addEventListener('click', () => {
        const elemento = document.getElementById('mySection');
        elemento.removeChild(elemento.lastElementChild);
    });
})

//Esta es la función para añadir un elemento, que a su vez, utiliza la función de abajo del todo para crear un artículo, y luego lo añade.
function anadirelemento() {
    const texto = 'Párrafo a añadir';
    const articulo = creararticulo(texto);
    document.getElementById('mySection').appendChild(articulo);
}

//Esta función coge el último hijo de la sección (elemento) y lo reemplaza por el articulo (hecho mediante la función creararticulo).
function reemplazarelemento() {
    const elemento = document.getElementById('mySection').lastElementChild;
    const articulo = creararticulo('Artículo reemplazado');
    document.getElementById('mySection').replaceChild(articulo, elemento);
}

//Función para colorear los elementos pares: seleccionamos todos los elementos del documento, y comprobamos cuáles son pares, y a los que lo sean, los ponemos en otro color (azul, en este caso).
function colorearelemento() {
    const nodeList = [...document.querySelectorAll('.myArticle')];
    nodeList.forEach((elemento, index) => {
        if (!index % 2) {
            elemento.getElementsByClassName.backgroundColor = 'blue';
        }
    })
}

//Esta función es para eliminar los elementos reemplazados: miramos si cada uno de los elementos coincide con el texto "Artículo reemplazado", y si es así, lo quitamos.
function eliminarelementoreemplazado() {
    const padre = document.getElementById('mySection');
    const htmlCollection = [...document.getElementsByClassName('myArticle')];
    htmlCollection.forEach((element, index) => {
        if (elemento.innerHTML==='Artículo reemplazado') {
            padre.removeChild(element);
        }
    });
}

//Esta última función sería una función "auxiliar" que hemos utilizado en la de anadirelemento y en la de reemplazarelemento: creamos un nodo de texto y un artículo, y a este artículo le metemos al final ese nodo de texto, y devolvemos el propio artículo.
function creararticulo(txt) {
    const nodeTxt=document.createTextNode(txt);
    const articulo=document.createElement('article');
    articulo.appendChild(nodeTxt);
    articulo.setAttribute('class','myArticle');
    return articulo;
}