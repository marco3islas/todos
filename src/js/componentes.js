import '../css/components.css';
// import bogdana from '../assets/img/bogdana.jpg';


export const  saludar = (nombre) => {
    console.log('Creando etiqueta h1');

    const   h1 = document.createElement('h1') ;
    h1.innerText = `Hola, ${nombre}!!!`;

    document.body.append(h1);

    //const image = document.createElement('img');
    //image.src = bogdana;
    //document.body.append(image);
};
