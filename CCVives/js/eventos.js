const solicitarEvento = async() => {
    event.preventDefault()
    let asistentes = document.getElementById('assistants').value
    let fecha = document.getElementById('date').value
    let tipoDeEvento = document.getElementById('eventType').value
    let usuario = 'gP7l1FvaHTXcZxW1XwwArqfluUx1'
    console.log(asistentes + fecha + tipoDeEvento)
    
    await setSolicitudEvento(asistentes,fecha,tipoDeEvento,usuario)
}

async function mostrarEventos(){
    let eventos = await getSolicitudesEventos()
    eventos.forEach(element => {
        let datos = element.data();
        const id = element.id
        const asistentes = datos.asistentes
        const fecha = datos.fecha
        const tipoDeEvento = datos.tipoDeEvento
        const usuario = 'Admin'
        imprimirSolicitudEventos(datos, id)
        console.log(id +' '+ asistentes+' '+ fecha+' '+ tipoDeEvento+' '+ usuario)
    });
}

async function imprimirSolicitudEventos(datos, id){
    const contenedor = document.getElementById('solicitudesEventos')

    contenedor.innerHTML += `
    <form id="solicitudesEventos${id}" class = "vistaSolicitudes border col-md-8">
        <label style="font-size: 2rem;">Solicitud de evento</label>
        <div class="form-group">
        <p> Número de asistentes: ${datos.asistentes} <br> </p>
        <p> Fecha del evento: ${datos.fecha} <br> </p>
        <p> Tipo de evento: ${datos.tipoDeEvento} <br> </p>
        <p> Usuario que realizó la solicitud: ${datos.usuario} <br> </p>
        </div>
        <div class="form-buttons">
            <button type="submit" class="btn btn-primary">Aceptar</button>
            <button type="reset" class="btn btn-default">Rechazar</button>
        </div>
        
        
    </form>
`

}

mostrarEventos()