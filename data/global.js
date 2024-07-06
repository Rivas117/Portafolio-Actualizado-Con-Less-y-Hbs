const global = (path) => {
    return {
        menuOptions: getMenuWithActivePath(path)
    }
}

const getMenuWithActivePath = (path) => {
    return [
        {
            nombre: "Portafolio De Luis Rivas",
            advertencia: "Si alguna razon el Github pages no da revisar el codigo",
            imagen: "img/gatocomuneuropeo-97.png",
        },
        {
            subtitulo: "Sobre Mi",
            contenido: "Soy estudiante de la Universidad Catolica De Honduras, Tengo 21 años que los cumpli el 11 De septiembre. Estudio la carrera de Ingenieria en ciencias de la computacion y estoy aprendiendo a programar, es una area que me cuesta mucho e intento mejorar cada dia de momento solo me gusta hacer las cosas funcionales ya que si me ponga a hacer muchas mas cosas no tendria tiempo para otras clases",
        },
        {
            mensaje: "Contactame",
            link1: "https://github.com/Rivas117",
            link1n: "Github",
            link2: "https://mdl23.unicah.net/user/profile.php?id=17750",
            link2n: "Moodle",
        }
    ]
}

export default global;