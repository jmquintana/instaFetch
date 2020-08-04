// console.log('script funcionando');

const imageElement = document.getElementById('image');
const userElement = document.getElementById('userName');
// const anioElement = document.getElementById('anio');
// const boton = document.getElementById('boton');
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (e) {
    let datos = new FormData(formulario);
    let usuario = datos.get('user')
    e.preventDefault();
    // console.log('me diste un clic');
    // console.log(datos.get('user'));
    getUserData(usuario);
});

formulario2.addEventListener('submit', function (e) {
    let datos = new FormData(formulario2);
    let anio = datos.get('anio')
    e.preventDefault();
    // console.log('me diste un clic 2');
    // console.log(datos.get('anio'));
    getUserData(anio);
});

async function getUserData(user) {
    let res = await fetch(`https://www.instagram.com/${user}/?__a=1`);
    console.log(res);
    let data = await res.json();
    console.log(data);

    return {
        imagen: imageElement.src = data.graphql.user.profile_pic_url_hd,
        name: userElement.textContent = data.graphql.user.full_name
    }
}

async function getFeriados(anio) {
    let res = await fetch(`http://nolaborables.com.ar/api/v2/feriados/${anio}`);
    let data = await res.json();
    console.log(data);

    // imageElement.src = data.graphql.user.profile_pic_url_hd;
    anioElement.textContent = data[0].motivo;
}

//getUserData('maryi0410').then(res => userElement.textContent = 'Usuario: ' + res.graphql.user.full_name);