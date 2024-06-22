//fn realizada aqui por temas de espacio
export function validate(input){

  //Expresión regular de un email
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  
  //Declaramos un nuevo objeto
  const errors = {}

  if (!input) {
    return errors;
  }
  
  //+ CONDICIONALES

  //° NOMBRE
  //Si no hay nada en name =>
  if(!input.from_name.length) errors.from_name = "Ingrese un nombre  ⚠";
  else{
    if(input.from_name.length < 3) errors.from_name = "Debe tener al menos 3 caracteres ⚠";
  }

  //° EMAIL
  //Si no hay nada en email => 
  if(!input.email.length) errors.email = "Ingrese un email ⚠";
  else{
    //Si no cumple con ser igual a la expresión regular =>
    if(!regexEmail.test(input.email)){
      errors.email = "Ingrese un email valido ⚠"
    }
    //Si el email tiene más de 35 caracteres
    if(input.email.length > 35){
      errors.email = "Ingrese un email de menos de 35 caracteres ⚠"
    }
  }

  //° MENSAJE
  //Si no hay nada en contacto =>
  if(!input.message.length) errors.message = "Ingrese un mensaje ⚠";
  else{
    if(input.message.length < 20) errors.message = "Debe tener al menos 20 caracteres ⚠";
  }
  return errors
}