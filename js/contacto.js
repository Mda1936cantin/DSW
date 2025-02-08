const enviarFormulario = (e) => {
  e.preventDefault()
  
  templateParams = {
  nombre: this.nombre.value,
  apellido: this.apellido.value,
  email: this.email.value,
  comentario: this.comentario.value
  }
  
  emailjs.send(
    'service_m11d11a',
    'template_nr0xg0c',
    templateParams,
    'Xn1SwNFhxAUE5yT3H'
  ).then(() => {
    console.log('FORMULARIO ENVIADO')
  }, (err) => {
    console.log('Envio fallido', err)
  })
}


window.onload = function () {
  const myForm = document.getElementById("myForm")
  myForm.addEventListener("submit", enviarFormulario)

}