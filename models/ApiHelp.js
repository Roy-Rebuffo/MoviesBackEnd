//EN ESTA SECCION DE API TE GUIO CON MIS METODOS PARA QUE PUEDAS CORREGIR MAS RAPIDO MI EJERCICIO

//ESTOS SON LOS METODOS QUE HE USADO PARA LAS RUTAS DE CINEMA

// Métodos para las rutas de Cinema
[
    {
      "metodo": "GET",
      "ruta": "/cinemas",
      "descripcion": "TE DEVUELVE EL JSON DE CINEMAS",
      "descripcion_en_caso_de_error": "Error del servidor"
    },
    {
      "metodo": "POST",
      "ruta": "/cinemas/create",
      "descripcion": "TE DEVUELVE EL JSON CON TU POST DE CINEMAS",
      "descripcion_en_caso_de_error": "Error del servidor"
    },
    {
      "metodo": "DELETE",
      "ruta": "/cinemas/:id",
      "descripcion": "TE DEVUELVE EL JSON DEL CINEMA QUE HAS BORRADO POR ID",
      "descripcion_en_caso_de_error": "Error del servidor"
    },
    {
      "metodo": "PUT",
      "ruta": "/cinemas/:id/add-movies",
      "descripcion": "TE DEVUELVE EL JSON CON EL CINEMA QUE HAS EDITADO",
      "descripcion_en_caso_de_error": "Error del servidor"
    }
  ]
  
  // Métodos para las rutas de Movies
  [
    {
      "metodo": "GET",
      "ruta": "/movies",
      "descripcion": "TE DEVUELVE EL JSON DE MOVIES COMPLETO",
      "descripcion_en_caso_de_error": "Error del servidor"
    },
    {
      "metodo": "GET",
      "ruta": "/movies/:title",
      "descripcion": "TE DEVUELVE EL JSON DEL TITULO DE MOVIES QUE HAYAS BUSCADO POR SU NOMBRE",
      "descripcion_en_caso_de_error": "Error del servidor"
    },
    {
      "metodo": "GET",
      "ruta": "/movies/year/:year",
      "descripcion": "TE DEVUELVE EL JSON DEL AÑO DE MOVIES QUE HAYAS BUSCADO POR SU AÑO",
      "descripcion_en_caso_de_error": "Error del servidor"
    },
    {
      "metodo": "GET",
      "ruta": "/movies/genre/:genre",
      "descripcion": "TE DEVUELVE EL JSON DEL GENERO DE MOVIES QUE HAYAS BUSCADO POR SU GENERO",
      "descripcion_en_caso_de_error": "Error del servidor"
    },
    {
      "metodo": "GET",
      "ruta": "/movies/id/:id",
      "descripcion": "TE DEVUELVE EL JSON DE MOVIES QUE HAS BUSCADO POR ID",
      "descripcion_en_caso_de_error": "Error del servidor"
    },
    {
      "metodo": "POST",
      "ruta": "/movies/create",
      "descripcion": "TE DEVUELVE EL JSON CREADO DE MOVIES",
      "descripcion_en_caso_de_error": "Error del servidor"
    },
    {
      "metodo": "DELETE",
      "ruta": "/movies/:id",
      "descripcion": "TE DEVUELVE EL JSON DE MOVIES QUE HAS BORRADO",
      "descripcion_en_caso_de_error": "Error del servidor"
    },
    {
      "metodo": "PUT",
      "ruta": "/movies/edit/:id",
      "descripcion": "TE DEVUELVE EL JSON DE MOVIES QUE HAS MODIFICADO",
      "descripcion_en_caso_de_error": "Error del servidor"
    }
  ]
  
  //RUTAS PARA LOS REGISTER, LOG-IN, LOG-OUT
  [
    {
        "metodo": "POST",
        "ruta": "/user/register",
        "descripcion": "TE DEVUELVE EL JSON DE LA CUENTA CREADA",
        "descripcion_en_caso_de_error": "El usuario ya existe",
        "required": {
            email:"",
            password:""
        }
    },
    {
        "metodo": "POST",
        "ruta": "/user/login",
        "descripcion": "TE DEVUELVE EL UN JSON CON LA CUENTA QUE HAS USADO PARA ACCEDER",
        "descripcion_en_caso_de_error": "El usuario no existe",
        "required": {
            email:"",
            password:""
        }
    },
    {
        "metodo": "POST",
        "ruta": "/user/login",
        "descripcion": "TE DEVUELVE EL UN MENSAJE QUE DICE: HASTA PRONTO!",
        "descripcion_en_caso_de_error": "El usuario no existe"
    }
  ]