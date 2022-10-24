async function botonCrearUsuario() {
    event.preventDefault()

    const correo = document.getElementById('correo').value
    const password = document.getElementById('password').value

    crearUsuario(correo, password)
    
}

function registrarDatos(user) {
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const numeroContacto = document.getElementById('numeroCelular').value
    const tipoUsuario = 'Ns9cL8H1w1ynDoccdur3'
    console.log(nombre, apellido, numeroContacto, tipoUsuario)
    console.log(user)
    db.collection('usuarios').doc(user).set({ apellido, correo, nombre, numeroContacto, tipoUsuario })
}